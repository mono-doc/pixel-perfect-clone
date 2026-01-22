import Sidebar from "@/components/Sidebar";
import SendWithPythonContent from "@/components/SendWithPythonContent";
import SendWithPythonTableOfContents from "@/components/SendWithPythonTableOfContents";

const SendWithPython = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Quick Start" />
      <SendWithPythonContent />
      <SendWithPythonTableOfContents />
    </main>
  );
};

export default SendWithPython;
