import { ThumbsDown, ThumbsUp } from "lucide-react";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const SendWithNextjsContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Next.js</span>
      </div>

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Send emails with Next.js</h1>
        <CopyPageDropdown />
      </div>

      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
        Follow this quickstart to send your first email from a Next.js application using the MonoSend SDK.
      </p>

      <section id="prerequisites" className="scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Prerequisites</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">Before you start, make sure you:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <a
              href="https://monosend.io/api-keys"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              Create an API key
            </a>
          </li>
          <li>
            <a
              href="https://monosend.io/domains"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              Verify your sending domain
            </a>
          </li>
          <li>Have a Next.js 13+ app with the App Router enabled.</li>
        </ul>
      </section>

      <section id="1-install" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">1. Install</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Add the MonoSend SDK to your Next.js project.
        </p>
        <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
            <span>npm</span>
          </div>
          <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
            <code>npm install monosend</code>
          </pre>
        </div>
      </section>

      <section id="2-configure-env" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">2. Configure your API key</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Store your API key in <span className="font-medium text-foreground">.env.local</span>.
        </p>
        <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
            <span>.env.local</span>
          </div>
          <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
            <code>MONOSEND_API_KEY=mono_xxxxx</code>
          </pre>
        </div>
      </section>

      <section id="3-send-email" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">3. Send an email</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Create a route handler and send an email from your Next.js server.
        </p>
        <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
            <span>app/api/send/route.ts</span>
          </div>
          <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
            <code>{`import { NextResponse } from "next/server";
import { MonoSend } from "monosend";

const monosend = new MonoSend(process.env.MONOSEND_API_KEY ?? "");

export async function POST() {
  const { data, error } = await monosend.emails.send({
    to: ["customer@gmail.com"],
    from: "Brand <welcome@monosend.email>",
    subject: "Welcome to MonoSend!",
    html: "<p>it works!</p>",
    reply_to: "support@monosend.io",
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json(data);
}`}</code>
          </pre>
        </div>
      </section>

      <section id="4-try-it-yourself" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Try it yourself</h2>
        <a
          href="https://github.com/monosend/monosend-nextjs-example"
          className="block rounded-xl border border-border p-4 hover:bg-muted transition-colors"
        >
          <h3 className="text-base font-semibold text-foreground mb-1">Next.js Example</h3>
          <p className="text-sm text-muted-foreground">Clone the example and start sending.</p>
        </a>
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

export default SendWithNextjsContent;
