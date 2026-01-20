import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Fuel, CheckCircle, Thermometer, Droplets, Gauge, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestModal } from "@/components/RequestModal";

const dieselProducts = [
  {
    name: "Дизельное топливо летнее (ДТ-Л)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "от -5°C и выше",
    density: "830-860 кг/м³",
    cetane: "не менее 45",
    sulfur: "не более 10 мг/кг",
    viscosity: "3,0-6,0 мм²/с при 20°C",
    flash: "не ниже 55°C",
    description: "Летнее дизельное топливо предназначено для использования при температурах окружающего воздуха от -5°C и выше. Обеспечивает стабильную работу двигателя в тёплое время года.",
  },
  {
    name: "Дизельное топливо зимнее (ДТ-З)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "до -35°C",
    density: "800-840 кг/м³",
    cetane: "не менее 45",
    sulfur: "не более 10 мг/кг",
    viscosity: "1,8-5,0 мм²/с при 20°C",
    flash: "не ниже 40°C",
    description: "Зимнее дизельное топливо разработано для эксплуатации в условиях низких температур. Содержит специальные депрессорные присадки для улучшения текучести.",
  },
  {
    name: "Дизельное топливо арктическое (ДТ-А)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "до -50°C",
    density: "790-830 кг/м³",
    cetane: "не менее 40",
    sulfur: "не более 10 мг/кг",
    viscosity: "1,5-4,0 мм²/с при 20°C",
    flash: "не ниже 35°C",
    description: "Арктическое дизельное топливо предназначено для использования в экстремально холодных климатических условиях Крайнего Севера и Арктики.",
  },
];

const applications = [
  "Грузовой автотранспорт",
  "Строительная техника",
  "Сельскохозяйственная техника",
  "Дизельные генераторы",
  "Железнодорожный транспорт",
  "Речной и морской флот",
];

const ProductDiesel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Вернуться к каталогу
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center glow-orange">
              <Fuel className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Дизельное топливо</h1>
              <p className="text-muted-foreground">Класс Евро-5 (К5) • ГОСТ 305-2013</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Предлагаем дизельное топливо высшего экологического класса К5 для всех типов дизельных двигателей. 
            Летние, зимние и арктические марки для эксплуатации в любых климатических условиях России.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Марки дизельного топлива</h2>
          <div className="space-y-8">
            {dieselProducts.map((product) => (
              <div
                key={product.name}
                className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Температура</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.temperature}</span>
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
                      <Gauge className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Цетановое число</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.cetane}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Сера</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.sulfur}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary">{product.standard}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-foreground">{product.class}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">Вспышка: {product.flash}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">Вязкость: {product.viscosity}</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Заказать дизельное топливо</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для расчёта стоимости и условий поставки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestModal
                title="Заказать дизельное топливо"
                description="Оставьте заявку, и мы рассчитаем стоимость поставки"
                trigger={
                  <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
                    Оставить заявку
                  </Button>
                }
              />
              <a href="tel:+78127209767">
                <Button size="lg" variant="outline" className="border-border hover:border-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (812) 720-97-67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDiesel;
