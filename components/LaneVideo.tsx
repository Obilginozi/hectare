"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { withBase } from "@/lib/paths";

type LaneVideoProps = {
  src: string;
  poster: string;
};

/** Lightweight muted loop for lane panels — loads only when near viewport. */
export function LaneVideo({ src, poster }: LaneVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const file = withBase(src);
    let loaded = false;

    const ensureSrc = () => {
      if (loaded) return;
      loaded = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.loop = true;
      video.preload = "metadata";
      video.src = file;
      video.load();
    };

    const markReady = () => {
      video.classList.add("is-ready");
    };

    const play = () => {
      ensureSrc();
      const p = video.play();
      if (p) p.then(markReady).catch(() => undefined);
      else markReady();
    };

    const pause = () => {
      if (!video.paused) video.pause();
    };

    video.addEventListener("playing", markReady);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.15) play();
        else pause();
      },
      { rootMargin: "120px 0px", threshold: [0, 0.15, 0.4] },
    );

    io.observe(root);
    return () => {
      video.removeEventListener("playing", markReady);
      io.disconnect();
      pause();
    };
  }, [src]);

  return (
    <div ref={rootRef} className="lane-panel-media" aria-hidden="true">
      <Image src={withBase(poster)} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
      <video ref={videoRef} muted playsInline loop preload="none" />
    </div>
  );
}
