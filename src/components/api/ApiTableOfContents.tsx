import OnThisPage from "../shared/OnThisPage";

const apiTocItems = [
  { label: "Prerequisites", href: "#prerequisites", active: true },
];

const ApiTableOfContents = () => {
  return <OnThisPage items={apiTocItems} />;
};

export default ApiTableOfContents;
