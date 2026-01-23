import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Plane, CheckCircle, Thermometer, Droplets, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestModal } from "@/components/RequestModal";
import { SEO } from "@/components/SEO";

const keroseneProducts = [
  {
    name: "Авиакеросин ТС-1",
    standard: "ГОСТ 10227-2013",
    application: "Дозвуковая авиация",
    density: "780-820 кг/м³",
    flash: "не ниже 28°C",
    freezing: "не выше -50°C",
    sulfur: "не более 0,2%",
    heat: "не менее 43,12 МДж/кг",
    description: "Топливо для реактивных двигателей ТС-1 — основное авиационное топливо для дозвуковой авиации. Применяется в гражданской и военной авиации России.",
  },
  {
    name: "Авиакеросин РТ",
    standard: "ГОСТ 10227-2013",
    application: "Сверхзвуковая авиация",
    density: "775-840 кг/м³",
    flash: "не ниже 28°C",
    freezing: "не выше -50°C",
    sulfur: "не более 0,1%",
    heat: "не менее 43,12 МДж/кг",
    description: "Топливо РТ разработано для сверхзвуковых самолётов. Обладает повышенной термической стабильностью и улучшенными низкотемпературными свойствами.",
  },
  {
    name: "Jet A-1",
    standard: "ASTM D1655",
    application: "Международные рейсы",
    density: "775-840 кг/м³",
    flash: "не ниже 38°C",
    freezing: "не выше -47°C",
    sulfur: "не более 0,3%",
    heat: "не менее 42,8 МДж/кг",
    description: "Международный стандарт авиационного керосина. Используется на международных рейсах и в аэропортах с иностранными воздушными судами.",
  },
];

const applications = [
  "Гражданская авиация",
  "Военная авиация",
  "Вертолётная техника",
  "Международные перевозки",
  "Бизнес-авиация",
  "Грузовые авиаперевозки",
];

const ProductKerosene = () => {
  return (
    <Layout>
      <SEO
        title="Авиационный керосин оптом — ТС-1, РТ, Jet A-1"
        description="Купить авиакеросин оптом: ТС-1, РТ, Jet A-1. ГОСТ 10227-2013, поставки для гражданской и военной авиации."
        keywords="авиакеросин оптом, ТС-1, РТ, Jet A-1, авиационное топливо, купить керосин"
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
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Авиационный керосин</h1>
              <p className="text-muted-foreground">ТС-1, РТ, Jet A-1 • ГОСТ 10227-2013</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Поставляем авиационное топливо для всех типов воздушных судов. 
            Полное соответствие российским и международным стандартам качества.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Марки авиационного керосина</h2>
          <div className="space-y-8">
            {keroseneProducts.map((product) => (
              <div
                key={product.name}
                className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Применение</span>
                    </div>
                    <span className="text-foreground font-semibold text-sm">{product.application}</span>
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
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Замерзание</span>
                    </div>
                    <span className="text-foreground font-semibold">{product.freezing}</span>
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
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">Вспышка: {product.flash}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">Теплота сгорания: {product.heat}</span>
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

      {/* Certification */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Сертификация и контроль качества</h2>
            <p className="text-muted-foreground mb-8">
              Всё авиационное топливо проходит обязательную сертификацию и лабораторный контроль 
              в соответствии с требованиями авиационных властей
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Паспорт качества",
                "Сертификат ГОСТ",
                "Декларация ТР ТС",
                "Международный сертификат",
              ].map((cert) => (
                <div key={cert} className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Заказать авиационный керосин</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для расчёта стоимости и условий поставки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestModal
                title="Заказать авиационный керосин"
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

export default ProductKerosene;
