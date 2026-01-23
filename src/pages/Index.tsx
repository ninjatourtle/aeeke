import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { GeographySection } from "@/components/home/GeographySection";
import { ContactSection } from "@/components/home/ContactSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="АО Энерджи Констракшн — Оптовые поставки нефтепродуктов в России"
        description="Оптовые поставки дизельного топлива, бензина и авиакеросина. Прямые контракты с НПЗ, доставка по всей России. ☎ +7 (812) 720-97-67, доб. 220"
        keywords="дизельное топливо оптом, бензин оптом, авиакеросин, нефтепродукты, поставки топлива"
      />
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
