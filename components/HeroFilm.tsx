"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { chapters } from "@/lib/content";
import { withBase } from "@/lib/paths";
import { useLocale } from "@/components/Locale";

const VIDEO_SRC = withBase("/media/unver-hero.mp4");
const POSTER_SRC = withBase("/media/unver-hero-poster.jpg");

const captionEn = {
  label: "HECTARE AŞ",
  lines: ["Agricultural and construction machinery"] as const,
};

export function HeroFilm() {
  const { lang } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmRef = useRef<HTMLElement>(null);
  const caption = lang === "en" ? captionEn : chapters[0];

  useEffect(() => {
    const video = videoRef.current;
    const film = filmRef.current;
    if (!video || !film) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const show = () => {
      film.dataset.ready = "true";
      const played = video.play();
      if (played) played.catch(() => undefined);
    };

    const applyMode = () => {
      if (motion.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        film.dataset.ready = "false";
        film.dataset.reduced = "true";
        return;
      }
      film.dataset.reduced = "false";
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.loop = true;
      video.preload = "auto";
      if (video.getAttribute("src") !== VIDEO_SRC) {
        video.src = VIDEO_SRC;
        video.load();
      }
      if (video.readyState >= 2) show();
    };

    applyMode();
    video.addEventListener("loadeddata", show);
    video.addEventListener("canplay", show);
    motion.addEventListener("change", applyMode);

    return () => {
      video.removeEventListener("loadeddata", show);
      video.removeEventListener("canplay", show);
      motion.removeEventListener("change", applyMode);
    };
  }, []);

  return (
    <section className="film" ref={filmRef} aria-label="Tanıtım filmi">
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
          loop
          preload="auto"
          aria-hidden="true"
        />
        <div className="film-wash" aria-hidden="true" />
        <div className="captions" lang={lang}>
          <div className="caption caption--fixed">
            <p className="caption-label">{caption.label}</p>
            <p className="caption-title">
              {caption.lines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < caption.lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="film-static" lang={lang}>
        <div className="static-block">
          <p className="caption-label">{caption.label}</p>
          <p className="caption-title">
            {caption.lines.map((line, index) => (
              <span key={line}>
                {line}
                {index < caption.lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
