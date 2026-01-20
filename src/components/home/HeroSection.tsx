import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-background to-navy opacity-90" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Лидер рынка нефтепродуктов с 2005 года
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in animation-delay-100">
            Надёжные поставки{" "}
            <span className="text-gradient-gold">нефтепродуктов</span> для
            вашего бизнеса
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in animation-delay-200">
            Оптовые поставки дизельного топлива, бензина и авиационного керосина
            по всей России. Гарантия качества, выгодные условия и оперативная
            доставка.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
            <Button
              size="lg"
              className="gradient-gold text-navy-dark font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity group"
            >
              Получить коммерческое предложение
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary/50 text-lg px-8 py-6 group"
            >
              <Play className="w-5 h-5 mr-2 text-primary" />
              О компании
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in animation-delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              Нам доверяют крупнейшие компании России
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              {["ГАЗПРОМ", "ЛУКОЙЛ", "РОСНЕФТЬ", "РЖД", "АЭРОФЛОТ"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-sm font-bold tracking-wider text-muted-foreground"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
