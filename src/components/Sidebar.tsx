import { Zap, Globe, MessageSquare, User, CreditCard, Coins, Users, Shield, HelpCircle, Video, FileText, Settings, Play, Captions } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasChevron?: boolean;
}

const NavItem = ({ icon, label, active, hasChevron }: NavItemProps) => (
  <a
    href="#"
    className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
      active
        ? "bg-nav-active text-primary font-medium"
        : "text-foreground hover:bg-nav-hover"
    }`}
  >
    <div className="flex items-center gap-2.5">
      <span className={active ? "text-primary" : "text-muted-foreground"}>{icon}</span>
      <span>{label}</span>
    </div>
    {hasChevron && (
      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </a>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xs font-semibold text-section-label uppercase tracking-wider mb-2 px-3">
    {children}
  </h3>
);

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-border h-[calc(100vh-7rem)] sticky overflow-y-auto scrollbar-thin py-6 pr-4">
      {/* GET STARTED */}
      <div className="mb-6">
        <SectionLabel>Get Started</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem icon={<Zap className="w-4 h-4" />} label="Quick Start" active />
          <NavItem icon={<Globe className="w-4 h-4" />} label="Our AI Model" />
          <NavItem icon={<MessageSquare className="w-4 h-4" />} label="Prompt Guide" />
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
