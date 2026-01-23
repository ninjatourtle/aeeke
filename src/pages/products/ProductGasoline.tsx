import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Flame, CheckCircle, Droplets, Gauge, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestModal } from "@/components/RequestModal";
import { SEO } from "@/components/SEO";

const gasolineProducts = [
  {
    name: "Бензин АИ-92",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 92",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
    aromatics: "не более 35%",
    description: "Автомобильный бензин марки АИ-92 — универсальное топливо для большинства легковых автомобилей с карбюраторными и инжекторными двигателями.",
  },
  {
    name: "Бензин АИ-95",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 95",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
    aromatics: "не более 35%",
    description: "Бензин АИ-95 предназначен для современных автомобилей с высокой степенью сжатия двигателя. Обеспечивает оптимальную мощность и экономичность.",
  },
  {
    name: "Бензин АИ-98",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 98",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
    aromatics: "не более 35%",
    description: "Премиальный бензин АИ-98 для спортивных и высокофорсированных двигателей. Максимальная мощность и защита двигателя от детонации.",
  },
];

const applications = [
  "Легковые автомобили",
  "Коммерческий транспорт",
  "Мотоциклы и мототехника",
  "Лодочные моторы",
  "Садовая техника",
  "Бензиновые генераторы",
];

const ProductGasoline = () => {
  return (
    <Layout>
      <SEO
        title="Бензин оптом — АИ-92, АИ-95, АИ-98 класса Евро-5"
        description="Купить бензин оптом: АИ-92, АИ-95, АИ-98 класса Евро-5. ГОСТ 32513-2013, прямые поставки с НПЗ по всей России."
        keywords="бензин оптом, АИ-92, АИ-95, АИ-98, бензин Евро-5, купить бензин"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Вернуться к каталогу
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center glow-orange">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Автомобильные бензины</h1>
              <p className="text-muted-foreground">Класс Евро-5 (К5) • ГОСТ 32513-2013</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Поставляем автомобильные бензины высшего экологического класса К5. 
            Марки АИ-92, АИ-95 и АИ-98 для всех типов бензиновых двигателей.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Марки автомобильных бензинов</h2>
          <div className="space-y-8">
            {gasolineProducts.map((product) => (
              <div
                key={product.name}
                className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Октановое число</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.octane}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Плотность</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.density}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Сера</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.sulfur}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Бензол</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.benzene}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary">{product.standard}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-foreground">{product.class}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">Ароматика: {product.aromatics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Области применения</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {applications.map((app) => (
              <div key={app} className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Заказать бензин</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для расчёта стоимости и условий поставки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestModal
                title="Заказать бензин"
                description="Оставьте заявку, и мы рассчитаем стоимость поставки"
                trigger={
                  <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
                    Оставить заявку
                  </Button>
                }
              />
              <a href="tel:+78127209767,220">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (812) 720-97-67, доб. 220
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductGasoline;
