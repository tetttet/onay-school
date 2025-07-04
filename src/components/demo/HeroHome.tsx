"use client";
import React from "react";

const HeroHome = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text content */}
      <div className="flex items-center justify-center h-full relative z-20 px-4 md:px-8">
        <h1 className="font-bold leading-none text-center">
          <span className="custom-stroke text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[12vw] xl:text-[30vw]">
            ONAY
          </span>
        </h1>
      </div>

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
