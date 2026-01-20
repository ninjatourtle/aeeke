import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDiesel from "./pages/products/ProductDiesel";
import ProductGasoline from "./pages/products/ProductGasoline";
import ProductKerosene from "./pages/products/ProductKerosene";
import Investors from "./pages/Investors";
import Tenders from "./pages/Tenders";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/diesel" element={<ProductDiesel />} />
          <Route path="/products/gasoline" element={<ProductGasoline />} />
          <Route path="/products/kerosene" element={<ProductKerosene />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
