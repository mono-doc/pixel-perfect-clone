import { ArrowUpRight, ChevronRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";
import EmailsIntroCard from "@/components/dashboard/EmailsIntroCard";

const tourCards = [
  {
    title: "Performance overview",
    description: "Track delivery, opens, clicks, and spam rates at a glance for any timeframe.",
  },
  {
    title: "Campaign health",
    description: "Compare sends by audience, tags, and templates to spot what needs attention.",
  },
  {
    title: "Engagement timeline",
    description: "Follow message activity hour by hour and identify drop-off points quickly.",
  },
];

const insightLinks = [
  {
    title: "Deliverability watchlist",
    description: "Review bounces, complaints, and inbox placement warnings.",
    to: "#",
  },
  {
    title: "Engagement deep dive",
    description: "Break down clicks and replies by audience segment or campaign.",
    to: "#",
  },
  {
    title: "Volume trends",
    description: "See weekly volume changes and compare across workspaces.",
    to: "#",
  },
];

const EmailsIntroductionContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Dashboard</span>
      </div>

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Emails introduction</h1>
        <CopyPageDropdown />
      </div>

      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        Welcome to the Emails dashboard. Use this view to understand delivery health, engagement
        trends, and sending volume so you can make fast decisions with your team.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to="#"
          className="h-9 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          Open emails dashboard
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          to="#"
          className="h-9 px-4 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center"
        >
          View metrics glossary
        </Link>
      </div>

      <section id="tour" className="mt-12 scroll-mt-32">
        <h2 className="text-xl font-semibold text-foreground mb-3">Dashboard tour</h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Get oriented with the key panels you will use to monitor performance each day.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {tourCards.map((card) => (
            <EmailsIntroCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <section id="filters" className="mt-10 scroll-mt-32">
        <h2 className="text-xl font-semibold text-foreground mb-3">Filters and segments</h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Focus your dashboard on the campaigns and audiences that matter right now. Filters and
          saved segments help you align on the same view across marketing, product, and operations.
        </p>
        <div className="rounded-xl border border-border p-4 bg-muted/40">
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Filter by tag, domain, or campaign to compare similar sends.</li>
            <li>Save segments for weekly reporting and share them with collaborators.</li>
            <li>Switch date ranges to review daily, weekly, or monthly trends.</li>
          </ul>
        </div>
      </section>

      <section id="insights" className="mt-10 scroll-mt-32">
        <h2 className="text-xl font-semibold text-foreground mb-3">Insights to review</h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Drill into the insights panel to investigate changes and share the right highlights with
          your stakeholders.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {insightLinks.map((link) => (
            <EmailsIntroCard
              key={link.title}
              title={link.title}
              description={link.description}
              to={link.to}
            />
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4 py-6">
        <span className="text-sm text-muted-foreground">Was this page helpful?</span>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
            <ThumbsUp className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
            <ThumbsDown className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div id="next-steps" className="flex justify-end py-6 scroll-mt-32">
        <Link
          to="#"
          className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors group"
        >
          <div className="text-right">
            <span className="block text-xs text-muted-foreground">Next</span>
            <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              Emails dashboard reports
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default EmailsIntroductionContent;
