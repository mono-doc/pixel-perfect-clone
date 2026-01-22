import Sidebar from "@/components/Sidebar";
import SendWithPhpContent from "@/components/SendWithPhpContent";
import SendWithPhpTableOfContents from "@/components/SendWithPhpTableOfContents";

const SendWithPhp = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Quick Start" />
      <SendWithPhpContent />
      <SendWithPhpTableOfContents />
    </main>
  );
};

export default SendWithPhp;
