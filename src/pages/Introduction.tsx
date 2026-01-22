import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const quickstartLinks = [
  "Node.js Quickstart",
  "Next.js Quickstart",
  "Express Quickstart",
  "PHP Quickstart",
  "Laravel Quickstart",
  "Python Quickstart",
  "Ruby Quickstart",
  "Rails Quickstart",
  "Go Quickstart",
  "Rust Quickstart",
  "Elixir Quickstart",
  "Java Quickstart",
  ".NET Quickstart",
];

const exploreLinks = [
  {
    title: "Emails",
    description: "Visualize all the activity in your account.",
  },
  {
    title: "Domains",
    description: "Ensure deliverability of your emails.",
  },
  {
    title: "Webhooks",
    description: "Notify your application about email events.",
  },
];

const Introduction = () => {
  return (
    <main className="bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Introduction</h1>
          <CopyPageDropdown />
        </div>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Resend is the email API for developers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="#"
            className="h-9 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Get started
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="#"
            className="h-9 px-4 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center"
          >
            View API reference
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quickstart</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Learn how to get Resend set up in your project.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickstartLinks.map((title) => (
              <Link
                key={title}
                to="#"
                className="group border border-border rounded-lg p-4 hover:bg-muted transition-colors flex items-center justify-between"
              >
                <span className="text-sm font-medium text-foreground">{title}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">Explore</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Discover the full range of features and capabilities.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {exploreLinks.map((item) => (
              <Link
                key={item.title}
                to="#"
                className="group border border-border rounded-lg p-4 hover:bg-muted transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex justify-end py-10">
          <Link
            to="#"
            className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors group"
          >
            <div className="text-right">
              <span className="block text-xs text-muted-foreground">Next</span>
              <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Node.js Quickstart
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Introduction;
