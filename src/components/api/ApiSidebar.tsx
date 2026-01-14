import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

interface MethodBadgeProps {
  method: HttpMethod;
}

const MethodBadge = ({ method }: MethodBadgeProps) => {
  const colors: Record<HttpMethod, string> = {
    GET: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    POST: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    PATCH: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    PUT: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  };

  return (
    <span className={`text-2xs font-semibold px-1.5 py-0.5 rounded ${colors[method]}`}>
      {method}
    </span>
  );
};

interface NavItemProps {
  label: string;
  active?: boolean;
  hasChevron?: boolean;
  method?: HttpMethod;
  href?: string;
}

const NavItem = ({ label, active, hasChevron, method, href }: NavItemProps) => {
  const content = (
    <>
      {method && <MethodBadge method={method} />}
      <span className="flex-1">{label}</span>
      {hasChevron && (
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      )}
    </>
  );

  const className = `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
    active
      ? "bg-nav-active text-primary font-medium"
      : "text-foreground hover:bg-nav-hover"
  }`;

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

interface ApiSidebarProps {
  activePath?: string;
}

const ApiSidebar = ({ activePath }: ApiSidebarProps) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-border h-[calc(100vh-7rem)] sticky top-24 overflow-y-auto scrollbar-thin py-6 pr-4">
      {/* USING THE API */}
      <div className="mb-6">
        <SectionLabel>Using the API</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Overview" active={activePath === "/api"} href="/api" />
          <NavItem label="API pricing" />
          <NavItem label="Rate limiting" />
        </nav>
      </div>

      {/* SENDING */}
      <div className="mb-6">
        <SectionLabel>Sending</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Send Email" method="POST" active={activePath === "/api/send-email"} href="/api/send-email" />
          <NavItem
            label="Send Batch Emails"
            method="POST"
            active={activePath === "/api/send-batch-emails"}
            href="/api/send-batch-emails"
          />
          <NavItem label="Get Email" method="GET" active={activePath === "/api/get-email"} href="/api/get-email" />
          <NavItem label="List Sent Emails" method="GET" />
        </nav>
      </div>

      {/* RECEIVING */}
      <div className="mb-6">
        <SectionLabel>Receiving</SectionLabel>
        <nav className="space-y-0.5">
          <NavItem label="Retrieve Received Email" method="GET" />
          <NavItem label="List Received Emails" method="GET" />
          <NavItem label="Retrieve Attachment" method="GET" />
          <NavItem label="List Attachments" method="GET" />
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
