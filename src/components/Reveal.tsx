"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Seconds to wait before the animation starts (use for staggering siblings). */
  delay?: number;
  x?: number;
  y?: number;
};

/**
 * Replaces the template's jQuery Waypoints + animate.css "ftco-animate" effect.
 * Fades and slides content in once when it scrolls into view.
 */
export default function Reveal({ children, className, style, delay = 0, x = 0, y = 40 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
