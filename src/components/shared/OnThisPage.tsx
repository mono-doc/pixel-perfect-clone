import { List } from "lucide-react";

interface TocItem {
  label: string;
  href: string;
  active?: boolean;
  indented?: boolean;
}

interface OnThisPageProps {
  items: TocItem[];
}

const OnThisPage = ({ items }: OnThisPageProps) => {
  return (
    <aside className="w-56 flex-shrink-0 h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto scrollbar-thin py-6 pl-6">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">On this page</span>
      </div>
      <nav className="space-y-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`block text-sm transition-colors ${
              item.indented ? "pl-4" : ""
            } ${
              item.active
                ? "text-primary font-medium border-l-2 border-primary pl-3"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default OnThisPage;
