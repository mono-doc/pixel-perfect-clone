import { useState } from "react";
import { Sparkles, Maximize2, Trash2, X, ThumbsUp, ThumbsDown, Copy, RefreshCw, ArrowUp } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AssistantPanelProps {
  initialQuestion: string;
  onClose: () => void;
}

const AssistantPanel = ({ initialQuestion, onClose }: AssistantPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "user", content: initialQuestion },
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = inputValue.trim().length > 0;

  const handleSubmit = () => {
    if (!hasValue) return;
    setMessages([...messages, { role: "user", content: inputValue }]);
    setInputValue("");
    // Simulate assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm here to help! What would you like to know?" },
      ]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <aside className="w-80 flex-shrink-0 h-[calc(100vh-7rem)] sticky top-28 overflow-hidden flex flex-col border-l border-border animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
            <Maximize2 className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
            <Trash2 className="w-4 h-4 text-muted-foreground" />
          </button>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                message.role === "user"
                  ? "bg-muted text-foreground"
                  : "text-foreground"
              }`}
            >
              {message.content}
              {message.role === "assistant" && (
                <div className="flex items-center gap-1 mt-2">
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <ThumbsDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <RefreshCw className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div
          className={`
            flex items-center gap-2 bg-background border rounded-xl pl-4 pr-3 py-2
            transition-all duration-300 ease-out
            ${isFocused 
              ? "border-primary shadow-sm" 
              : "border-border hover:border-muted-foreground/50"
            }
          `}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          
          <button
            onClick={handleSubmit}
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
    </aside>
  );
};

export default AssistantPanel;
