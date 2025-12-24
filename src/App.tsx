import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Api from "./pages/Api";
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
        <Route path="/api" element={<Api />} />
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
