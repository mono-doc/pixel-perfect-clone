import Sidebar from "@/components/Sidebar";
import SendWithNodeContent from "@/components/SendWithNodeContent";
import SendWithNodeTableOfContents from "@/components/SendWithNodeTableOfContents";

const SendWithNode = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Node" />
      <SendWithNodeContent />
      <SendWithNodeTableOfContents />
    </main>
  );
};

export default SendWithNode;
