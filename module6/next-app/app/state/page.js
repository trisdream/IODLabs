"use client";

import { usestate } from "react";

export default function state() {
  const [name, setName] = usestate("Tristan");

  function handleNameChange() {
    setName("TJ");
    console.log(name);
  }

  return (
    <>
      <div className="h-screen"></div>
      <h1>State</h1>
      <button
        className="bg-blue-500 rounded-lg text-white px-2 py-3"
        // onClick={() => setName("TJ")}
        onClick={handleNameChange}
      >
        Change Name
      </button>
      {name}
    </>
  );
}
