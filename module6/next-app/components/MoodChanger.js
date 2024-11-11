"use client";
import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
  const [mood, setMood] = useState("happy");

  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood);
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox h-screen">
      Current Mood: {mood}
      <div className="space-x-4 ">
        <button
          className="bg-purple-900 rounded-xl"
          onClick={() => setMood("tired")}
        >
          Stay Up Late
        </button>
        <button
          className="bg-purple-900 rounded-xl"
          onClick={() => setMood("hungry")}
        >
          Skip Lunch
        </button>
        <button
          className="bg-purple-900 rounded-xl"
          onClick={() => setMood("happy")}
        >
          got a snack
        </button>
        <button
          className="bg-purple-900 rounded-xl"
          onClick={handleRunningLate}
        >
          Running Late
        </button>
        <button className="bg-purple-900 rounded-xl" onClick={handleWinLotto}>
          Win Lotto
        </button>
      </div>
    </div>
  );
}

export default MoodChanger;
