// src/components/BackgroundSlideshow.tsx — new file
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION_MS = 6000;
const FADE_DURATION_MS = 1500;

export function BackgroundSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (prefersReducedMotion.current || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
          }}
        />
      ))}
      {/* Scrim — keeps hero text and cards readable regardless of which
          photo is showing, without fully hiding the photos themselves. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
    </div>
  );
}