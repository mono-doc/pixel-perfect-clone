import OnThisPage from "@/components/shared/OnThisPage";

const tocItems = [
  { label: "Overview", href: "#overview" },
  { label: "Create a new batch", href: "#create-batch" },
  { label: "Upload your recipients", href: "#upload-recipients" },
  { label: "Preview, schedule, and send", href: "#preview-send" },
  { label: "Track results", href: "#tracking" },
  { label: "Limits & safeguards", href: "#limits" },
];

const BatchSendingTableOfContents = () => {
  return <OnThisPage items={tocItems} />;
};

export default BatchSendingTableOfContents;
