import OnThisPage from "@/components/shared/OnThisPage";

const tocItems = [
  { label: "Overview", href: "#overview" },
  { label: "Filters and segments", href: "#filters" },
  { label: "Event timeline", href: "#events" },
  { label: "Next steps", href: "#next-steps" },
];

const EmailsIntroductionTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default EmailsIntroductionTableOfContents;
