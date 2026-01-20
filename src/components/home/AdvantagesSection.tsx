import {
  Shield,
  Award,
  Truck,
  BadgePercent,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Надёжность",
    description:
      "19 лет безупречной работы. Выполняем обязательства в срок и в полном объёме.",
  },
  {
    icon: Award,
    title: "Качество",
    description:
      "Сертифицированная продукция, соответствующая ГОСТ. Строгий контроль на всех этапах.",
  },
  {
    icon: Truck,
    title: "Доставка",
    description:
      "Собственный автопарк и партнёрская сеть. Доставка в любую точку России.",
  },
  {
    icon: BadgePercent,
    title: "Выгодные цены",
    description:
      "Прямые контракты с НПЗ. Индивидуальные условия для постоянных клиентов.",
  },
  {
    icon: ClipboardCheck,
    title: "Контроль качества",
    description:
      "Лаборатория с современным оборудованием. Паспорт качества на каждую партию.",
  },
  {
    icon: Headphones,
    title: "Сервис 24/7",
    description:
      "Персональный менеджер. Оперативное решение любых вопросов круглосуточно.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-24 section-dark-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Почему выбирают{" "}
            <span className="text-primary">нас</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы понимаем потребности бизнеса и предлагаем решения, которые
            помогают вам экономить время и деньги
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/25 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
