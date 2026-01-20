import { Link } from "react-router-dom";
import { Fuel, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  products: [
    { name: "Дизельное топливо", href: "/products/diesel" },
    { name: "Бензин", href: "/products/gasoline" },
    { name: "Керосин", href: "/products/kerosene" },
  ],
  company: [
    { name: "О компании", href: "/about" },
    { name: "Инвесторам", href: "/investors" },
    { name: "Сотрудничество", href: "/partnership" },
  ],
  support: [
    { name: "Условия поставок", href: "/partnership#delivery" },
    { name: "Оплата", href: "/partnership#payment" },
    { name: "FAQ", href: "/partnership#faq" },
    { name: "Контакты", href: "/contacts" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                <Fuel className="w-7 h-7 text-navy-dark" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground tracking-tight">
                  ЭНЕРДЖИ
                </div>
                <div className="text-xs text-primary font-semibold tracking-widest">
                  КОНСТРАКШН
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Надёжный поставщик качественных нефтепродуктов для вашего бизнеса.
              Работаем с 2005 года по всей России.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                Подпишитесь на новости
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-secondary/50 border-border"
                />
                <Button size="icon" className="gradient-gold shrink-0">
                  <Send className="w-4 h-4 text-navy-dark" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Продукция
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Компания
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+78127209767"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +7 (812) 720-97-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aoec.ru"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@energy-const.ru
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Нефтяная, д. 15, офис 301</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Энерджи Констракшн. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
