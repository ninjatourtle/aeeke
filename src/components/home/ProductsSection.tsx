import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Flame, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Droplets,
    title: "Дизельное топливо",
    description:
      "Летнее, зимнее и арктическое дизельное топливо класса К5 по ГОСТ 32511-2013",
    items: ["ДТ-Л-К5", "ДТ-З-К5", "ДТ-А-К5", "ДТ Евро-5"],
    href: "/products/diesel",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Flame,
    title: "Бензин",
    description:
      "Автомобильные бензины всех марок с улучшенными экологическими характеристиками",
    items: ["АИ-92-К5", "АИ-95-К5", "АИ-98-К5", "АИ-95 Premium"],
    href: "/products/gasoline",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Plane,
    title: "Авиационный керосин",
    description:
      "Топливо для реактивных двигателей, соответствующее международным стандартам",
    items: ["ТС-1", "РТ", "Jet A-1"],
    href: "/products/kerosene",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Наша <span className="text-gradient-gold">продукция</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный ассортимент нефтепродуктов от ведущих российских
              производителей с гарантией качества
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="group">
              Весь каталог
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.title}
                to={product.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-background/50 border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${product.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
