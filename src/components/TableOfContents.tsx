import OnThisPage from "./shared/OnThisPage";

const tocItems = [
  { label: "How Mirage Studio Works in 3 Easy Steps", href: "#how-it-works" },
  { label: "Availability, Pricing & Usage", href: "#pricing" },
  { label: "Available Plans", href: "#plans", indented: true, parentHref: "#pricing" },
  { label: "Frequently Asked Questions", href: "#faq" },
];

const TableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default TableOfContents;
