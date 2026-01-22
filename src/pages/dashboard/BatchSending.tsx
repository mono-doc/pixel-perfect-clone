import BatchSendingContent from "@/components/dashboard/BatchSendingContent";
import BatchSendingTableOfContents from "@/components/dashboard/BatchSendingTableOfContents";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const BatchSending = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <DashboardSidebar activePath="/dashboard/emails/batch-sending" />
      <BatchSendingContent />
      <BatchSendingTableOfContents />
    </main>
  );
};

export default BatchSending;
