import { Layout } from "@/components/layout/Layout";
import { FileCheck, Users, ShieldCheck, Clock, FileText, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const tenderAdvantages = [
  {
    icon: ShieldCheck,
    title: "Прозрачность",
    description: "Открытые и честные условия проведения тендеров. Все участники имеют равные возможности.",
  },
  {
    icon: Users,
    title: "Равные условия",
    description: "Оценка заявок производится по заранее установленным критериям без предвзятости.",
  },
  {
    icon: Clock,
    title: "Оперативность",
    description: "Быстрое рассмотрение заявок и оперативное принятие решений по результатам тендера.",
  },
  {
    icon: FileText,
    title: "Документооборот",
    description: "Полный пакет документов и юридическое сопровождение на всех этапах.",
  },
];

const tenderTypes = [
  {
    title: "Закупка нефтепродуктов",
    description: "Тендеры на закупку дизельного топлива, бензина и авиационного керосина для обеспечения производственной деятельности компании.",
    items: [
      "Дизельное топливо (летнее, зимнее, арктическое)",
      "Автомобильные бензины АИ-92, АИ-95, АИ-98",
      "Авиационный керосин ТС-1, РТ, Jet A-1",
    ],
  },
  {
    title: "Транспортные услуги",
    description: "Конкурсы на оказание услуг по перевозке нефтепродуктов автомобильным и железнодорожным транспортом.",
    items: [
      "Автомобильные перевозки бензовозами",
      "Железнодорожные перевозки в цистернах",
      "Экспедиторские услуги",
    ],
  },
  {
    title: "Хранение и перевалка",
    description: "Тендеры на услуги нефтебаз по хранению, перевалке и отпуску нефтепродуктов.",
    items: [
      "Аренда резервуарных мощностей",
      "Услуги по перевалке топлива",
      "Лабораторный контроль качества",
    ],
  },
];

const participationSteps = [
  {
    step: "01",
    title: "Подача заявки",
    description: "Направьте заявку на участие в тендере с указанием интересующей категории и контактных данных.",
  },
  {
    step: "02",
    title: "Получение документации",
    description: "После регистрации вы получите полный пакет тендерной документации с условиями и требованиями.",
  },
  {
    step: "03",
    title: "Подготовка предложения",
    description: "Подготовьте коммерческое предложение в соответствии с требованиями тендерной документации.",
  },
  {
    step: "04",
    title: "Рассмотрение и результаты",
    description: "Тендерная комиссия рассматривает все предложения и объявляет результаты в установленные сроки.",
  },
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
              <span className="text-sm font-medium text-primary">Тендеры и закупки</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Тендерные <span className="text-primary">закупки</span> компании
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Наша компания проводит открытые тендеры и конкурсные процедуры для закупки товаров и услуг. 
              Мы гарантируем прозрачность, честную конкуренцию и равные условия для всех участников.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Принципы проведения <span className="text-primary">тендеров</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tenderAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all card-hover text-center">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-4 glow-orange">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tender Types */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Направления <span className="text-primary">закупок</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Компания регулярно проводит тендеры по следующим направлениям деятельности
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tenderTypes.map((type) => (
              <div key={type.title} className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Как <span className="text-primary">принять участие</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Процедура участия в тендерах нашей компании проста и понятна
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {participationSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-orange text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 glow-orange">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Требования к <span className="text-primary">участникам</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Наличие государственной регистрации юридического лица или ИП",
                "Отсутствие задолженности по налогам и сборам",
                "Наличие необходимых лицензий и разрешений",
                "Опыт работы в соответствующей сфере деятельности",
                "Положительная деловая репутация",
                "Финансовая устойчивость компании",
                "Наличие квалифицированного персонала",
                "Соответствие техническим требованиям тендера",
              ].map((req) => (
                <div key={req} className="flex items-start gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Отдел <span className="text-primary">закупок</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Для получения информации об актуальных тендерах и подачи заявки на участие 
              свяжитесь с нашим отделом закупок
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-4 glow-orange">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Телефон</p>
                <a href="tel:+78127209767" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  +7 (812) 720-97-67
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-4 glow-orange">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:tender@aoec.ru" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  tender@aoec.ru
                </a>
              </div>
            </div>

            <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
              Подать заявку на участие
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tenders;
