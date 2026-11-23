"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { withBase } from "@/lib/paths";

type FrameSequence = {
  dir: string;
  prefix?: string;
  ext?: string;
  count: number;
  pad?: number;
};

function frameSrc(sequence: FrameSequence, frameNumber: number) {
  const prefix = sequence.prefix ?? "frame-";
  const ext = sequence.ext ?? ".jpg";
  const pad = sequence.pad ?? 3;
  return withBase(
    `${sequence.dir.replace(/\/$/, "")}/${prefix}${String(frameNumber).padStart(pad, "0")}${ext}`,
  );
}

export function ScrollFilm({
  frames,
  poster,
  label,
  hint,
  className,
  children,
}: {
  frames: FrameSequence;
  poster: string;
  label?: string;
  hint?: string;
  className?: string;
  children?: ReactNode;
}) {
  const trackRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(1);

  const count = frames.count;
  const dir = frames.dir;
  const prefix = frames.prefix ?? "frame-";
  const ext = frames.ext ?? ".jpg";
  const pad = frames.pad ?? 3;

  useEffect(() => {
    const track = trackRef.current;
    const image = imageRef.current;
    if (!track || !image) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.classList.add("is-static");
      image.classList.add("is-ready");
      return;
    }

    let alive = true;
    const sequence = { dir, prefix, ext, count, pad };
    const cache = new Map<number, HTMLImageElement>();

    const warm = (frameNumber: number) => {
      if (cache.has(frameNumber)) return cache.get(frameNumber)!;
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(sequence, frameNumber);
      cache.set(frameNumber, img);
      return img;
    };

    const show = (frameNumber: number) => {
      const next = Math.min(count, Math.max(1, frameNumber));
      if (next === frameRef.current && image.classList.contains("is-ready")) return;
      frameRef.current = next;
      const src = frameSrc(sequence, next);
      if (image.getAttribute("src") !== src) image.src = src;
      image.dataset.frame = String(next);
      image.classList.add("is-ready");
      warm(next);
      if (next > 1) warm(next - 1);
      if (next < count) warm(next + 1);
      // Prefetch a short runway for fast scrolls.
      if (next + 2 <= count) warm(next + 2);
      if (next + 3 <= count) warm(next + 3);
    };

    const update = () => {
      if (!alive) return;
      const rect = track.getBoundingClientRect();
      const total = Math.max(track.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      show(1 + Math.round(progress * (count - 1)));
      hintRef.current?.classList.toggle("is-hidden", progress > 0.04);
    };

    show(1);
    update();

    const preload = async () => {
      const batch = 12;
      for (let start = 2; start <= count && alive; start += batch) {
        const jobs = [];
        for (let n = start; n < start + batch && n <= count; n += 1) {
          const img = warm(n);
          jobs.push(
            img.decode?.().catch(() => undefined) ??
              new Promise<void>((resolve) => {
                if (img.complete) resolve();
                else {
                  img.onload = () => resolve();
                  img.onerror = () => resolve();
                }
              }),
          );
        }
        await Promise.all(jobs);
      }
    };
    void preload();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("scroll", update, { passive: true, capture: true });

    return () => {
      alive = false;
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("scroll", update, true);
    };
  }, [count, dir, prefix, ext, pad]);

  return (
    <section
      ref={trackRef}
      className={className ? `scroll-film ${className}` : "scroll-film"}
      aria-label={label}
    >
      <div className="scroll-film-sticky">
        <div className="scroll-film-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scroll-film-poster" src={withBase(poster)} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            className="scroll-film-frame"
            src={frameSrc({ dir, prefix, ext, count, pad }, 1)}
            alt=""
            decoding="async"
            data-frame="1"
          />
        </div>
        {children ? <div className="scroll-film-copy">{children}</div> : null}
        <div ref={hintRef} className="scroll-film-hint" aria-hidden="true">
          <span className="scroll-film-hint-mouse">
            <span className="scroll-film-hint-wheel" />
          </span>
          {hint ? <span className="scroll-film-hint-label">{hint}</span> : null}
          <span className="scroll-film-hint-arrows">
            <span />
            <span />
          </span>
        </div>
      </div>
    </section>
  );
}
