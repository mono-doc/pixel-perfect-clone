import { User, CreditCard, Coins, Users, Shield, HelpCircle, Video, FileText, Settings, Play, Captions, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasChevron?: boolean;
  href?: string;
}

const NavItem = ({ icon, label, active, hasChevron, href }: NavItemProps) => {
  const className = `flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
    active
      ? "bg-nav-active text-primary font-medium"
      : "text-foreground hover:bg-nav-hover"
  }`;

  const content = (
    <>
      <div className="flex items-center gap-2.5">
        <span className={active ? "text-primary" : "text-muted-foreground"}>{icon}</span>
        <span>{label}</span>
      </div>
      {hasChevron && (
        <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#" className={className}>
      {content}
    </a>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xs font-semibold text-section-label uppercase tracking-wider mb-2 px-3">
    {children}
  </h3>
);

interface SidebarProps {
  activeItem?: string;
}

const Sidebar = ({ activeItem = "Quick Start" }: SidebarProps) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-border h-[calc(100vh-7rem)] sticky overflow-y-auto scrollbar-thin py-6 pr-4">
      {/* GET STARTED */}
      <div className="mb-6">
        <SectionLabel>Get Started</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem icon={<BookOpen className="w-4 h-4" />} label="Introduction" active={activeItem === "Introduction"} />
        </nav>
      </div>

      {/* DASHBOARD */}
      <div className="mb-6">
        <SectionLabel>Dashboard</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem
            icon={<Mail className="w-4 h-4" />}
            label="Emails → Introduction"
            active={activeItem === "Emails → Introduction"}
            href="/dashboard/emails/introduction"
          />
        </nav>
      </div>

      {/* ACCOUNT MANAGEMENT */}
      <div className="mb-6">
        <SectionLabel>Account Management</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem icon={<User className="w-4 h-4" />} label="Sign Up and Sign In" />
          <NavItem icon={<CreditCard className="w-4 h-4" />} label="Subscription & Billing" />
          <NavItem icon={<Coins className="w-4 h-4" />} label="Understanding Credits" />
          <NavItem icon={<Users className="w-4 h-4" />} label="Adding Team Members" />
          <NavItem icon={<Shield className="w-4 h-4" />} label="Content Moderation" />
          <NavItem icon={<HelpCircle className="w-4 h-4" />} label="Support" />
        </nav>
      </div>

      {/* GENERATING VIDEO */}
      <div className="mb-6">
        <SectionLabel>Generating Video</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem icon={<Video className="w-4 h-4" />} label="How to Use Mirage Studio" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="Step 1 - Script & Audio" hasChevron />
          <NavItem icon={<Settings className="w-4 h-4" />} label="Step 2 - Generate Actors" hasChevron />
          <NavItem icon={<Play className="w-4 h-4" />} label="Step 3 - Generate, Edit, & Share" hasChevron />
        </nav>
      </div>

      {/* EDITING VIDEO */}
      <div className="mb-6">
        <SectionLabel>Editing Video</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem icon={<Captions className="w-4 h-4" />} label="Generate Captions" />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
