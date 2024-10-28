"use client";
import { useState } from "react";

export function SortButton(onClick, text, styles) {
  return (
    <>
      <button onClick={onClick} className={`${styles} px-2 py-3 rounded-lg1`}>
        {text}
      </button>
    </>
  );
}
