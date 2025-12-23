import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeTab="introduction" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent/50 to-background">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
            Your guide to growing with AI-powered short-form video
          </h1>
          <div className="w-16 h-1 bg-primary mt-6 mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Step-by-step help, troubleshooting, and how-to resources to get the most out of Captions and Mirage's frontier AI video tools.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Captions Card */}
          <div className="group">
            <div className="bg-muted rounded-lg overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center p-8">
                <div className="flex gap-2 items-end">
                  <div className="w-20 h-36 bg-slate-800 rounded-lg shadow-xl" />
                  <div className="w-24 h-44 bg-slate-700 rounded-lg shadow-xl -mb-2" />
                  <div className="w-20 h-36 bg-slate-800 rounded-lg shadow-xl" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Captions</h2>
            <p className="text-muted-foreground mb-4">
              Edit by text, add subtitles, and translate in one pass
            </p>
            <Link 
              to="#" 
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mirage Studio Card */}
          <div className="group">
            <div className="relative">
              <div className="absolute -top-1 left-0 right-0 h-1 bg-primary rounded-t-lg" />
              <div className="bg-muted rounded-lg overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                    <div className="aspect-square bg-slate-600 rounded" />
                    <div className="aspect-square bg-slate-600 rounded" />
                    <div className="aspect-square bg-slate-600 rounded" />
                    <div className="aspect-square bg-slate-600 rounded" />
                    <div className="aspect-square bg-slate-600 rounded" />
                    <div className="aspect-square bg-slate-600 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Mirage Studio</h2>
            <p className="text-muted-foreground mb-4">
              Create realistic talking video from a script or audio
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* What we build Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What we build</h2>
        <div className="w-12 h-1 bg-primary mb-6" />
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          We train models that understand speech, timing, and style. Then we ship them in products that cut busywork out of the process. Scripting, editing, localization, and publishing live in one flow so teams spend more time creating and less time hunting through timelines.
        </p>
      </div>

      {/* Our point of view Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our point of view</h2>
        <div className="w-12 h-1 bg-primary mb-6" />
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Mirage is built on the belief that the distance between idea and audience should be zero. By combining frontier AI research with powerful short-form video tools, we give creators and businesses the ability to reach their full creative and commercial potential.
        </p>
      </div>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  );
};

export default Introduction;
