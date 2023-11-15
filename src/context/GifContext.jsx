import React, { createContext, useState } from "react";

const GifContext = createContext();

export const GifProvider = ({ children }) => {
  const [gifUrl, setGifUrl] = useState("");

  return (
    <GifContext.Provider value={{ gifUrl, setGifUrl }}>
      {children}
    </GifContext.Provider>
  );
};

export default GifContext;
