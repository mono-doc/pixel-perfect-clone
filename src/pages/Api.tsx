import Header from "@/components/Header";
import ApiSidebar from "@/components/api/ApiSidebar";
import ApiContent from "@/components/api/ApiContent";
import ApiTableOfContents from "@/components/api/ApiTableOfContents";

const Api = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeTab="api" />
      <div className="flex max-w-[1600px] mx-auto px-6">
        <ApiSidebar />
        <ApiContent />
        <ApiTableOfContents />
      </div>
    </div>
  );
};

export default Api;
