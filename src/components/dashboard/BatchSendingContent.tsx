import { CheckCircle2, Clock, Info, Mail, ThumbsDown, ThumbsUp, Upload } from "lucide-react";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const BatchSendingContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          Dashboard · Emails
        </span>
      </div>

      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Batch sending</h1>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            Send thousands of transactional or lifecycle emails from the dashboard in a single upload. Batch sending keeps
            your payload consistent, validates recipients before send, and provides a unified report for each run.
          </p>
        </div>
        <CopyPageDropdown />
      </div>

      <section id="overview" className="scroll-mt-32">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Fast validation",
              description: "We scan every row for invalid emails, missing data, or duplicate recipients before sending.",
              icon: <CheckCircle2 className="w-4 h-4" />,
            },
            {
              title: "Queue visibility",
              description: "See when each batch enters the queue, processes, and completes without leaving the dashboard.",
              icon: <Clock className="w-4 h-4" />,
            },
            {
              title: "Single template",
              description: "Attach one template and personalize it with per-row variables from your CSV or JSON file.",
              icon: <Mail className="w-4 h-4" />,
            },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-xl p-4 bg-muted/30">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-muted-foreground">{item.icon}</span>
                {item.title}
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="create-batch" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Create a new batch</h2>
        <p className="text-base text-muted-foreground mb-5 leading-relaxed">
          In the dashboard, go to <span className="font-medium text-foreground">Emails → Batch sending</span> and click
          <span className="font-medium text-foreground"> New batch</span>. You will pick a template, set the sender,
          and decide if the batch is sent immediately or scheduled for later.
        </p>
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Info className="w-4 h-4 text-muted-foreground" />
            Recommended setup
          </div>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Use a dedicated subdomain for batch sends (e.g., <span className="font-medium text-foreground">bulk.yourcompany.com</span>).</li>
            <li>Keep subject lines consistent to avoid triggering spam filters across large sends.</li>
            <li>Include a suppression list for recipients who opted out.</li>
          </ul>
        </div>
      </section>

      <section id="upload-recipients" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Upload your recipients</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Batch sending accepts CSV or JSON uploads. Every row becomes one email request. Required columns include
          <span className="font-medium text-foreground"> email</span> and any template variables you want to inject.
        </p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-border bg-muted/30">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
              <span>recipients.csv</span>
              <span className="flex items-center gap-2">
                <Upload className="w-3.5 h-3.5" />
                Drag & drop or browse
              </span>
            </div>
            <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
              <code>{`email,first_name,plan,trial_end
alex@acme.io,Alex,Scale,2024-09-12
jules@acme.io,Jules,Pro,2024-09-12
mira@acme.io,Mira,Enterprise,2024-09-12`}</code>
            </pre>
          </div>
          <div className="rounded-xl border border-border p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">Validation checklist</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• File size up to 10 MB (≈ 50k rows).</li>
              <li>• UTF-8 encoded CSV with headers.</li>
              <li>• One <span className="font-medium text-foreground">email</span> per row.</li>
              <li>• Optional <span className="font-medium text-foreground">tags</span> column for grouping.</li>
              <li>• JSON uploads must be an array of objects.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="preview-send" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Preview, schedule, and send</h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Preview the first 25 renders to confirm personalization and formatting. When you are ready, choose
          <span className="font-medium text-foreground"> Send now</span> or set a scheduled time with time zone
          awareness. Scheduled batches can be paused until the first message is delivered.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Preview render",
              description: "Inspect HTML and plaintext versions with live variable substitution.",
            },
            {
              title: "Schedule delivery",
              description: "Pick a time window or throttle delivery for large customer lists.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tracking" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Track results</h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Each batch has a dedicated report showing delivered, bounced, and opened counts. You can export the report or
          drill into a single recipient for full event history.
        </p>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 text-xs font-semibold text-muted-foreground bg-muted/40">
            <div className="px-4 py-2">Status</div>
            <div className="px-4 py-2">Definition</div>
            <div className="px-4 py-2">Typical action</div>
          </div>
          {[
            {
              status: "Delivered",
              definition: "Accepted by the recipient server.",
              action: "No action needed.",
            },
            {
              status: "Bounced",
              definition: "Rejected by the recipient server.",
              action: "Review address or suppression list.",
            },
            {
              status: "Suppressed",
              definition: "Skipped due to opt-out or complaint history.",
              action: "Remove from future batches.",
            },
          ].map((row) => (
            <div key={row.status} className="grid grid-cols-3 text-sm border-t border-border">
              <div className="px-4 py-3 font-medium text-foreground">{row.status}</div>
              <div className="px-4 py-3 text-muted-foreground">{row.definition}</div>
              <div className="px-4 py-3 text-muted-foreground">{row.action}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="limits" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Limits & safeguards</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Batch sending is optimized for high-volume transactional and lifecycle sends. For marketing campaigns, contact
          support to enable advanced segmentation and throttling.
        </p>
        <ul className="space-y-2 text-base text-muted-foreground">
          <li>• Maximum of 50,000 recipients per batch.</li>
          <li>• Up to 10 template variables per recipient.</li>
          <li>• Attachments not supported in batch mode.</li>
          <li>• Batches are retained for 30 days in the dashboard.</li>
        </ul>
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

export default BatchSendingContent;
