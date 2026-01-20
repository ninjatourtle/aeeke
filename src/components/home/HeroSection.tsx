import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RequestModal } from "@/components/RequestModal";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Oil refinery background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Лидер рынка нефтепродуктов с 2018 года
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in animation-delay-100">
            Надёжные поставки{" "}
            <span className="text-primary">нефтепродуктов</span> для
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
            <RequestModal
              title="Получить коммерческое предложение"
              description="Оставьте заявку, и мы подготовим для вас индивидуальное коммерческое предложение"
              trigger={
                <Button
                  size="lg"
                  className="gradient-gold text-navy-dark font-semibold text-lg px-8 py-6 hover:opacity-90 transition-opacity group"
                >
                  Получить коммерческое предложение
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary/50 text-lg px-8 py-6 group"
              >
                <Play className="w-5 h-5 mr-2 text-primary" />
                О компании
              </Button>
            </Link>
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
