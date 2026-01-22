import OnThisPage from "@/components/shared/OnThisPage";

const tocItems = [
  { label: "Prerequisites", href: "#prerequisites" },
  { label: "1. Install", href: "#1-install" },
  { label: "2. Send email using HTML", href: "#2-send-email-using-html" },
  { label: "3. Try it yourself", href: "#3-try-it-yourself" },
];

const SendWithNodeTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default SendWithNodeTableOfContents;
