import { ThumbsDown, ThumbsUp } from "lucide-react";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const SendWithJavaContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Java</span>
      </div>

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Send emails with Java</h1>
        <CopyPageDropdown />
      </div>

      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
        Learn how to send your first email using the MonoSend Java SDK.
      </p>

      <section id="prerequisites" className="scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Prerequisites</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          To get the most out of this guide, you’ll need to:
        </p>
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
              Verify your domain
            </a>
          </li>
        </ul>
      </section>

      <section id="1-install" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">1. Install</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          Add the MonoSend Java SDK to your project.
        </p>
        <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
            <span>Gradle</span>
          </div>
          <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
            <code>implementation "com.monosend:monosend-java:+"</code>
          </pre>
        </div>
      </section>

      <section id="2-send-email-using-html" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-3">2. Send email using HTML</h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          The easiest way to send an email is by using the html parameter.
        </p>
        <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border text-xs font-semibold text-muted-foreground">
            <span>src/Main.java</span>
          </div>
          <pre className="p-4 text-sm text-foreground font-mono overflow-x-auto">
            <code>{`import com.monosend.*;

public class Main {
    public static void main(String[] args) {
        MonoSend monosend = new MonoSend(System.getenv("MONOSEND_API_KEY"));

        SendEmailRequest request = SendEmailRequest.builder()
                .to("customer@gmail.com")
                .from("Brand <welcome@monosend.email>")
                .subject("Welcome to MonoSend!")
                .html("<p>it works!</p>")
                .replyTo("support@monosend.io")
                .build();

        monosend.emails().send(request);
    }
}`}</code>
          </pre>
        </div>
      </section>

      <section id="3-try-it-yourself" className="mt-10 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Try it yourself</h2>
        <a
          href="https://github.com/monosend/monosend-java-example"
          className="block rounded-xl border border-border p-4 hover:bg-muted transition-colors"
        >
          <h3 className="text-base font-semibold text-foreground mb-1">Java Example</h3>
          <p className="text-sm text-muted-foreground">See the full source code.</p>
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

export default SendWithJavaContent;
