import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { RequestModal } from "@/components/RequestModal";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "Продукция",
    href: "/products",
    submenu: [
      { name: "Дизельное топливо", href: "/products/diesel" },
      { name: "Бензин", href: "/products/gasoline" },
      { name: "Керосин", href: "/products/kerosene" },
    ],
  },
  { name: "О компании", href: "/about" },
  { name: "Инвесторам", href: "/investors" },
  { name: "Тендеры", href: "/tenders" },
  { name: "Контакты", href: "/contacts" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="АО Энерджи Констракшн" 
              className="h-12 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} asChild>
                        <Link
                          to={subitem.href}
                          className="w-full cursor-pointer"
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+78127209767"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (812) 720-97-67</span>
            </a>
            <RequestModal
              trigger={
                <Button className="gradient-orange text-white font-semibold hover:opacity-90 transition-opacity">
                  Оставить заявку
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-foreground">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 mt-4 border-t border-border">
                <RequestModal
                  trigger={
                    <Button className="w-full gradient-orange text-white font-semibold">
                      Оставить заявку
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
