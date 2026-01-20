import { Layout } from "@/components/layout/Layout";
import { FileCheck, Calendar, MapPin, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const tenders = [
  {
    id: "T-2025-001",
    title: "Поставка дизельного топлива для автопарка",
    volume: "1 200 тонн",
    region: "Московская область",
    deadline: "15 февраля 2025",
    status: "active",
    category: "Дизель",
  },
  {
    id: "T-2025-002",
    title: "Закупка бензина АИ-95 для сети АЗС",
    volume: "800 тонн",
    region: "Санкт-Петербург",
    deadline: "20 февраля 2025",
    status: "active",
    category: "Бензин",
  },
  {
    id: "T-2025-003",
    title: "Поставка авиационного керосина ТС-1",
    volume: "500 тонн",
    region: "Новосибирск",
    deadline: "28 февраля 2025",
    status: "active",
    category: "Керосин",
  },
  {
    id: "T-2025-004",
    title: "Годовой контракт на поставку дизельного топлива",
    volume: "12 000 тонн/год",
    region: "Краснодарский край",
    deadline: "10 марта 2025",
    status: "active",
    category: "Дизель",
  },
  {
    id: "T-2024-089",
    title: "Поставка зимнего дизельного топлива",
    volume: "2 000 тонн",
    region: "Екатеринбург",
    deadline: "Завершён",
    status: "completed",
    category: "Дизель",
  },
];

const stats = [
  { label: "Активных тендеров", value: "12" },
  { label: "Завершено в 2024", value: "156" },
  { label: "Средний объём", value: "850 т" },
  { label: "Регионов", value: "45" },
];

const Tenders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <FileCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Тендеры</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Участвуйте в <span className="text-primary">тендерах</span> на поставку топлива
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Прозрачные закупки нефтепродуктов. Подавайте заявки на участие в открытых тендерах 
              и получайте выгодные контракты.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Поиск по тендерам..." 
                className="pl-10 bg-secondary/30 border-border focus:border-primary"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 border-border hover:border-primary">
              <Filter className="w-4 h-4" />
              Фильтры
            </Button>
          </div>
        </div>
      </section>

      {/* Tenders List */}
      <section className="py-12 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Открытые тендеры
          </h2>
          <div className="space-y-4">
            {tenders.map((tender) => (
              <div
                key={tender.id}
                className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-muted-foreground font-mono">{tender.id}</span>
                      <Badge 
                        variant={tender.status === "active" ? "default" : "secondary"}
                        className={tender.status === "active" ? "bg-green-500/15 text-green-500 border-green-500/30" : ""}
                      >
                        {tender.status === "active" ? "Активен" : "Завершён"}
                      </Badge>
                      <Badge variant="outline" className="border-border">{tender.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{tender.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileCheck className="w-4 h-4" />
                        {tender.volume}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {tender.region}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tender.deadline}
                      </span>
                    </div>
                  </div>
                  {tender.status === "active" && (
                    <Button className="gradient-orange text-white font-semibold whitespace-nowrap">
                      Подать заявку
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Как <span className="text-primary">участвовать</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Регистрация", description: "Зарегистрируйтесь в системе закупок" },
              { step: "2", title: "Выбор тендера", description: "Найдите подходящий тендер" },
              { step: "3", title: "Подача заявки", description: "Заполните форму и приложите документы" },
              { step: "4", title: "Участие", description: "Следите за результатами" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full gradient-orange text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 glow-orange">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Есть вопросы по тендерам?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с отделом закупок для получения консультации
            </p>
            <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
              Связаться с отделом закупок
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tenders;
