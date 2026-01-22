import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import TableOfContents from "@/components/TableOfContents";
import AskQuestion from "@/components/AskQuestion";
import AssistantPanel from "@/components/AssistantPanel";

const Index = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");

  const handleQuestionSubmit = (question: string) => {
    setInitialQuestion(question);
    setAssistantOpen(true);
  };

  const handleAssistantClose = () => {
    setAssistantOpen(false);
    setInitialQuestion("");
  };

  return (
    <>
      <main className="flex max-w-[1600px] mx-auto px-6">
        <Sidebar activeItem="Introduction" />
        <MainContent />
        {assistantOpen ? (
          <AssistantPanel 
            initialQuestion={initialQuestion} 
            onClose={handleAssistantClose} 
          />
        ) : (
          <TableOfContents />
        )}
      </main>
      {!assistantOpen && <AskQuestion onSubmit={handleQuestionSubmit} />}
    </>
  );
};

export default Index;
