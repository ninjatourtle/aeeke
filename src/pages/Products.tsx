import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Fuel, Flame, Plane, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "diesel",
    icon: Fuel,
    title: "Дизельное топливо",
    description: "Летнее, зимнее и арктическое дизельное топливо класса К5 для любых условий эксплуатации.",
    features: ["ГОСТ 305-2013", "Класс К5 (Евро-5)", "Летнее / Зимнее / Арктическое"],
    href: "/products/diesel",
  },
  {
    id: "gasoline",
    icon: Flame,
    title: "Бензин",
    description: "Автомобильные бензины марок АИ-92, АИ-95 и АИ-98 для всех типов двигателей.",
    features: ["ГОСТ 32513-2013", "АИ-92 / АИ-95 / АИ-98", "Улучшенные марки"],
    href: "/products/gasoline",
  },
  {
    id: "kerosene",
    icon: Plane,
    title: "Авиационный керосин",
    description: "Реактивное топливо марок ТС-1, РТ и Джет А-1 для авиационной отрасли.",
    features: ["ГОСТ 10227-2013", "ТС-1 / РТ / Джет А-1", "Международные сертификаты"],
    href: "/products/kerosene",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <Fuel className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Каталог продукции</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Качественные <span className="text-primary">нефтепродукты</span> для вашего бизнеса
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Полный ассортимент топлива: дизель, бензин, авиакеросин. 
              Прямые поставки с НПЗ, гарантия качества на каждую партию.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 card-hover flex flex-col"
                >
                  <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center mb-6 glow-orange">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={product.href}>
                    <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary">
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Гарантия <span className="text-primary">качества</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Каждая партия топлива проходит лабораторный контроль. 
              Мы предоставляем паспорт качества на всю продукцию.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Соответствие ГОСТ</p>
              </div>
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24ч</div>
                <p className="text-muted-foreground">Экспресс-анализ</p>
              </div>
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-muted-foreground">Рекламаций за год</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Нужна консультация?
            </h2>
            <p className="text-muted-foreground mb-8">
              Наши специалисты помогут подобрать оптимальное топливо для ваших задач
            </p>
            <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
