"use client";
import React from "react";

export default function AboutHero() {
  return (
    <section className="bg-black text-white px-6 py-20 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-12">
      <div className="max-w-2xl">
        <p className="text-sm text-gray-400 uppercase mb-4">Blog</p>
        <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
          What’s new at Onay School
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="w-64 h-64 flex items-center justify-center">
        <svg
          className="w-48 h-48 animate-spin-slower"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="blue"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 10 L54 18 L46 18 Z"
            fill="blue"
            transform="rotate(0 50 50)"
          />
          <path
            d="M90 50 L82 54 L82 46 Z"
            fill="blue"
            transform="rotate(90 50 50)"
          />
          <path
            d="M50 90 L46 82 L54 82 Z"
            fill="blue"
            transform="rotate(180 50 50)"
          />
          <path
            d="M10 50 L18 46 L18 54 Z"
            fill="blue"
            transform="rotate(270 50 50)"
          />
        </svg>
      </div>

      <div className="w-full mt-20 border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 lg:mb-0">
          Sign up now so you never miss an update
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded">
          SUBSCRIBE
        </button>
      </div>

      <style jsx>{`
        .animate-spin-slower {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
