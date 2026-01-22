import OnThisPage from "@/components/shared/OnThisPage";

const tocItems = [
  { label: "Prerequisites", href: "#prerequisites" },
  { label: "1. Install", href: "#1-install" },
  { label: "2. Configure your API key", href: "#2-configure-env" },
  { label: "3. Send an email", href: "#3-send-email" },
  { label: "4. Try it yourself", href: "#4-try-it-yourself" },
];

const SendWithNextjsTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default SendWithNextjsTableOfContents;
