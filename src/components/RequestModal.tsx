import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RequestModalProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

export function RequestModal({ 
  trigger, 
  title = "Оставить заявку",
  description = "Заполните форму, и мы свяжемся с вами в ближайшее время"
}: RequestModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setOpen(false);
      setIsSubmitted(false);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    required 
                    className="bg-secondary/30 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                    className="bg-secondary/30 border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@company.ru" 
                  className="bg-secondary/30 border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Компания</Label>
                <Input 
                  id="company" 
                  placeholder="Название компании" 
                  className="bg-secondary/30 border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите ваш запрос..." 
                  rows={3}
                  className="bg-secondary/30 border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-orange text-white font-semibold glow-orange"
              >
                <Send className="w-4 h-4 mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
