import ApiSidebar from "@/components/api/ApiSidebar";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";
import OnThisPage from "@/components/shared/OnThisPage";
import Notice from "@/components/ui/Notice";

const tocItems = [
  { label: "Limits and windows", href: "#limits" },
  { label: "Rate limit headers", href: "#rate-limit-headers" },
  { label: "Handling 429 responses", href: "#handling-429" },
  { label: "Best practices", href: "#best-practices" },
];

const RateLimiting = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <ApiSidebar activePath="/api/rate-limiting" />

      <div className="flex-1 min-w-0 px-12 py-8">
        <div className="mb-4">
          <span className="text-primary text-sm font-medium">Using the API</span>
        </div>

        <div className="flex items-start justify-between mb-6">
          <h1 className="text-4xl font-bold text-foreground">Rate limiting</h1>
          <CopyPageDropdown />
        </div>

        <p className="text-foreground text-base leading-relaxed mb-6">
          Mirage protects platform stability with per-workspace rate limits. The headers below help you track how many
          requests remain and when your window resets.
        </p>

        <Notice
          type="notice"
          text={
            <>
              Need higher throughput? Contact support and we can review your use case for a custom limit.
            </>
          }
          className="mb-8"
        />

        <h2 id="limits" className="text-2xl font-bold text-foreground mb-4">
          Limits and windows
        </h2>
        <p className="text-muted-foreground mb-6">
          Limits are enforced on a rolling basis. If you send bursts that exceed the per-second ceiling, requests will
          return a 429 response until the next second begins.
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Requests per minute</p>
            <p className="text-2xl font-semibold text-foreground">120</p>
            <p className="text-xs text-muted-foreground">Rolling 60-second window</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Burst limit</p>
            <p className="text-2xl font-semibold text-foreground">20 / second</p>
            <p className="text-xs text-muted-foreground">Applies to short spikes</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Concurrent requests</p>
            <p className="text-2xl font-semibold text-foreground">10</p>
            <p className="text-xs text-muted-foreground">Across all endpoints</p>
          </div>
        </div>

        <h2 id="rate-limit-headers" className="text-2xl font-bold text-foreground mb-4">
          Rate limit headers
        </h2>
        <p className="text-muted-foreground mb-4">
          Every response includes headers that describe your current quota. Use them to build adaptive backoff and
          surface limit information in logs.
        </p>
        <div className="rounded-lg border border-border bg-muted/40 p-4 mb-6">
          <pre className="text-sm text-foreground font-mono whitespace-pre-wrap">{`RateLimit-Limit: 120
RateLimit-Remaining: 87
RateLimit-Reset: 1712949000
RateLimit-Policy: 120;w=60, 20;w=1`}</pre>
        </div>
        <ul className="space-y-3 text-muted-foreground mb-10">
          <li>
            <code className="px-2 py-1 bg-muted rounded text-sm text-foreground">RateLimit-Limit</code> is the total
            number of requests allowed in the current window.
          </li>
          <li>
            <code className="px-2 py-1 bg-muted rounded text-sm text-foreground">RateLimit-Remaining</code> shows how many
            requests are left before you are throttled.
          </li>
          <li>
            <code className="px-2 py-1 bg-muted rounded text-sm text-foreground">RateLimit-Reset</code> is a UNIX timestamp
            indicating when the current window resets.
          </li>
          <li>
            <code className="px-2 py-1 bg-muted rounded text-sm text-foreground">RateLimit-Policy</code> outlines the
            active windows and their durations.
          </li>
        </ul>

        <h2 id="handling-429" className="text-2xl font-bold text-foreground mb-4">
          Handling 429 responses
        </h2>
        <p className="text-muted-foreground mb-4">
          When you exceed a limit, the API responds with <code className="px-2 py-1 bg-muted rounded text-sm">429</code> and
          includes a recommended wait time.
        </p>
        <div className="rounded-lg border border-border bg-muted/40 p-4 mb-6">
          <pre className="text-sm text-foreground font-mono whitespace-pre-wrap">{`HTTP/1.1 429 Too Many Requests
Retry-After: 2
RateLimit-Remaining: 0

{
  "error": "rate_limit_exceeded",
  "message": "You have exceeded the 20 req/sec burst limit."
}`}</pre>
        </div>
        <p className="text-muted-foreground mb-10">
          Honor the <code className="px-2 py-1 bg-muted rounded text-sm">Retry-After</code> value before retrying. If you
          continue to receive 429s, lower your concurrency or distribute requests over time.
        </p>

        <h2 id="best-practices" className="text-2xl font-bold text-foreground mb-4">
          Best practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-10">
          <li>Queue non-urgent work and process it at a steady rate instead of large bursts.</li>
          <li>Use exponential backoff for retries and cap the maximum retry count.</li>
          <li>Monitor both per-minute and per-second limits to avoid unexpected throttling.</li>
          <li>Batch operations where available to reduce request volume.</li>
        </ul>

        <Footer />
      </div>

      <OnThisPage items={tocItems} />
    </main>
  );
};

export default RateLimiting;
