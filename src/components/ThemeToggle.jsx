import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/themeContext";

// eslint-disable-next-line react/prop-types
function ThemeToggle({ showLabel = false, className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`focus-ring group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-[#10243e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#087f73]/40 hover:text-[#087f73] dark:border-white/10 dark:bg-[#10283a] dark:text-slate-100 dark:hover:border-teal-400/40 dark:hover:text-teal-300 ${
        showLabel ? "h-12 w-full px-4" : "h-11 w-11"
      } ${className}`}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="relative grid h-5 w-5 place-items-center" aria-hidden="true">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 35, scale: 0.7 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 grid place-items-center"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </span>
      {showLabel && (
        <span className="flex flex-1 items-center justify-between text-sm font-semibold">
          <span>Appearance</span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {isDark ? "Dark" : "Light"}
          </span>
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
