import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import DeliveryGuarantee from "./pages/DeliveryGuarantee";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import Cars from "./pages/Cars";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fahrzeuge" element={<Cars />} />
          <Route path="/so-funktionierts" element={<HowItWorks />} />
          <Route path="/lieferung-garantie" element={<DeliveryGuarantee />} />
          <Route path="/qualitaet" element={<Quality />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/wartung" element={<Maintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
