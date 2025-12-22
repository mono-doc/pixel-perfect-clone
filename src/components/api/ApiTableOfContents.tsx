import { List } from "lucide-react";

const ApiTableOfContents = () => {
  return (
    <aside className="w-56 flex-shrink-0 h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto py-8 pl-8">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
        <List className="w-4 h-4" />
        <span>On this page</span>
      </div>
      <nav className="space-y-2">
        <a
          href="#prerequisites"
          className="block text-sm text-primary border-l-2 border-primary pl-3 py-1"
        >
          Prerequisites
        </a>
      </nav>
    </aside>
  );
};

export default ApiTableOfContents;
