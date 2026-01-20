import { useEffect, useRef, useState } from "react";
import { Truck, Users, MapPin, Calendar } from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: 500000,
    suffix: "+",
    label: "тонн топлива в год",
    description: "Объём поставок",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "корпоративных клиентов",
    description: "Доверяют нам",
  },
  {
    icon: MapPin,
    value: 45,
    suffix: "",
    label: "регионов России",
    description: "География поставок",
  },
  {
    icon: Calendar,
    value: 19,
    suffix: "",
    label: "лет на рынке",
    description: "Опыт работы",
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 section-dark-2" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center ${inView ? "animate-count-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-orange mb-4 glow-orange">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
