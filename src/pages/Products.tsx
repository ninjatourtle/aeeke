import { Layout } from "@/components/layout/Layout";
import { Fuel, Flame, Plane, CheckCircle, Thermometer, Droplets, Gauge, Shield, Award, Truck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestModal } from "@/components/RequestModal";
import { SEO } from "@/components/SEO";

const dieselProducts = [
  {
    name: "Дизельное топливо летнее (ДТ-Л)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "от -5°C",
    density: "830-860 кг/м³",
    cetane: "не менее 45",
    sulfur: "не более 10 мг/кг",
  },
  {
    name: "Дизельное топливо зимнее (ДТ-З)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "до -35°C",
    density: "800-840 кг/м³",
    cetane: "не менее 45",
    sulfur: "не более 10 мг/кг",
  },
  {
    name: "Дизельное топливо арктическое (ДТ-А)",
    standard: "ГОСТ 305-2013",
    class: "Евро-5 (К5)",
    temperature: "до -50°C",
    density: "790-830 кг/м³",
    cetane: "не менее 40",
    sulfur: "не более 10 мг/кг",
  },
];

const gasolineProducts = [
  {
    name: "Бензин АИ-92",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 92",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
  },
  {
    name: "Бензин АИ-95",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 95",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
  },
  {
    name: "Бензин АИ-98",
    standard: "ГОСТ 32513-2013",
    class: "Евро-5 (К5)",
    octane: "не менее 98",
    density: "725-780 кг/м³",
    sulfur: "не более 10 мг/кг",
    benzene: "не более 1%",
  },
];

const keroseneProducts = [
  {
    name: "Авиакеросин ТС-1",
    standard: "ГОСТ 10227-2013",
    application: "Дозвуковая авиация",
    density: "780-820 кг/м³",
    flash: "не ниже 28°C",
    freezing: "не выше -50°C",
    sulfur: "не более 0.2%",
  },
  {
    name: "Авиакеросин РТ",
    standard: "ГОСТ 10227-2013",
    application: "Сверхзвуковая авиация",
    density: "775-840 кг/м³",
    flash: "не ниже 28°C",
    freezing: "не выше -50°C",
    sulfur: "не более 0.1%",
  },
  {
    name: "Jet A-1",
    standard: "ASTM D1655",
    application: "Международные рейсы",
    density: "775-840 кг/м³",
    flash: "не ниже 38°C",
    freezing: "не выше -47°C",
    sulfur: "не более 0.3%",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Каждая партия топлива сопровождается паспортом качества и сертификатами соответствия ГОСТ",
  },
  {
    icon: Truck,
    title: "Оперативная доставка",
    description: "Собственный автопарк и железнодорожные цистерны обеспечивают поставки в любую точку России",
  },
  {
    icon: Award,
    title: "Прямые поставки",
    description: "Работаем напрямую с крупнейшими НПЗ России, исключая посредников и наценки",
  },
];

const Products = () => {
  return (
    <Layout>
      <SEO
        title="Каталог нефтепродуктов — Дизель, бензин, авиакеросин оптом"
        description="Полный каталог топлива: дизельное топливо Евро-5, бензин АИ-92/95/98, авиакеросин ТС-1, РТ, Jet A-1. Прямые поставки с НПЗ."
        keywords="дизельное топливо, бензин АИ-92, бензин АИ-95, бензин АИ-98, авиакеросин ТС-1, Jet A-1, каталог топлива"
      />
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
              Полный ассортимент топлива: дизельное топливо, автомобильные бензины, авиационный керосин. 
              Прямые поставки с ведущих НПЗ России, гарантия качества на каждую партию.
            </p>
          </div>
        </div>
      </section>

      {/* Diesel Section */}
      <section id="diesel" className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center glow-orange">
              <Fuel className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Дизельное топливо</h2>
              <p className="text-muted-foreground">Летнее, зимнее и арктическое — класс Евро-5</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dieselProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all card-hover"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{product.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Стандарт:</span>
                    <span className="text-foreground font-medium">{product.standard}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Thermometer className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Температура:</span>
                    <span className="text-foreground font-medium">{product.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Плотность:</span>
                    <span className="text-foreground font-medium">{product.density}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Gauge className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Цетановое число:</span>
                    <span className="text-foreground font-medium">{product.cetane}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Класс: {product.class}</span>
                    <span className="text-primary font-medium">Сера: {product.sulfur}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gasoline Section */}
      <section id="gasoline" className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center glow-orange">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Автомобильные бензины</h2>
              <p className="text-muted-foreground">АИ-92, АИ-95, АИ-98 — класс Евро-5</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {gasolineProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all card-hover"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{product.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Стандарт:</span>
                    <span className="text-foreground font-medium">{product.standard}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Gauge className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Октановое число:</span>
                    <span className="text-foreground font-medium">{product.octane}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Плотность:</span>
                    <span className="text-foreground font-medium">{product.density}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Бензол:</span>
                    <span className="text-foreground font-medium">{product.benzene}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Класс: {product.class}</span>
                    <span className="text-primary font-medium">Сера: {product.sulfur}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kerosene Section */}
      <section id="kerosene" className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center glow-orange">
              <Plane className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Авиационный керосин</h2>
              <p className="text-muted-foreground">ТС-1, РТ, Jet A-1 — для всех типов воздушных судов</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {keroseneProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all card-hover"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{product.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Стандарт:</span>
                    <span className="text-foreground font-medium">{product.standard}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Plane className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Применение:</span>
                    <span className="text-foreground font-medium">{product.application}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Droplets className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Плотность:</span>
                    <span className="text-foreground font-medium">{product.density}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Thermometer className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Замерзание:</span>
                    <span className="text-foreground font-medium">{product.freezing}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Вспышка: {product.flash}</span>
                    <span className="text-primary font-medium">Сера: {product.sulfur}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Почему <span className="text-primary">выбирают нас</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
                  <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-6 glow-orange">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Гарантия <span className="text-primary">качества</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Каждая партия топлива проходит лабораторный контроль. 
              Мы предоставляем полный пакет документов на всю продукцию.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Соответствие ГОСТ</p>
              </div>
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24ч</div>
                <p className="text-muted-foreground text-sm">Экспресс-анализ</p>
              </div>
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-muted-foreground text-sm">Рекламаций</p>
              </div>
              <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground text-sm">Паспорт качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Сопроводительная <span className="text-primary">документация</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Паспорт качества на каждую партию",
                "Декларация соответствия ТР ТС",
                "Товарная накладная (ТОРГ-12)",
                "Счёт-фактура",
                "Транспортная накладная",
                "Сертификат происхождения",
                "Акт приёма-передачи",
                "Договор поставки",
              ].map((doc) => (
                <div key={doc} className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{doc}</span>
                </div>
              ))}
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
              Наши специалисты помогут подобрать оптимальное топливо для ваших задач и рассчитают стоимость поставки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestModal
                title="Получить консультацию"
                description="Оставьте заявку, и наши специалисты свяжутся с вами для консультации"
                trigger={
                  <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
                    Получить консультацию
                  </Button>
                }
              />
              <a href="tel:+78122180300">
                <Button size="lg" variant="outline" className="border-border hover:border-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (812) 218-03-00
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
