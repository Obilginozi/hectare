"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { chapters } from "@/lib/content";
import { withBase } from "@/lib/paths";

const VIDEO_SRC = withBase("/media/unver-hero.mp4");
const POSTER_SRC = withBase("/media/unver-hero-poster.jpg");

function band(
  progress: number,
  fadeInStart: number,
  fadeInEnd: number,
  fadeOutStart: number,
  fadeOutEnd: number,
  hold: boolean,
) {
  if (progress < fadeInStart) return 0;
  if (progress < fadeInEnd) {
    return (progress - fadeInStart) / (fadeInEnd - fadeInStart);
  }
  if (hold || progress <= fadeOutStart) return 1;
  if (progress < fadeOutEnd) {
    return 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  }
  return 0;
}

function Caption({
  label,
  lines,
}: {
  label: string;
  lines: readonly string[];
}) {
  return (
    <>
      <p className="caption-label">{label}</p>
      <p className="caption-title">
        {lines.map((line, index) => (
          <span key={line}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    </>
  );
}

export function HeroFilm() {
  const trackRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let duration = 0;
    let want = 0;
    let pending = false;
    let pendingAt = 0;
    let primed = false;

    const flush = () => {
      if (video.readyState < 1) return;
      if (Math.abs(video.currentTime - want) < 0.04) {
        pending = false;
        return;
      }
      pending = true;
      pendingAt = performance.now();
      try {
        video.currentTime = want;
      } catch {
        pending = false;
      }
    };

    const seekTo = (time: number) => {
      want = time;
      if (pending) return;
      flush();
    };

    const onSeeked = () => {
      pending = false;
      if (!video.paused) video.pause();
      if (Math.abs(video.currentTime - want) > 0.05) flush();
    };

    const onEnded = () => {
      pending = false;
      const park = Math.max(0, (Number.isFinite(video.duration) ? video.duration : 0) - 0.1);
      want = Math.min(want, park);
      flush();
    };

    const prime = () => {
      if (primed || motion.matches || !video.src || video.readyState < 1) return;
      primed = true;
      const played = video.play();
      if (!played) {
        video.pause();
        return;
      }
      played
        .then(() => {
          video.pause();
          pending = false;
          flush();
        })
        .catch(() => {
          primed = false;
        });
    };

    const update = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

      const hint = progress < 0.03 ? 1 : progress < 0.12 ? 1 - (progress - 0.03) / 0.09 : 0;
      track.style.setProperty("--hint", hint.toFixed(4));
      track.style.setProperty("--o2", band(progress, 0.25, 0.35, 0.45, 0.55, false).toFixed(4));
      track.style.setProperty("--o3", band(progress, 0.48, 0.58, 0.65, 0.72, false).toFixed(4));
      track.style.setProperty("--o4", band(progress, 0.68, 0.75, 1, 1, true).toFixed(4));

      if (!motion.matches && duration > 0) {
        const last = Math.max(0, duration - 0.1);
        seekTo(Math.min(progress, 1) * last);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const onMeta = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      update();
    };

    const onReady = () => {
      track.dataset.ready = "true";
      video.pause();
      prime();
    };

    const applyMode = () => {
      const reduced = motion.matches;
      track.dataset.reduced = reduced ? "true" : "false";
      if (reduced) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        track.dataset.ready = "false";
        return;
      }
      if (video.getAttribute("src") !== VIDEO_SRC) {
        video.src = VIDEO_SRC;
      }
    };

    const watchdog = window.setInterval(() => {
      if (!pending || performance.now() - pendingAt < 280) return;
      pending = false;
      flush();
    }, 140);

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    applyMode();
    if (video.readyState >= 1) onMeta();
    if (video.readyState >= 2) onReady();

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("ended", onEnded);
    motion.addEventListener("change", applyMode);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", prime, { passive: true });
    window.addEventListener("touchstart", prime, { passive: true });
    window.addEventListener("keydown", prime);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(watchdog);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("ended", onEnded);
      motion.removeEventListener("change", applyMode);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", prime);
      window.removeEventListener("touchstart", prime);
      window.removeEventListener("keydown", prime);
    };
  }, []);

  return (
    <section className="film" ref={trackRef} aria-label="Tanıtım filmi">
      <div className="film-sticky">
        <div className="film-frame">
          <Image
            src={POSTER_SRC}
            alt="Altın buğday tarlasında çalışan biçerdöver"
            fill
            priority
            sizes="100vw"
            className="film-poster"
          />
        </div>
        <video
          ref={videoRef}
          className="film-video"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="film-wash" aria-hidden="true" />
        <div className="scroll-hint" aria-hidden="true">
          <span>Kaydır</span>
          <i />
        </div>
        <div className="captions" aria-hidden="true" lang="tr">
          {chapters.map((chapter) => (
            <div key={chapter.id} className={`caption caption--${chapter.modifier}`}>
              <Caption label={chapter.label} lines={chapter.lines} />
            </div>
          ))}
        </div>
      </div>
      <div className="film-static" lang="tr">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="static-block">
            <Caption label={chapter.label} lines={chapter.lines} />
          </div>
        ))}
      </div>
    </section>
  );
}
