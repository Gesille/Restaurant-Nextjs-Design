"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxBackgroundProps = {
  image: string;
};

/**
 * Background image that drifts slower than the page while scrolling.
 * The parent must have `position: relative`, `overflow: hidden` and `isolation: isolate`.
 */
export default function ParallaxBackground({ image }: ParallaxBackgroundProps) {
  const frame = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "7%"]);

  return (
    <div
      ref={frame}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: -1 }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: "-12% 0",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          y: reduceMotion ? 0 : y,
          willChange: "transform",
        }}
      />
    </div>
  );
}
