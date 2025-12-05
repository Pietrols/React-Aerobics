import { useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      card: "bg-white",
      cardBorder: "border-gray-200",
      button: "bg-gray-200 hover:bg-gray-300",
      activeButton: "bg-blue-500 text-white",
      icon: Sun,
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      card: "bg-gray-800",
      cardBorder: "border-gray-700",
      button: "bg-gray-700 hover:bg-gray-600",
      activeButton: "bg-blue-600 text-white",
      icon: Moon,
    },
    accent: {
      bg: "bg-purple-50",
      text: "text-purple-900",
      card: "bg-white",
      cardBorder: "border-purple-200",
      button: "bg-purple-200 hover:bg-purple-300",
      activeButton: "bg-purple-600 text-white",
      icon: Palette,
    },
  };

  const currentTheme = themes[theme];
  const Icon = currentTheme.icon;

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-colors duration-300 flex items-center justify-center p-4`}
    >
      <div
        className={`${currentTheme.card} ${currentTheme.text} rounded-lg shadow-xl p-8 max-w-md w-full border ${currentTheme.cardBorder}`}
      >
        <div className="flex items-center justify-center mb-6">
          <Icon className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Theme Switcher</h1>

        <p className="text-center mb-8 opacity-75">
          Current theme:{" "}
          <span className="font-semibold capitalize">{theme}</span>
        </p>

        <div className="space-y-3">
          <button
            onClick={() => setTheme("light")}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              theme === "light"
                ? currentTheme.activeButton
                : currentTheme.button
            }`}
          >
            <Sun className="w-5 h-5" />
            Light Theme
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              theme === "dark" ? currentTheme.activeButton : currentTheme.button
            }`}
          >
            <Moon className="w-5 h-5" />
            Dark Theme
          </button>

          <button
            onClick={() => setTheme("accent")}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              theme === "accent"
                ? currentTheme.activeButton
                : currentTheme.button
            }`}
          >
            <Palette className="w-5 h-5" />
            Accent Theme
          </button>
        </div>

        <div className={`mt-8 p-4 rounded-lg ${currentTheme.button}`}>
          <p className="text-sm">
            This is sample content that adapts to your chosen theme. Notice how
            all colors change seamlessly!
          </p>
        </div>
      </div>
    </div>
  );
}
