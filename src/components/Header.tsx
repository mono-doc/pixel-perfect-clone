import { useState, useEffect } from "react";
import { Search, ChevronDown, Sun, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HeaderProps {
  activeTab?: "introduction" | "studio" | "api";
}

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "uk", label: "Українська" },
  { code: "pl", label: "Polski" },
  { code: "uz", label: "O'zbekcha" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिंदी" },
];

const Header = ({ activeTab }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between h-14 px-6">
          {/* Left: Logo and Language */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="hsl(var(--primary))" />
                  <path d="M2 17L12 22L22 17" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-semibold text-foreground text-lg">Mirage</span>
              </div>
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground border border-border rounded-md px-2.5 py-1.5 hover:bg-muted transition-colors">
                  <span>{languages.find(l => l.code === selectedLanguage)?.label}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="p-0 bg-background">
                <ScrollArea className="h-[300px]">
                  <div className="p-1">
                    {languages.map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => setSelectedLanguage(language.code)}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <span className={selectedLanguage === language.code ? "text-primary font-medium" : ""}>
                          {language.label}
                        </span>
                        {selectedLanguage === language.code && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-md mx-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full h-9 pl-10 pr-16 bg-background border border-border rounded-lg text-sm text-left text-muted-foreground hover:border-primary/50 focus:outline-none transition-colors relative"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <span>Search...</span>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-2xs font-medium bg-kbd-bg border border-kbd-border rounded text-muted-foreground">
                  Ctrl
                </kbd>
                <kbd className="px-1.5 py-0.5 text-2xs font-medium bg-kbd-bg border border-kbd-border rounded text-muted-foreground">
                  K
                </kbd>
              </div>
            </button>
          </div>

          {/* Right: Sign Up and Theme */}
          <div className="flex items-center gap-3">
            <button className="h-9 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5">
              Sign Up / Sign In
              <span className="ml-0.5">›</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Sun className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-6 px-6">
          <Link
            to="/introduction"
            className={`py-3 text-sm transition-colors ${
              activeTab === "introduction"
                ? "text-primary font-medium border-b border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Introduction
          </Link>
          <a href="#" className="py-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Captions
          </a>
          <Link
            to="/"
            className={`py-3 text-sm transition-colors ${
              activeTab === "studio"
                ? "text-primary font-medium border-b border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Mirage Studio
          </Link>
          <Link
            to="/api"
            className={`py-3 text-sm transition-colors ${
              activeTab === "api"
                ? "text-primary font-medium border-b border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            API
          </Link>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
