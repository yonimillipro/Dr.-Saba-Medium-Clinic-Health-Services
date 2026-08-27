import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("clinic-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#071625" : "#ffffff");
    window.localStorage.setItem("clinic-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
