import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Building2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const offices = [
  {
    city: "Москва",
    address: "ул. Профсоюзная, д. 65, корп. 1, офис 401",
    phone: "+7 (495) 123-45-67",
    email: "moscow@energyconstruction.ru",
    hours: "Пн-Пт: 9:00 - 18:00",
    isMain: true,
  },
  {
    city: "Санкт-Петербург",
    address: "Невский пр-т, д. 100, офис 512",
    phone: "+7 (812) 123-45-67",
    email: "spb@energyconstruction.ru",
    hours: "Пн-Пт: 9:00 - 18:00",
    isMain: false,
  },
  {
    city: "Новосибирск",
    address: "ул. Ленина, д. 50, офис 301",
    phone: "+7 (383) 123-45-67",
    email: "nsk@energyconstruction.ru",
    hours: "Пн-Пт: 9:00 - 18:00",
    isMain: false,
  },
];

const requisites = {
  name: 'ООО "Энерджи Констракшн"',
  inn: "7701234567",
  kpp: "770101001",
  ogrn: "1027700123456",
  bank: 'ПАО "Сбербанк России"',
  account: "40702810000000123456",
  corr: "30101810400000000225",
  bik: "044525225",
};

const Contacts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Контакты</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Свяжитесь <span className="text-primary">с нами</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Мы готовы ответить на ваши вопросы и помочь с выбором оптимального решения 
              для вашего бизнеса.
            </p>
          </div>
        </div>
      </section>

      {/* Hotline */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                <Phone className="w-7 h-7 text-navy-dark" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Горячая линия (бесплатно по России)</p>
                <a href="tel:88001234567" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  8 800 123-45-67
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">Режим работы</p>
              <p className="font-semibold text-foreground">Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Наши <span className="text-primary">офисы</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`p-6 rounded-2xl border ${
                  office.isMain ? "bg-card border-primary/30" : "bg-card border-border"
                }`}
              >
                {office.isMain && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                    Головной офис
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              Напишите <span className="text-primary">нам</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Заполните форму, и мы свяжемся с вами в течение рабочего дня
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название компании" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea id="message" placeholder="Опишите ваш вопрос или запрос..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-gold text-navy-dark font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Requisites */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Реквизиты <span className="text-primary">компании</span>
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Наименование</p>
                  <p className="font-medium text-foreground">{requisites.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ИНН</p>
                  <p className="font-medium text-foreground">{requisites.inn}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">КПП</p>
                  <p className="font-medium text-foreground">{requisites.kpp}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ОГРН</p>
                  <p className="font-medium text-foreground">{requisites.ogrn}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Банк</p>
                  <p className="font-medium text-foreground">{requisites.bank}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Расчётный счёт</p>
                  <p className="font-medium text-foreground">{requisites.account}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Корр. счёт</p>
                  <p className="font-medium text-foreground">{requisites.corr}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">БИК</p>
                  <p className="font-medium text-foreground">{requisites.bik}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
