import ApiSidebar from "@/components/api/ApiSidebar";
import CopyPageDropdown from "@/components/shared/CopyPageDropdown";
import Footer from "@/components/shared/Footer";

const SendBatchEmails = () => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <ApiSidebar activePath="/api/send-batch-emails" />

      <div className="flex-1 min-w-0 px-12 py-8">
        <div className="text-sm text-muted-foreground mb-4">Sending</div>

        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">Send Batch Emails</h1>
          <CopyPageDropdown />
        </div>

        <p className="text-muted-foreground mb-6">
          Send multiple emails in a single API request.
        </p>

        <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
          Documentation coming soon.
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default SendBatchEmails;
