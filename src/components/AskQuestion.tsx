import { useState, useEffect } from "react";
import { ArrowUp, Command } from "lucide-react";

const AskQuestion = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const hasValue = value.trim().length > 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if user is near the bottom (within 100px)
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShow = isVisible && !isAtBottom;

  return (
    <div 
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4
        transition-all duration-500 ease-out
        ${shouldShow 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          flex items-center gap-2 bg-background border rounded-full px-4 py-2
          transition-all duration-300 ease-out shadow-lg
          ${isFocused 
            ? "border-primary scale-105 shadow-xl" 
            : "border-border hover:scale-[1.02] hover:shadow-xl"
          }
        `}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        
        {!isFocused && !hasValue && (
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="flex items-center gap-0.5 text-xs bg-muted px-1.5 py-0.5 rounded">
              <Command className="w-3 h-3" />I
            </span>
          </div>
        )}
        
        <button
          disabled={!hasValue}
          className={`
            p-1.5 rounded-full transition-all duration-200
            ${hasValue 
              ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
            }
          `}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
