"use client";

import React, { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("happy");

  const changeEmoji = () => {
    let newEmoji = "teardrop";
    if (emoji === "teardrop") newEmoji = "crying";
    else if (emoji === "crying") newEmoji = "sadcat";
    setEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
