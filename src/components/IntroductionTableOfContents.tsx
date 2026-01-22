import OnThisPage from "./shared/OnThisPage";

const tocItems = [
  { label: "Quickstart", href: "#quickstart" },
  { label: "Explore", href: "#explore" },
  { label: "Next steps", href: "#next-steps" },
];

const IntroductionTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default IntroductionTableOfContents;
