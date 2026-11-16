"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { withBase } from "@/lib/paths";

export function PageFilm({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("src");
      video.load();
      return;
    }

    const file = withBase(src);
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.loop = true;
    video.preload = "auto";
    if (video.getAttribute("src") !== file) {
      video.src = file;
      video.load();
    }

    const show = () => {
      video.classList.add("is-ready");
      const played = video.play();
      if (played) played.catch(() => undefined);
    };

    if (video.readyState >= 2) show();
    video.addEventListener("loadeddata", show);
    video.addEventListener("canplay", show);
    return () => {
      video.removeEventListener("loadeddata", show);
      video.removeEventListener("canplay", show);
    };
  }, [src]);

  return (
    <>
      <Image src={withBase(poster)} alt="" fill priority sizes="100vw" />
      <video
        ref={videoRef}
        className="page-film"
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden="true"
      />
    </>
  );
}
