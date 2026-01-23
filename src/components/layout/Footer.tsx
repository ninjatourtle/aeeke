import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  products: [
    { name: "Дизельное топливо", href: "/products/diesel" },
    { name: "Бензин", href: "/products/gasoline" },
    { name: "Керосин", href: "/products/kerosene" },
  ],
  company: [
    { name: "О компании", href: "/about" },
    { name: "Инвесторам", href: "/investors" },
  ],
  support: [
    { name: "Условия поставок", href: "/contacts" },
    { name: "Оплата", href: "/contacts" },
    { name: "FAQ", href: "/contacts" },
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
            <Link to="/" className="flex items-center mb-6">
            <img 
                src={logo} 
                alt="АО «ЭК»" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Надёжный поставщик качественных нефтепродуктов для вашего бизнеса.
              Работаем с 2018 года по всей России.
            </p>

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
                  info@aoec.ru
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Санкт-Петербург, пер. Зеленков, д. 7а литер 3, помещ. 5-н офис 104</span>
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
              © 2026 АО «ЭК». Все права защищены.
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
