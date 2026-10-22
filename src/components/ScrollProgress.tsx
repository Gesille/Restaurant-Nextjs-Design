"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin red bar at the top of the viewport that fills as the page is scrolled. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "#e52b34",
        transformOrigin: "0% 50%",
        zIndex: 1001,
      }}
    />
  );
}
