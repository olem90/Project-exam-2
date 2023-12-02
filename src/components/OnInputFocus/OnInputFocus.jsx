import React, { createContext, useState, useContext } from "react";

const InputFocusContext = createContext();

export const useInputFocus = () => useContext(InputFocusContext);

export const InputFocusProvider = ({ children }) => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <InputFocusContext.Provider value={{ isInputFocused, setInputFocused }}>
      {children}
    </InputFocusContext.Provider>
  );
};