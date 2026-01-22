import { Inbox } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  active?: boolean;
  href?: string;
}

const NavItem = ({ label, active, href }: NavItemProps) => {
  const className = `flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
    active
      ? "bg-nav-active text-primary font-medium"
      : "text-foreground hover:bg-nav-hover"
  }`;

  if (href) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href="#" className={className}>
      {label}
    </a>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xs font-semibold text-section-label uppercase tracking-wider mb-2 px-3">
    {children}
  </h3>
);

interface DashboardSidebarProps {
  activePath?: string;
}

const DashboardSidebar = ({ activePath }: DashboardSidebarProps) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-border h-[calc(100vh-7rem)] sticky top-24 overflow-y-auto scrollbar-thin py-6 pr-4">
      <div className="mb-6">
        <SectionLabel>Dashboard</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Overview" active={activePath === "/dashboard"} href="/dashboard" />
          <NavItem label="Activity" />
          <NavItem label="Billing" />
        </nav>
      </div>

      <div className="mb-6">
        <SectionLabel>Emails</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="All emails" />
          <NavItem label="Single send" />
          <NavItem
            label="Batch sending"
            active={activePath === "/dashboard/emails/batch-sending"}
            href="/dashboard/emails/batch-sending"
          />
          <NavItem label="Suppressions" />
        </nav>
      </div>

      <div className="mb-6">
        <SectionLabel>Audience</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Contacts" />
          <NavItem label="Segments" />
          <NavItem label="Webhooks" />
        </nav>
      </div>

      <div className="mb-6">
        <SectionLabel>Templates</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="React Email" />
          <NavItem label="Branding" />
        </nav>
      </div>

      <div className="mb-6">
        <SectionLabel>Analytics</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Performance" />
          <NavItem label="Engagement" />
        </nav>
      </div>

      <div className="mb-6 px-3 py-2 rounded-lg bg-muted/30 text-xs text-muted-foreground flex items-center gap-2">
        <Inbox className="w-4 h-4" />
        <span>Batch sending is available on Scale plans and above.</span>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
