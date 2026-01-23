import { Layout } from "@/components/layout/Layout";
import { TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";

const financials = [
  { label: "Выручка 2024", value: "12.5 млрд ₽", change: "+18%" },
  { label: "EBITDA", value: "2.1 млрд ₽", change: "+22%" },
  { label: "Чистая прибыль", value: "1.4 млрд ₽", change: "+15%" },
  { label: "Объём поставок", value: "500 000 т", change: "+12%" },
];

const Investors = () => {
  return (
    <Layout>
      <SEO
        title="Инвесторам — Финансовые показатели АО «ЭК»"
        description="Финансовая информация для инвесторов и акционеров. Выручка 12,5 млрд ₽, объём поставок 500 000 тонн в год."
        keywords="инвесторам, финансовые показатели, акционерам, АО ЭК"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Инвесторам</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Финансовая <span className="text-primary">прозрачность</span> и устойчивый рост
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Информация для инвесторов, акционеров и аналитиков. 
              Финансовые показатели и ключевые данные о компании.
            </p>
          </div>
        </div>
      </section>

      {/* Key Financials */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Ключевые <span className="text-primary">показатели</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financials.map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{item.value}</div>
                <p className="text-muted-foreground mb-2">{item.label}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
