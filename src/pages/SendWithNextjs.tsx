import Sidebar from "@/components/Sidebar";
import SendWithNextjsContent from "@/components/SendWithNextjsContent";
import SendWithNextjsTableOfContents from "@/components/SendWithNextjsTableOfContents";

const SendWithNextjs = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Send with Next.js" />
      <SendWithNextjsContent />
      <SendWithNextjsTableOfContents />
    </main>
  );
};

export default SendWithNextjs;
