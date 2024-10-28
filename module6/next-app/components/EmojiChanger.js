"use client";
import { useState } from "react";

// save in MoodChanger.jsx
function EmojiChanger() {
  const [emoji, setEmoji] = useState("happy");

  // Calls setMood with a conditional state value
  const handleCrying = () => {
    let newEmoji = "teardrop";
    if (emoji === "teardrop") newEmoji = "crying";
    else if (emoji === "crying") newEmoji = "sadcat";
    setMood(newEmoji);
  };

  return (
    <div className="EmojiChanger componentBox">
      Current Mood: {emoji}
      <div className="space-x-4">
        <button onClick={handleCrying}>Change Mood</button>
      </div>
    </div>
  );
}

export default EmojiChanger;
