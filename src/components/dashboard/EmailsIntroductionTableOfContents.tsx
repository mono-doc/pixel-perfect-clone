import OnThisPage from "@/components/shared/OnThisPage";

const tocItems = [
  { label: "Dashboard tour", href: "#tour" },
  { label: "Filters and segments", href: "#filters" },
  { label: "Insights to review", href: "#insights" },
  { label: "Next steps", href: "#next-steps" },
];

const EmailsIntroductionTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default EmailsIntroductionTableOfContents;
