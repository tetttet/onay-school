"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroHome = () => {
  const { scrollY } = useScroll();

  // Масштаб и прозрачность в зависимости от скролла
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 2000], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Анимированное видео */}
      <motion.video
        style={{ scale, opacity }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Stroke-эффект через styled-jsx */}
      <style jsx>{`
        .custom-stroke {
          color: transparent;
          -webkit-text-stroke: 2px transparent;
          position: relative;
        }

        .custom-stroke::before {
          content: "ONAY";
          position: absolute;
          top: 0;
          left: 0;
          -webkit-text-stroke: 2px #3b82f6;
          color: transparent;
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default HeroHome;
