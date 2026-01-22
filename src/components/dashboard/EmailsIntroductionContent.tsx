import { ArrowUpRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const metrics = [
  {
    title: "Deliverability",
    description: "Monitor inbox placement, spam rate, and bounces for every campaign.",
  },
  {
    title: "Engagement",
    description: "Track opens, clicks, and replies across automated and broadcast sends.",
  },
  {
    title: "Volume",
    description: "Compare send volume by day, campaign, or audience segment.",
  },
];

const EmailsIntroductionContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Dashboard</span>
      </div>

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">
          Emails dashboard introduction
        </h1>
        <CopyPageDropdown />
      </div>

      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
        The Emails dashboard gives you a single view of how messages perform across your account,
        from delivery to engagement. Use it to spot trends, troubleshoot deliverability, and share
        performance updates with your team.
      </p>

      <section id="overview" className="scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Overview</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          The overview panel summarizes your most important metrics and highlights changes over the
          selected time range. Choose a default workspace and pin the cards your team reviews most.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.title} className="rounded-xl border border-border p-4 bg-muted/40">
              <h3 className="text-sm font-semibold text-foreground mb-2">{metric.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="filters" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Filters and segments</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Use filters to narrow the dashboard to a specific audience, sending domain, or campaign.
          Saved segments help you return to the same view whenever you need to audit performance.
        </p>
        <div className="rounded-xl border border-border p-4">
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Filter by tag, domain, or campaign to compare similar sends.</li>
            <li>Save segments for regular reporting and share them with collaborators.</li>
            <li>Switch date ranges to see daily, weekly, or monthly trends.</li>
          </ul>
        </div>
      </section>

      <section id="events" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Event timeline</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          The timeline connects delivery events with engagement metrics so you can understand where
          messages drop off. Investigate spikes in bounces or complaints and export the event data
          for deeper analysis.
        </p>
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          Learn how event data is collected
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      <section id="next-steps" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Next steps</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Ready to dive deeper? Pair the dashboard with webhooks and activity logs to get real-time
          updates on message activity in your workspace.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="#"
            className="h-9 px-4 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors inline-flex items-center"
          >
            View activity logs
          </Link>
          <Link
            to="#"
            className="h-9 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center"
          >
            Configure webhooks
          </Link>
        </div>
      </section>

      <div className="flex items-center gap-4 py-8">
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

      <Footer />
    </main>
  );
};

export default EmailsIntroductionContent;
