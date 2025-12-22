import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import TableOfContents from "@/components/TableOfContents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex max-w-[1600px] mx-auto px-6">
        <Sidebar />
        <MainContent />
        <TableOfContents />
      </div>
    </div>
  );
};

export default Index;
