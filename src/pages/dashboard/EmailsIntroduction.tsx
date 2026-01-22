import Sidebar from "@/components/Sidebar";
import EmailsIntroductionContent from "@/components/dashboard/EmailsIntroductionContent";
import EmailsIntroductionTableOfContents from "@/components/dashboard/EmailsIntroductionTableOfContents";

const EmailsIntroduction = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem="Introduction" />
      <EmailsIntroductionContent />
      <EmailsIntroductionTableOfContents />
    </main>
  );
};

export default EmailsIntroduction;
