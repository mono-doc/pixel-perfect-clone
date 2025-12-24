import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-8 mt-8">
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Instagram className="w-5 h-5" />
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
  );
};

export default Footer;
