import { ThumbsUp, ThumbsDown, ChevronRight, Twitter, Github, Linkedin } from "lucide-react";
import CopyPageDropdown from "../shared/CopyPageDropdown";

const ApiContent = () => {
  return (
    <main className="flex-1 min-w-0 px-12 py-8">
      {/* Breadcrumb */}
      <div className="mb-4">
        <span className="text-primary text-sm font-medium">Using the API</span>
      </div>

      {/* Title with Copy Button */}
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-4xl font-bold text-foreground">Overview</h1>
        <CopyPageDropdown />
      </div>

      {/* Description */}
      <p className="text-foreground text-base leading-relaxed mb-8">
        The Mirage API provides a simple interface to state-of-the-art video captioning, generation, and more.
      </p>

      {/* Prerequisites Section */}
      <h2 id="prerequisites" className="text-2xl font-bold text-foreground mb-4">
        Prerequisites
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-8 text-foreground">
        <li>
          A Mirage{" "}
          <a href="#" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
            platform account
          </a>
          .
        </li>
        <li>An API key</li>
      </ul>

      {/* Authentication Section */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        Authentication
      </h3>
      <p className="text-foreground text-base leading-relaxed mb-8">
        Every request to the Mirage API must include an{" "}
        <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">x-api-key</code>{" "}
        header containing your API key. You can create an API key in the{" "}
        <a href="#" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
          platform dashboard
        </a>
        .
      </p>

      {/* Helpful Section */}
      <div className="flex items-center gap-4 py-6 border-t border-border">
        <span className="text-muted-foreground text-sm">Was this page helpful?</span>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-muted transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span>Yes</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-muted transition-colors">
          <ThumbsDown className="w-4 h-4" />
          <span>No</span>
        </button>
      </div>

      {/* Next Navigation */}
      <div className="flex justify-end mt-8">
        <a
          href="#"
          className="flex flex-col items-end p-4 border border-border rounded-lg hover:bg-muted transition-colors min-w-[200px]"
        >
          <span className="text-lg font-semibold text-foreground">API pricing</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            Next
            <ChevronRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center py-8 mt-12 border-t border-border">
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <span className="text-sm text-muted-foreground">
          Powered by{" "}
          <a 
            href="https://monodoc.io?utm_campaign=poweredBy&utm_medium=referral&utm_source=captions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            MonoDoc
          </a>
        </span>
      </footer>
    </main>
  );
};

export default ApiContent;
