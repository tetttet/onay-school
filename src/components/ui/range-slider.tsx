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
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values: priceRange,
                colors: ["#ddd", "#3b82f6", "#ddd"],
                min: MIN,
                max: MAX,
              }),
              borderRadius: "4px",
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
                height: "24px",
                width: "24px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #aaa",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "4px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                {priceRange[index]}₸
              </div>
            </div>
          );
        }}
      />
      <div className="flex justify-between text-sm mt-1 text-gray-600">
        <span>{MIN}₸</span>
        <span>{MAX}₸</span>
      </div>
    </div>
  );
};

export default RangeSlider;
