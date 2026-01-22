import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type EmailsIntroCardProps = {
  title: string;
  description: string;
  to?: string;
};

const EmailsIntroCard = ({ title, description, to }: EmailsIntroCardProps) => {
  const CardComponent = to ? Link : "div";
  const cardProps = to
    ? { to, className: "group rounded-xl border border-border p-4 hover:bg-muted transition-colors" }
    : { className: "rounded-xl border border-border p-4 bg-muted/40" };

  return (
    <CardComponent {...cardProps}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {to ? (
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        ) : null}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardComponent>
  );
};

export default EmailsIntroCard;
