// src/context/ThemeContext.js
import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage and system preference on initial load
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    // Apply theme to HTML element and update localStorage whenever isDark changes
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add prop-types validation for ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);

// Removed: export default ThemeContext;
// This resolves the Fast Refresh warning by only exporting components and hooks.
// // src/context/ThemeContext.js
// import { createContext, useState, useEffect, useContext } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(() => {
//     // Check localStorage and system preference on initial load
//     if (typeof window !== "undefined") {
//       if (
//         localStorage.theme === "dark" ||
//         (!("theme" in localStorage) &&
//           window.matchMedia("(prefers-color-scheme: dark)").matches)
//       ) {
//         return true;
//       }
//     }
//     return false;
//   });

//   useEffect(() => {
//     // Apply theme to HTML element and update localStorage whenever isDark changes
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark((prevIsDark) => !prevIsDark);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

// export default ThemeContext;
