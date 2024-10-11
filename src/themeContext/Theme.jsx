import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
