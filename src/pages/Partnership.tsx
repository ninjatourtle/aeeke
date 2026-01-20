import { Layout } from "@/components/layout/Layout";
import { Handshake, Truck, CreditCard, FileText, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deliveryOptions = [
  {
    icon: Truck,
    title: "Автотранспорт",
    description: "Доставка бензовозами от 8 до 32 тонн в любую точку России",
    features: ["Собственный автопарк", "GPS-мониторинг", "Круглосуточная доставка"],
  },
  {
    icon: Truck,
    title: "Железнодорожный транспорт",
    description: "Поставки в цистернах для крупных объёмов",
    features: ["Партии от 60 тонн", "Все ж/д станции РФ", "Полный документооборот"],
  },
];

const paymentMethods = [
  "Безналичный расчёт (предоплата)",
  "Отсрочка платежа (для постоянных клиентов)",
  "Аккредитив",
  "Факторинг",
];

const faq = [
  {
    question: "Каков минимальный объём заказа?",
    answer: "Минимальный объём заказа составляет 8 тонн при доставке автотранспортом и 60 тонн при железнодорожной доставке. Для постоянных клиентов возможны индивидуальные условия.",
  },
  {
    question: "Какие документы предоставляются с продукцией?",
    answer: "С каждой партией топлива предоставляется: паспорт качества, товарная накладная, счёт-фактура, транспортная накладная. По запросу — декларация соответствия и сертификат ГОСТ.",
  },
  {
    question: "Как оформить заявку на поставку?",
    answer: "Заявку можно оформить через форму на сайте, по телефону +7 (812) 720-97-67 или по email info@energyconstruction.ru. Мы свяжемся с вами в течение 1 часа в рабочее время.",
  },
  {
    question: "Есть ли скидки для постоянных клиентов?",
    answer: "Да, мы предлагаем накопительную систему скидок. Размер скидки зависит от объёма закупок и истории сотрудничества. Персональные условия обсуждаются с вашим менеджером.",
  },
  {
    question: "Работаете ли вы с государственными организациями?",
    answer: "Да, мы имеем опыт работы с государственными и муниципальными организациями. Участвуем в тендерах и госзакупках. Предоставляем полный пакет документов для конкурсных процедур.",
  },
];

const Partnership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Сотрудничество</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Условия <span className="text-primary">сотрудничества</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Прозрачные условия поставок, гибкие формы оплаты и логистические решения 
              для бизнеса любого масштаба.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Способы <span className="text-primary">доставки</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deliveryOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.title} className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 glow-orange">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Формы <span className="text-primary">оплаты</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div key={method} className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Документы для <span className="text-primary">начала работы</span>
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
              <ul className="space-y-3">
                {[
                  "Заявка на заключение договора",
                  "Карточка предприятия с реквизитами",
                  "Копия свидетельства о регистрации (ОГРН/ОГРНИП)",
                  "Копия свидетельства о постановке на налоговый учёт (ИНН)",
                  "Доверенность на подписание договора (если требуется)",
                ].map((doc) => (
                  <li key={doc} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Часто задаваемые <span className="text-primary">вопросы</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-muted-foreground mb-8">
              Оставьте заявку, и наш менеджер свяжется с вами для обсуждения условий
            </p>
            <Button size="lg" className="gradient-orange text-white font-semibold glow-orange">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnership;
