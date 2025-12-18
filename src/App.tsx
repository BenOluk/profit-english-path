import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// --- ADICIONE ESTE BLOCO AQUI PARA CORRIGIR O ERRO ---
declare global {
  interface Window {
    dataLayer: any[];
  }
}
// ----------------------------------------------------

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const handleUtms = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

      let queryString = "";
      utmParams.forEach((param) => {
        const value = urlParams.get(param);
        if (value) {
          queryString += `${param}=${encodeURIComponent(value)}&`;
        }
      });

      if (queryString) {
        queryString = queryString.slice(0, -1);
        setTimeout(() => {
          const links = document.querySelectorAll('a[href]:not([href^="#"])');
          links.forEach((link) => {
            const href = link.getAttribute("href");
            if (href && !href.includes("utm_source")) {
              const separator = href.includes("?") ? "&" : "?";
              link.setAttribute("href", `${href}${separator}${queryString}`);
            }
          });
        }, 500);
      }
    };

    // Agora o TypeScript não vai mais reclamar aqui:
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: location.pathname + location.search,
    });

    handleUtms();
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
