"use client";
import { useState } from "react";

export function Temperature({ temp, initialUnits = "C" }) {
  const [units, setUnits] = useState(initialUnits);

  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

  function toggleUnits() {
    setUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  }

  return (
    <div className="flex items-center gap-4">
      <span className="Temperature">
        <strong>
          {" "}
          {parseInt(displayTemp)}&deg;{units}{" "}
        </strong>
      </span>
      <button
        onClick={toggleUnits}
        className="bg-pink-500 rounded-lg px-2 py-3"
      >
        Switch Units to {units === "C" ? "F" : "C"}
      </button>
    </div>
  );
}
