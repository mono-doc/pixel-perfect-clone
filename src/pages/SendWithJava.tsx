import Sidebar from "@/components/Sidebar";
import SendWithJavaContent from "@/components/SendWithJavaContent";
import SendWithJavaTableOfContents from "@/components/SendWithJavaTableOfContents";

const SendWithJava = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Java" />
      <SendWithJavaContent />
      <SendWithJavaTableOfContents />
    </main>
  );
};

export default SendWithJava;
