import { Info, User, ChevronRight, ThumbsUp, ThumbsDown } from "lucide-react";
import FAQ from "./FAQ";
import CopyPageDropdown from "./shared/CopyPageDropdown";

const faqItems = [
  {
    question: "What is the maximum video length?",
    answer: "You can produce 60 second videos with Mirage Studio. Create multiple videos and edit together to make longer-form videos."
  },
  {
    question: "What is the maximum character limit for audio prompts?",
    answer: "Your prompt can be 60 seconds or 1200 characters."
  },
  {
    question: "What is the size limit for uploading video or audio files?",
    answer: "Your video and audio files can be up to 100MB."
  },
  {
    question: "Can I use the same actor in multiple videos?",
    answer: "With Mirage Studio, you can maintain character consistency and save your favorite generated actors to use them over and over again."
  },
  {
    question: "Do I own the content I generate?",
    answer: "You retain full rights to all videos created using Mirage Studio. The AI-generated creators are completely virtual and free from licensing restrictions. You can read more in our Terms and Conditions."
  }
];

const MainContent = () => {
  return (
    <main className="flex-1 min-w-0 py-8 px-12">
      {/* Breadcrumb */}
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          GET STARTED
        </span>
      </div>

      {/* Title and Actions */}
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Quick Start</h1>
        <CopyPageDropdown />
      </div>

      {/* Description */}
      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
        Generate expressive performances with actors who look, sound, and feel real.
      </p>

      {/* Callout Box */}
      <div className="bg-callout-bg border border-callout-border rounded-lg p-4 mb-10">
        <div className="flex items-start gap-3 mb-3">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5" />
          <span className="text-sm font-medium text-foreground">Who can use this model?</span>
        </div>
        <div className="flex items-center gap-2 ml-7">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Customers on a <span className="font-semibold text-foreground">Mirage Studio Max, Scale or Enterprise</span> plan.
          </span>
        </div>
      </div>

      {/* Intro paragraph */}
      <p className="text-base text-muted-foreground mb-10 leading-relaxed">
        Mirage is the world's first and only fully-licensed foundation model for acting. Learn more about what sets our model apart from others{" "}
        <a href="#" className="text-primary hover:underline">here</a>.
      </p>

      {/* How it works section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <a href="#" className="text-muted-foreground hover:text-primary">​</a>
          How Mirage Studio Works in 3 Easy Steps
        </h2>
        <ol className="space-y-3 text-base text-muted-foreground list-decimal list-inside leading-relaxed">
          <li>Start with an audio file or generate a voice track from a script</li>
          <li>Create your AI actor using a reference image or text prompt</li>
          <li>Generate your video</li>
        </ol>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          View detailed instructions <a href="#" className="text-primary hover:underline">here</a>.
        </p>
      </section>

      {/* Availability section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <a href="#" className="text-muted-foreground hover:text-primary">​</a>
          Availability, Pricing & Usage
        </h2>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          To use Mirage Studio, you'll need an active subscription. We've recently updated our offerings, and the Teams and Business plans are no longer available. The current subscription options are:
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <a href="#" className="text-muted-foreground hover:text-primary">​</a>
          Available Plans
        </h3>
        <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">Max</span> – $24.99/month
            <p className="mt-1 text-sm">Includes 500 credits and 2 total seats (1 admin + 1 additional seat).</p>
          </li>
          <li>
            <span className="font-semibold text-foreground">Scale</span> – $69.99/month
            <p className="mt-1 text-sm">Includes 1,400 credits and 3 total seats (1 admin + 2 additional seats).</p>
          </li>
          <li>
            <span className="font-semibold text-foreground">Scale 2x</span> – $139.99/month
            <p className="mt-1 text-sm">Includes 2,800 credits and 4 total seats (1 admin + 3 additional seats).</p>
          </li>
          <li>
            <span className="font-semibold text-foreground">Scale 4x</span> – $279.99/month
            <p className="mt-1 text-sm">Includes 5,600 credits and 5 total seats (1 admin + 4 additional seats).</p>
          </li>
        </ul>
        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
          Free users can generate videos up to 15 seconds long, while users on the Teams or Business plans can generate videos up to 60 seconds long.
        </p>
      </section>

      {/* FAQ section */}
      <FAQ items={faqItems} />

      {/* Feedback */}
      <div className="flex items-center gap-4 py-6 border-t border-border">
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

      {/* Next page */}
      <div className="flex justify-end py-6">
        <a
          href="#"
          className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors group"
        >
          <div className="text-right">
            <span className="block text-xs text-muted-foreground">Next</span>
            <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">Our AI Model</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </div>
    </main>
  );
};

export default MainContent;
