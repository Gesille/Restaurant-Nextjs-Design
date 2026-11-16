"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import OwlCarousel from "./OwlCarousel";

type Slide = {
  image: string;
  title: string;
  subheading2: string;
  subheading2Class?: string;
};

const slides: Slide[] = [
  { image: "/images/bg_1.png", title: "Big Flavour", subheading2: "Since 2025" },
  { image: "/images/bg_2.jpg", title: "Come Hungry", subheading2: "Leave Happy", subheading2Class: "sub" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  out: {},
  in: { transition: { staggerChildren: 0.18, delayChildren: 0.55 } },
};
const child: Variants = {
  out: { opacity: 0, y: 32 },
  in: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function HeroSlider() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-wrap">
      <OwlCarousel
        className="home-slider js-fullheight"
        mode="fade"
        items={slides}
        autoplay={6000}
        nav
        dots
        renderItem={(slide, _index, isActive) => (
          <div
            className="slider-item js-fullheight"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Slow zoom on the active slide (Ken Burns) */}
            <motion.div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              animate={{ scale: isActive || reduceMotion ? 1 : 1.12 }}
              initial={{ scale: reduceMotion ? 1 : 1.12 }}
              transition={
                isActive && !reduceMotion
                  ? { duration: 8, ease: "linear" }
                  : { duration: 0, delay: 1.1 }
              }
            />
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                <div className="col-md-12">
                  <motion.div
                    className="text w-100 mt-5 text-center"
                    variants={container}
                    initial={reduceMotion ? false : "out"}
                    animate={isActive || reduceMotion ? "in" : "out"}
                  >
                    <motion.span className="subheading" variants={child}>
                      Ashtar Mishoo
                    </motion.span>
                    <motion.h1 variants={child}>{slide.title}</motion.h1>
                    <motion.span
                      className={`subheading-2${slide.subheading2Class ? ` ${slide.subheading2Class}` : ""}`}
                      variants={child}
                    >
                      {slide.subheading2}
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
}
