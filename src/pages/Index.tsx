import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import TableOfContents from "@/components/TableOfContents";
import AskQuestion from "@/components/AskQuestion";

const Index = () => {
  return (
    <>
      <main className="flex max-w-[1600px] mx-auto px-6">
        <Sidebar />
        <MainContent />
        <TableOfContents />
      </main>
      <AskQuestion />
    </>
  );
};

export default Index;
