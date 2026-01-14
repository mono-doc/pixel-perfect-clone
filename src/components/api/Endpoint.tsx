import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EndpointProps {
  method: string;
  url: string;
}

const Endpoint = ({ method, url }: EndpointProps) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/50 p-2">
      <div className="flex min-w-0 items-center gap-3 overflow-x-scroll">
        <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          {method}
        </span>
        <code className="text-sm text-foreground">{url}</code>
      </div>
      <div className="flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center rounded p-1.5 text-muted-foreground opacity-0 transition-opacity hover:bg-muted/80 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none"
              >
                <Copy className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Copied" : "Copy"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Endpoint;
