import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Api from "./pages/Api";
import SendWithPython from "./pages/SendWithPython";
import SendWithNextjs from "./pages/SendWithNextjs";
import SendEmail from "./pages/api/SendEmail";
import SendBatchEmails from "./pages/api/SendBatchEmails";
import GetEmail from "./pages/api/GetEmail";
import ListSentEmails from "./pages/api/ListSentEmails";
import CreateContact from "./pages/api/CreateContact";
import GetContact from "./pages/api/GetContact";
import GetListContacts from "./pages/api/GetListContacts";
import UpdateContact from "./pages/api/UpdateContact";
import RemoveContact from "./pages/api/RemoveContact";
import AddContactToSegment from "./pages/api/AddContactToSegment";
import GetContactSegments from "./pages/api/GetContactSegments";
import RemoveContactSegment from "./pages/api/RemoveContactSegment";
import CreateSegment from "./pages/api/CreateSegment";
import GetSegment from "./pages/api/GetSegment";
import GetSegments from "./pages/api/GetSegments";
import RemoveSegment from "./pages/api/RemoveSegment";
import RateLimiting from "./pages/api/RateLimiting";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const activeTab =
    location.pathname === "/"
      ? "studio"
      : location.pathname.startsWith("/introduction")
        ? "introduction"
        : location.pathname.startsWith("/send-with-python")
          ? "introduction"
        : location.pathname.startsWith("/send-with-nextjs")
          ? "introduction"
        : location.pathname.startsWith("/api")
          ? "api"
          : undefined;

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header activeTab={activeTab} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/send-with-python" element={<SendWithPython />} />
        <Route path="/send-with-nextjs" element={<SendWithNextjs />} />
        <Route path="/api" element={<Api />} />
        <Route path="/api/send-email" element={<SendEmail />} />
        <Route path="/api/send-batch-emails" element={<SendBatchEmails />} />
        <Route path="/api/get-email" element={<GetEmail />} />
        <Route path="/api/list-sent-emails" element={<ListSentEmails />} />
        <Route path="/api/create-contact" element={<CreateContact />} />
        <Route path="/api/get-contact" element={<GetContact />} />
        <Route path="/api/get-list-contacts" element={<GetListContacts />} />
        <Route path="/api/update-contact" element={<UpdateContact />} />
        <Route path="/api/remove-contact" element={<RemoveContact />} />
        <Route path="/api/add-contact-to-segment" element={<AddContactToSegment />} />
        <Route path="/api/get-contact-segments" element={<GetContactSegments />} />
        <Route path="/api/remove-contact-segment" element={<RemoveContactSegment />} />
        <Route path="/api/create-segment" element={<CreateSegment />} />
        <Route path="/api/get-segment" element={<GetSegment />} />
        <Route path="/api/get-segments" element={<GetSegments />} />
        <Route path="/api/remove-segment" element={<RemoveSegment />} />
        <Route path="/api/rate-limiting" element={<RateLimiting />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
