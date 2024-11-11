"use client";

import { useState } from "react";

export function AddCatForm({ onAddCat }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const catData = Object.fromEntries(formData);
    catData.id = Date.now(); // Assign a unique ID

    onAddCat(catData);
  };

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input className="text-black" name="name" defaultValue="" />
        </label>
        <label>
          Latin Name:
          <input className="text-black" name="latinName" defaultValue="" />
        </label>
        <label>
          Image URL:
          <input className="text-black" name="img" type="url" defaultValue="" />
        </label>
        <label>
          Image Alt:
          <input className="text-black" name="img" type="alt" defaultValue="" />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}
