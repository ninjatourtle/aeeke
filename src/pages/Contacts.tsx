import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Санкт-Петербург",
    address: "пер. Зеленков, д. 7а литер 3, помещ. 5-н офис 104",
    phone: "+7 (812) 720-97-67, доб. 220",
    email: "info@aoec.ru",
    hours: "Пн-Пт: 9:00 - 18:00",
    isMain: true,
  },
];


const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          company: formData.company || undefined,
          message: formData.message || undefined,
          formType: "Заявка со страницы контактов",
        },
      });

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error("Error sending form:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз или свяжитесь с нами по телефону",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Контакты — АО «ЭК» | Санкт-Петербург"
        description="Свяжитесь с нами для заказа нефтепродуктов. Адрес: Санкт-Петербург, пер. Зеленков, д. 7а. ☎ +7 (812) 720-97-67, доб. 220, info@aoec.ru"
        keywords="контакты АО ЭК, телефон, адрес, заказать топливо"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
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
      <section className="py-12 border-b border-border section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-orange flex items-center justify-center glow-orange">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Основной телефон</p>
                <a href="tel:+78127209767,220" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  +7 (812) 720-97-67, доб. 220
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
      <section className="py-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Наши <span className="text-primary">офисы</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  office.isMain ? "bg-card/80 border-primary/40" : "bg-card/80 border-border"
                }`}
              >
                {office.isMain && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4">
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
      <section className="py-20 section-dark-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              Напишите <span className="text-primary">нам</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Заполните форму, и мы свяжемся с вами в течение рабочего дня
            </p>
            
            {submitted ? (
              <div className="text-center py-12 bg-card/80 backdrop-blur-sm rounded-3xl border border-border">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Компания</Label>
                    <Input 
                      id="company" 
                      placeholder="Название компании" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-secondary/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Сообщение *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш вопрос или запрос..." 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/30 border-border focus:border-primary text-foreground placeholder:text-muted-foreground resize-none" 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="w-full gradient-orange text-white font-semibold glow-orange"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contacts;