"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

type OwlCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode;
  className?: string;
  /** "fade" stacks slides and cross-fades them, "slide" moves them sideways. */
  mode?: "fade" | "slide";
  /** Autoplay delay in milliseconds. Leave undefined to disable. */
  autoplay?: number;
  nav?: boolean;
  dots?: boolean;
  /** Gap between slides in px (slide mode only). */
  margin?: number;
  fadeDuration?: number;
};

const SWIPE_DISTANCE = 50;

/**
 * Small React replacement for Owl Carousel (single item, loop, autoplay, nav, dots, swipe).
 * It renders Owl's class names so the template's existing CSS keeps working unchanged.
 */
export default function OwlCarousel<T>({
  items,
  renderItem,
  className = "",
  mode = "slide",
  autoplay,
  nav = false,
  dots = true,
  margin = 0,
  fadeDuration = 1000,
}: OwlCarouselProps<T>) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const dragStart = useRef<number | null>(null);

  const goTo = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (!autoplay || reduceMotion || count < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), autoplay);
    return () => window.clearTimeout(timer);
  }, [index, autoplay, reduceMotion, count]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    if (distance <= -SWIPE_DISTANCE) goTo(index + 1);
    if (distance >= SWIPE_DISTANCE) goTo(index - 1);
  };

  const stageStyle =
    mode === "fade"
      ? { display: "grid" }
      : {
          display: "flex",
          transform: `translateX(calc(${-index * 100}% - ${index * margin}px))`,
          transition: reduceMotion ? "none" : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        };

  return (
    <div
      className={`owl-carousel owl-theme owl-loaded owl-drag ${className}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (dragStart.current = null)}
    >
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{ touchAction: "pan-y", ...stageStyle }}>
          {items.map((item, i) => {
            const isActive = i === index;
            const itemStyle =
              mode === "fade"
                ? {
                    gridArea: "1 / 1",
                    float: "none" as const,
                    opacity: isActive ? 1 : 0,
                    visibility: isActive ? ("visible" as const) : ("hidden" as const),
                    zIndex: isActive ? 1 : 0,
                    transition: reduceMotion
                      ? "none"
                      : `opacity ${fadeDuration}ms ease, visibility 0s linear ${isActive ? 0 : fadeDuration}ms`,
                  }
                : { flex: "0 0 100%", float: "none" as const, marginRight: margin };
            return (
              <div
                key={i}
                className={`owl-item${isActive ? " active" : ""}`}
                style={itemStyle}
                aria-hidden={!isActive}
              >
                {renderItem(item, i, isActive)}
              </div>
            );
          })}
        </div>
      </div>

      {nav && (
        <div className="owl-nav">
          <button type="button" className="owl-prev" aria-label="Previous slide" onClick={() => goTo(index - 1)}>
            <span className="fa fa-angle-left" />
          </button>
          <button type="button" className="owl-next" aria-label="Next slide" onClick={() => goTo(index + 1)}>
            <span className="fa fa-angle-right" />
          </button>
        </div>
      )}

      {dots && (
        <div className="owl-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`owl-dot${i === index ? " active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            >
              <span />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
