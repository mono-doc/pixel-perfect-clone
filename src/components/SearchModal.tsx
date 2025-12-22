import { useState, useEffect, useRef } from "react";
import { Search, Hash, Sparkles, ChevronRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockResults = [
  {
    breadcrumb: "Manage Subscription & Billing › How can I request a VAT invoice?",
    title: "How can I request a VAT invoice?",
    description: "Depending on how you purchased a subscription, you may be able to receive an invoice with y...",
  },
  {
    breadcrumb: "Captions › LINK TO VIDEO › Reddit to Video - Turn Reddit Comment... › Frequently Asked Q...",
    title: "Frequently Asked Questions",
    description: "This feature is coming soon",
  },
  {
    breadcrumb: "How to Use Mirage™ Studio › How long can each segment be?",
    title: "How long can each segment be?",
    description: "Each segment can be up to 4 seconds.",
  },
  {
    breadcrumb: "Captions › LINK TO VIDEO › AI Shorts for Converting Long Vid... › Frequently Asked Questi...",
    title: "Frequently Asked Questions",
    description: "Captions can only be generated in the original language Original videos must be between 4 mi...",
  },
  {
    breadcrumb: "Captions - iPhone App Updates and New Features › AI Skits",
    title: "AI Skits",
    description: "Generate a video of two avatars having a conversation.",
  },
  {
    breadcrumb: "Export › Advanced options of Export",
    title: "Advanced options of Export",
    description: "You can adjust advanced options of your current export in the Advanced options section: Cho...",
  },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setShowResults(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setShowResults(query.length >= 3);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl mx-4 bg-background rounded-xl shadow-2xl border border-border animate-search-bounce"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <kbd className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {showResults && (
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {mockResults.map((result, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors group"
              >
                <div className="text-xs text-muted-foreground mb-1 truncate">
                  {result.breadcrumb}
                </div>
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground truncate">
                      {result.title}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {result.description}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </button>
            ))}

            {/* AI Assistant suggestion */}
            <div className="px-4 py-3 border-t border-border mt-2">
              <div className="text-sm text-muted-foreground mb-2">Ask AI assistant</div>
              <button className="flex items-center gap-2 text-primary hover:underline">
                <Sparkles className="w-4 h-4" />
                <span>Can you tell me about {query}?</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
