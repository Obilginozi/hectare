"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/components/Locale";
import { trade } from "@/lib/content";
import { countryName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

/** Approximate capital/center coordinates for trade countries. */
const coords: Record<string, { lng: number; lat: number }> = {
  Azerbaycan: { lng: 49.87, lat: 40.41 },
  Bulgaristan: { lng: 23.32, lat: 42.7 },
  Slovenya: { lng: 14.51, lat: 46.05 },
  Polonya: { lng: 21.01, lat: 52.23 },
  Rusya: { lng: 37.62, lat: 55.76 },
  Yunanistan: { lng: 23.73, lat: 37.98 },
  İtalya: { lng: 12.5, lat: 41.9 },
  Romanya: { lng: 26.1, lat: 44.43 },
  Filistin: { lng: 35.23, lat: 31.9 },
  Irak: { lng: 44.37, lat: 33.31 },
  Gürcistan: { lng: 44.83, lat: 41.72 },
  Almanya: { lng: 13.41, lat: 52.52 },
  Hindistan: { lng: 77.21, lat: 28.61 },
  Danimarka: { lng: 12.57, lat: 55.68 },
  "Sierra Leone": { lng: -13.23, lat: 8.48 },
  Moritanya: { lng: -15.98, lat: 18.07 },
  Çad: { lng: 15.04, lat: 12.13 },
  Belarus: { lng: 27.56, lat: 53.9 },
  Arnavutluk: { lng: 19.82, lat: 41.33 },
  Kosova: { lng: 21.17, lat: 42.66 },
  Fas: { lng: -6.85, lat: 34.02 },
  Mısır: { lng: 31.24, lat: 30.04 },
  Kazakistan: { lng: 71.47, lat: 51.17 },
  Japonya: { lng: 139.69, lat: 35.69 },
};

const hub = { lng: 28.9784, lat: 41.0082 };

/** Cropped frame: Europe–Africa–Asia only (no Americas / poles). */
const LNG_MIN = -22;
const LNG_MAX = 148;
const LAT_MIN = 2;
const LAT_MAX = 66;
const W = 1000;
const H = 376;
/** Trim empty northern ocean / top hairline from the map art. */
const CROP_TOP = 28;
const VIEW_H = H - CROP_TOP;

function project(lng: number, lat: number) {
  return {
    x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W,
    y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H,
  };
}

function toPercent(point: { x: number; y: number }) {
  return {
    left: `${(point.x / W) * 100}%`,
    top: `${((point.y - CROP_TOP) / VIEW_H) * 100}%`,
  };
}

function tipClass(left: string, top: string) {
  const x = Number.parseFloat(left);
  const y = Number.parseFloat(top);
  const xAlign = x < 16 ? "is-start" : x > 84 ? "is-end" : "is-mid";
  const yAlign = y < 28 ? "is-below" : "is-above";
  return `trade-map-tip ${xAlign} ${yAlign}`;
}

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - Math.min(55, dist * 0.22);
  return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)} Q ${mx.toFixed(2)} ${my.toFixed(2)} ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
}

type MapPoint = {
  key: string;
  name: string;
  active: boolean;
  index: number;
  x: number;
  y: number;
  left: string;
  top: string;
  path: string;
};

export function TradeWorldMap() {
  const { lang } = useLocale();
  const [hovered, setHovered] = useState<string | null>(null);
  const hubPoint = useMemo(() => project(hub.lng, hub.lat), []);

  const points = useMemo(() => {
    return trade
      .map((item, index) => {
        const c = coords[item.country];
        if (!c) return null;
        const point = project(c.lng, c.lat);
        return {
          key: item.country,
          name: countryName(lang, item.country),
          active: item.works.length > 0,
          index,
          ...point,
          ...toPercent(point),
          path: arcPath(hubPoint, point),
        } satisfies MapPoint;
      })
      .filter(Boolean) as MapPoint[];
  }, [lang, hubPoint]);

  const active = hovered ? points.find((p) => p.key === hovered) : null;
  const title = lang === "en" ? "Trade geography" : "Ticaret coğrafyası";
  const hubLabel = lang === "en" ? "Istanbul · Hectare" : "İstanbul · Hectare";

  return (
    <figure className="trade-map" aria-labelledby="trade-map-title">
      <figcaption id="trade-map-title" className="sr-only">
        {title}
      </figcaption>

      <div className="trade-map-stage">
        <svg className="trade-map-svg" viewBox={`0 ${CROP_TOP} ${W} ${VIEW_H}`} aria-hidden="true">
          <image
            href={withBase("/media/world-map.svg")}
            width={W}
            height={H}
            preserveAspectRatio="none"
          />
          <g className="trade-map-arcs">
            {points.map((point) => (
              <path
                key={`arc-${point.key}`}
                d={point.path}
                className={[
                  "trade-map-arc",
                  point.active ? "is-active" : "",
                  hovered && hovered !== point.key ? "is-dim" : "",
                  hovered === point.key ? "is-hot" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${0.08 + point.index * 0.05}s` }}
              />
            ))}
          </g>
          <g className="trade-map-hub">
            <circle cx={hubPoint.x} cy={hubPoint.y} r="14" className="trade-map-hub-ring" />
            <circle cx={hubPoint.x} cy={hubPoint.y} r="5" className="trade-map-hub-dot" />
          </g>
        </svg>

        <div
          className="trade-map-hub-badge"
          style={toPercent(hubPoint)}
        >
          {hubLabel}
        </div>

        <ul className="trade-map-pin-list">
          {points.map((point) => {
            const isHot = hovered === point.key;
            return (
              <li key={point.key} style={{ left: point.left, top: point.top }}>
                <button
                  type="button"
                  className={[
                    "trade-map-pin",
                    point.active ? "is-active" : "",
                    isHot ? "is-hover" : "",
                    hovered && !isHot ? "is-dim" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ animationDelay: `${0.2 + point.index * 0.05}s` }}
                  aria-label={point.name}
                  aria-expanded={isHot}
                  onPointerEnter={() => setHovered(point.key)}
                  onPointerLeave={() => setHovered(null)}
                  onFocus={() => setHovered(point.key)}
                  onBlur={() => setHovered(null)}
                >
                  <svg className="trade-map-pin-shape" viewBox="0 0 24 34" aria-hidden="true">
                    <path d="M12 0C6.5 0 2 4.5 2 10.1C2 17.2 12 34 12 34S22 17.2 22 10.1C22 4.5 17.5 0 12 0Z" />
                    <circle cx="12" cy="10" r="4" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        {active ? (
          <div
            className={tipClass(active.left, active.top)}
            style={{ left: active.left, top: active.top }}
            role="tooltip"
          >
            <strong>{active.name}</strong>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
