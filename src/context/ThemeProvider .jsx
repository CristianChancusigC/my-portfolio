import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();
const checkIsDarkSchemePreferred = () =>
  window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false;
  
export const ThemeProvider = ({ children }) => {
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isDarkSchemePreferred = checkIsDarkSchemePreferred();
    setIsDarkMode(isDarkSchemePreferred);
  },[]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
