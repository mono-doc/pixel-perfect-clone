import { List } from "lucide-react";

interface TocItemProps {
  label: string;
  active?: boolean;
  indented?: boolean;
}

const TocItem = ({ label, active, indented }: TocItemProps) => (
  <a
    href="#"
    className={`block text-sm transition-colors ${
      indented ? "pl-4" : ""
    } ${
      active
        ? "text-primary font-medium"
        : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {label}
  </a>
);

const TableOfContents = () => {
  return (
    <aside className="w-56 flex-shrink-0 h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto scrollbar-thin py-6 pl-6">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">On this page</span>
      </div>
      <nav className="space-y-3">
        <TocItem label="How Mirage Studio Works in 3 Easy Steps" active />
        <TocItem label="Availability, Pricing & Usage" />
        <TocItem label="Available Plans" indented />
        <TocItem label="Frequently Asked Questions" />
      </nav>
    </aside>
  );
};

export default TableOfContents;
