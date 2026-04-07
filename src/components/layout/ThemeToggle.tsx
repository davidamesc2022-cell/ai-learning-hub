import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
      className={`relative flex items-center w-12 h-6 rounded-full border transition-all duration-300 flex-shrink-0
        ${isDark
          ? "bg-slate-700 border-slate-600 hover:bg-slate-600"
          : "bg-slate-200 border-slate-300 hover:bg-slate-300"
        }`}
    >
      {/* Knob deslizante */}
      <span
        className={`absolute flex items-center justify-center w-5 h-5 rounded-full shadow-md transition-all duration-300
          ${isDark
            ? "left-0.5 bg-slate-900"
            : "left-6 bg-white"
          }`}
      >
        {isDark
          ? <Moon className="w-3 h-3 text-cyan-400" />
          : <Sun className="w-3 h-3 text-yellow-500" />
        }
      </span>
    </button>
  );
}
