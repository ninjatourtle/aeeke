import { Layout } from "@/components/layout/Layout";
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, GraduationCap, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  { icon: TrendingUp, title: "Карьерный рост", description: "Программы развития и продвижения" },
  { icon: GraduationCap, title: "Обучение", description: "Корпоративное обучение и тренинги" },
  { icon: Heart, title: "ДМС", description: "Медицинское страхование для сотрудников" },
  { icon: Coffee, title: "Комфорт", description: "Современные офисы и условия труда" },
];

const vacancies = [
  {
    id: 1,
    title: "Менеджер по продажам B2B",
    department: "Коммерческий отдел",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 150 000 ₽",
  },
  {
    id: 2,
    title: "Специалист по логистике",
    department: "Логистика",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    salary: "от 120 000 ₽",
  },
  {
    id: 3,
    title: "Финансовый аналитик",
    department: "Финансы",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 180 000 ₽",
  },
  {
    id: 4,
    title: "Инженер по качеству",
    department: "Качество",
    location: "Нижний Новгород",
    type: "Полная занятость",
    salary: "от 130 000 ₽",
  },
  {
    id: 5,
    title: "HR-менеджер",
    department: "HR",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 140 000 ₽",
  },
];

const Career = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Карьера</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Стройте <span className="text-primary">карьеру</span> вместе с нами
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Присоединяйтесь к команде профессионалов в динамично развивающейся компании. 
              Мы ценим талант и создаём условия для роста.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <p className="text-sm text-muted-foreground">Сотрудников</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">15</div>
              <p className="text-sm text-muted-foreground">Городов</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.7</div>
              <p className="text-sm text-muted-foreground">Рейтинг работодателя</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">85%</div>
              <p className="text-sm text-muted-foreground">Рост изнутри</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Почему <span className="text-primary">работать</span> у нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border text-center card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Открытые <span className="text-primary">вакансии</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy.id}
                className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{vacancy.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="outline" className="border-border">{vacancy.department}</Badge>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacancy.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {vacancy.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-primary">{vacancy.salary}</span>
                    <Button className="gradient-orange text-white font-semibold">
                      Откликнуться
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Не нашли подходящую вакансию?
            </h2>
            <p className="text-muted-foreground mb-8">
              Отправьте своё резюме, и мы свяжемся с вами, когда появится подходящая позиция
            </p>
            <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
