import { useState } from "react";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Получите{" "}
              <span className="text-primary">коммерческое предложение</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
              для обсуждения условий сотрудничества
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Бесплатная линия
                  </div>
                  <a
                    href="tel:+78001234567"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    8 800 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:sales@energy-const.ru"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    sales@energy-const.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                "Бесплатная консультация",
                "Индивидуальные условия",
                "Быстрый расчёт",
                "Гибкая логистика",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Имя *
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      required
                      className="bg-secondary/30 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="bg-secondary/30 border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@company.ru"
                    className="bg-secondary/30 border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Компания
                  </label>
                  <Input
                    placeholder='ООО "Название компании"'
                    className="bg-secondary/30 border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Интересующий продукт
                  </label>
                  <Select>
                    <SelectTrigger className="bg-secondary/30 border-border">
                      <SelectValue placeholder="Выберите продукт" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diesel">Дизельное топливо</SelectItem>
                      <SelectItem value="gasoline">Бензин</SelectItem>
                      <SelectItem value="kerosene">
                        Авиационный керосин
                      </SelectItem>
                      <SelectItem value="all">Несколько продуктов</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Укажите объёмы, регион доставки и другие пожелания..."
                    rows={4}
                    className="bg-secondary/30 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-gold text-navy-dark font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
