import { Layout } from "@/components/layout/Layout";
import { Shield, Target, Eye, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestModal } from "@/components/RequestModal";
import { SEO } from "@/components/SEO";

const certificates = [
  "ISO 9001:2015 — Система менеджмента качества",
  "ISO 14001:2015 — Экологический менеджмент",
  "ГОСТ Р ИСО 45001-2020 — Охрана труда",
  "Лицензия на оптовую торговлю нефтепродуктами",
];

const milestones = [
  { year: "2018", event: "Основание компании" },
  { year: "2019", event: "Открытие первого регионального филиала" },
  { year: "2020", event: "Выход на рынок авиационного топлива" },
  { year: "2022", event: "Достижение объёма 100 000 тонн/год" },
  { year: "2024", event: "Расширение географии до 30 регионов" },
  { year: "2025", event: "500 000+ тонн топлива в год" },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="О компании — АО «ЭК» | Надёжный поставщик топлива"
        description="С 2018 года поставляем качественные нефтепродукты по всей России. 500 000+ тонн топлива в год, 30 регионов присутствия. Узнайте о нас больше."
        keywords="АО ЭК, о компании, поставщик топлива, история компании, нефтепродукты"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">О компании</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              АО «ЭК» — надёжный партнёр в мире <span className="text-primary">нефтепродуктов</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              С 2018 года мы обеспечиваем российский бизнес качественным топливом, 
              выстраивая долгосрочные партнёрские отношения на основе доверия и профессионализма.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Миссия</h3>
              <p className="text-muted-foreground">
                Обеспечивать бесперебойные поставки качественных нефтепродуктов, 
                способствуя развитию российской экономики.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Видение</h3>
              <p className="text-muted-foreground">
                Стать ведущим поставщиком топлива в России, задавая стандарты 
                качества и сервиса в отрасли.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ценности</h3>
              <p className="text-muted-foreground">
                Надёжность, прозрачность, ответственность и постоянное 
                стремление к совершенству.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            История <span className="text-primary">развития</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-orange -translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Certificates */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Сертификаты и <span className="text-primary">лицензии</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert) => (
              <div key={cert} className="flex items-center gap-4 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-foreground">{cert}</span>
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
              Готовы к сотрудничеству?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для обсуждения условий поставок
            </p>
            <RequestModal
              title="Связаться с нами"
              description="Оставьте заявку для обсуждения условий сотрудничества"
              trigger={
                <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
                  Связаться с нами
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
