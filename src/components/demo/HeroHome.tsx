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
      <div className="absolute inset-0 bg-black/50 bg-opacity-20 z-10" />

      {/* Text content */}
      <div className="h-screen flex relative mt-96 sm:mt-40 z-20 px-6 md:px-16 bg-transparent">
        <div className="max-w-xl">
          <h1 className="font-bold leading-tight">
            <span
              className="text-[135px] sm:text-[570px] custom-stroke"
              style={{
                color: "transparent",
              }}
            >
              ONAY
            </span>
          </h1>
        </div>

        <style jsx>{`
          .custom-stroke {
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
      </div>
    </section>
  );
};

export default HeroHome;
