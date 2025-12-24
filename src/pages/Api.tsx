import ApiSidebar from "@/components/api/ApiSidebar";
import ApiContent from "@/components/api/ApiContent";
import ApiTableOfContents from "@/components/api/ApiTableOfContents";

const Api = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <ApiSidebar activePath="/api" />
      <ApiContent />
      <ApiTableOfContents />
    </main>
  );
};

export default Api;
