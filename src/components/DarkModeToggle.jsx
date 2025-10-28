// DarkModeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust path

function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default DarkModeToggle;
// import { useEffect, useState } from 'react';

// function DarkModeToggle() {
//   const [isDark, setIsDark] = useState(() =>
//     typeof window !== 'undefined' && localStorage.theme === 'dark'
//   );

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.theme = 'dark';
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.theme = 'light';
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded"
//     >
//       {isDark ? '🌙 Dark' : '☀️ Light'}
//     </button>
//   );
// }

// export default DarkModeToggle;
