"use client";
import { useState } from "react";

export function SortButton(click, text, styles) {
  return (
    <>
      <button onClick={click} className={`${styles} px-2 py-3 rounded-lg1`}>
        {text}
      </button>
    </>
  );
}
