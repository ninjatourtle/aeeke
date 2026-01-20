import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { GeographySection } from "@/components/home/GeographySection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AdvantagesSection />
      <ProductsSection />
      <GeographySection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
