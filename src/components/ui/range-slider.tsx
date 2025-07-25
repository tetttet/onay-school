"use client";
import React from "react";
import { getTrackBackground, Range } from "react-range";

interface RangeSliderProps {
  priceRange: number[];
  setPriceRange: (values: number[]) => void;
  MIN: number;
  MAX: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  priceRange,
  setPriceRange,
  MIN,
  MAX,
}) => {
  return (
    <div className="w-72">
      <Range
        values={priceRange}
        step={10}
        min={MIN}
        max={MAX}
        onChange={(values) => setPriceRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "8px",
              width: "100%",
              background: getTrackBackground({
                values: priceRange,
                colors: ["#e5e7eb", "#2563eb", "#e5e7eb"],
                min: MIN,
                max: MAX,
              }),
              borderRadius: "9999px",
              transition: "background 0.3s ease",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => {
          const { style, ...restProps } = props;

          return (
            <div
              {...restProps}
              style={{
                ...style,
                height: "28px",
                width: "28px",
                backgroundColor: "#2563eb",
                border: "3px solid white",
                borderRadius: "9999px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "transform 0.2s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-36px",
                  color: "#111827",
                  fontWeight: "600",
                  fontSize: "13px",
                  padding: "6px 8px",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                {priceRange[index]}₸
              </div>
            </div>
          );
        }}
      />
      <div className="flex justify-between text-sm mt-2 text-gray-500 font-medium">
        <span>{MIN}₸</span>
        <span>{MAX}₸</span>
      </div>
    </div>
  );
};

export default RangeSlider;
