"use client";

import { useEffect, useRef, useState } from "react";

interface VideoMaskProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

export default function VideoMask({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  children,
}: VideoMaskProps) {
  const [dataUrlMask, setDataUrlMask] = useState<string>("");
  const contentRef = useRef<string>("");

  function updateSvgMask() {
    const responsiveFontSize =
      typeof fontSize === "number" ? `${fontSize}vw` : fontSize;

    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='170%' height='170%'>
        <text 
          x='50%' 
          y='50%' 
          font-size='${responsiveFontSize}' 
          font-weight='${fontWeight}' 
          text-anchor='${textAnchor}' 
          dominant-baseline='${dominantBaseline}' 
          font-family='${fontFamily}'
        >
          ${contentRef.current}
        </text>
      </svg>
    `;

    const encoded = encodeURIComponent(svg.trim());
    setDataUrlMask(`url("data:image/svg+xml,${encoded}")`);
  }

  useEffect(() => {
    if (children) {
      // Extract text content
      if (typeof children === "string") {
        contentRef.current = children;
      } else if (Array.isArray(children)) {
        contentRef.current = children
          .map((c) => (typeof c === "string" ? c : ""))
          .join("");
      } else {
        contentRef.current = "";
      }
    } else {
      contentRef.current = "";
    }

    updateSvgMask();
  }, [
    children,
    fontSize,
    fontWeight,
    textAnchor,
    dominantBaseline,
    fontFamily,
  ]);

  useEffect(() => {
    window.addEventListener("resize", updateSvgMask);
    return () => {
      window.removeEventListener("resize", updateSvgMask);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Screen Reader Only */}
      <span className="sr-only">{contentRef.current}</span>
    </div>
  );
}
