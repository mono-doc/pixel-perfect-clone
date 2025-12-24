import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TocItem {
  label: string;
  href: string;
  indented?: boolean;
  parentHref?: string;
}

interface OnThisPageProps {
  items: TocItem[];
}

const OnThisPage = ({ items }: OnThisPageProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    items.forEach((item) => {
      const id = item.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(href);
    }
  };

  // Check if this item is a parent of the currently active item
  const isParentOfActive = (item: TocItem) => {
    const activeItem = items.find((i) => i.href === activeId);
    return activeItem?.parentHref === item.href;
  };

  return (
    <aside className="w-56 flex-shrink-0 h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto scrollbar-thin py-6 pl-6">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">On this page</span>
      </div>
      <nav className="space-y-3">
        {items.map((item, index) => {
          const isActive = activeId === item.href || (activeId === "" && index === 0);
          const isParentActive = isParentOfActive(item);
          
          return (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block text-sm transition-colors ${
                item.indented ? "pl-4" : ""
              } ${
                isActive || isParentActive
                  ? "text-primary font-medium border-l-2 border-primary pl-3"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default OnThisPage;
