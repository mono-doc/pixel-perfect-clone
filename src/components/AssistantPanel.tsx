import { useState } from "react";
import { Sparkles, Maximize2, Minimize2, Trash2, X, ThumbsUp, ThumbsDown, Copy, RefreshCw, ArrowUp } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const hasValue = inputValue.trim().length > 0;
  const hasMessages = messages.length > 0;

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleSubmit = () => {
    if (!hasValue) return;
    setMessages([...messages, { role: "user", content: inputValue }]);
    setInputValue("");
    setIsThinking(true);
    // Simulate assistant response
    setTimeout(() => {
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm here to help! What would you like to know?" },
      ]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <aside className={`${isExpanded ? 'w-[40rem]' : 'w-80'} h-[calc(100vh-6rem)] fixed top-24 right-0 overflow-hidden flex flex-col border-l border-border bg-background animate-fade-in transition-all duration-300`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Maximize2 className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          {hasMessages && (
            <button 
              onClick={handleClearChat}
              className="p-1.5 hover:bg-muted rounded-md transition-colors"
            >
              <Trash2 className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
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
        {hasMessages ? (
          messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-lg py-2 px-2 text-sm ${
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
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground text-center px-4">
              Responses are generated using AI and may contain mistakes.
            </p>
          </div>
        )}
        {isThinking && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 py-2">
              <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
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
