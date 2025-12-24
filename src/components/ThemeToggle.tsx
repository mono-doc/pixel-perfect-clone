import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-muted transition-colors"
    >
      {mounted && theme === "dark" ? (
        <Moon className="w-4 h-4 text-muted-foreground" />
      ) : (
        <Sun className="w-4 h-4 text-muted-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
