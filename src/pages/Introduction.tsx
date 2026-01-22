import Sidebar from "@/components/Sidebar";
import IntroductionContent from "@/components/IntroductionContent";
import IntroductionTableOfContents from "@/components/IntroductionTableOfContents";

const Introduction = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Introduction" />
      <IntroductionContent />
      <IntroductionTableOfContents />
    </main>
  );
};

export default Introduction;
