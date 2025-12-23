import { ChevronRight } from "lucide-react";

interface NavItemProps {
  label: string;
  active?: boolean;
  hasChevron?: boolean;
}

const NavItem = ({ label, active, hasChevron }: NavItemProps) => (
  <a
    href="#"
    className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
      active
        ? "bg-nav-active text-primary font-medium"
        : "text-foreground hover:bg-nav-hover"
    }`}
  >
    <span>{label}</span>
    {hasChevron && (
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    )}
  </a>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xs font-semibold text-section-label uppercase tracking-wider mb-2 px-3">
    {children}
  </h3>
);

const ApiSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-border h-[calc(100vh-7rem)] sticky overflow-y-auto scrollbar-thin py-6 pr-4">
      {/* USING THE API */}
      <div className="mb-6">
        <SectionLabel>Using the API</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Overview" active />
          <NavItem label="API pricing" />
          <NavItem label="Rate limiting" />
        </nav>
      </div>

      {/* VIDEO CAPTIONING */}
      <div className="mb-6">
        <SectionLabel>Video Captioning</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Getting started" />
          <NavItem label="Caption templates" />
        </nav>
      </div>

      {/* VIDEO GENERATION */}
      <div className="mb-6">
        <SectionLabel>Video Generation</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Getting started" />
        </nav>
      </div>

      {/* REFERENCE */}
      <div className="mb-6">
        <SectionLabel>Reference</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Videos" hasChevron />
          <NavItem label="Video Captions" hasChevron />
        </nav>
      </div>
    </aside>
  );
};

export default ApiSidebar;
