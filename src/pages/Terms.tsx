import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Условия использования — АО «ЭК»"
        description="Условия использования веб-сайта АО «ЭК». Правила, ограничения и юридическая информация."
        keywords="условия использования, правила сайта, пользовательское соглашение"
      />
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Правовая информация</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Условия <span className="text-primary">использования</span>
            </h1>
            <p className="text-muted-foreground mb-12">
              Последнее обновление: 23 января 2026 года
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящие Условия использования (далее — Условия) регулируют порядок 
                  использования веб-сайта aoec.ru (далее — Сайт), принадлежащего 
                  АО «ЭК» (далее — Компания). Используя Сайт, вы подтверждаете 
                  своё согласие с настоящими Условиями.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Интеллектуальная собственность</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Все материалы, размещённые на Сайте, включая тексты, графику, логотипы, 
                  изображения и программное обеспечение, являются собственностью Компании 
                  или её партнёров и защищены законодательством об интеллектуальной собственности. 
                  Копирование, распространение или использование материалов без письменного 
                  разрешения Компании запрещено.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Использование Сайта</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  При использовании Сайта запрещается:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Нарушать работу Сайта или серверов</li>
                  <li>Использовать автоматизированные средства для сбора информации</li>
                  <li>Размещать вредоносное программное обеспечение</li>
                  <li>Нарушать права третьих лиц</li>
                  <li>Использовать Сайт в незаконных целях</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Информация на Сайте</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Информация на Сайте носит ознакомительный характер и не является публичной 
                  офертой. Компания оставляет за собой право изменять информацию о товарах, 
                  услугах и ценах без предварительного уведомления. Для получения актуальной 
                  информации свяжитесь с нами напрямую.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Ограничение ответственности</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Компания не несёт ответственности за любые убытки, возникшие в результате 
                  использования или невозможности использования Сайта. Сайт предоставляется 
                  «как есть», без каких-либо гарантий. Компания не гарантирует бесперебойную 
                  работу Сайта и отсутствие ошибок.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Ссылки на сторонние ресурсы</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Сайт может содержать ссылки на сторонние веб-сайты. Компания не несёт 
                  ответственности за содержание, политику конфиденциальности или действия 
                  таких сайтов. Переход по ссылкам осуществляется на ваш собственный риск.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Изменение Условий</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Компания оставляет за собой право изменять настоящие Условия в любое время. 
                  Изменения вступают в силу с момента их публикации на Сайте. Продолжая 
                  использовать Сайт после внесения изменений, вы подтверждаете своё согласие 
                  с обновлёнными Условиями.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Применимое право</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящие Условия регулируются законодательством Российской Федерации. 
                  Все споры разрешаются в судебном порядке по месту нахождения Компании.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  По вопросам, связанным с использованием Сайта, вы можете обратиться 
                  по адресу электронной почты: <a href="mailto:info@aoec.ru" className="text-primary hover:underline">info@aoec.ru</a> 
                  или по телефону: <a href="tel:+78127209767" className="text-primary hover:underline">+7 (812) 720-97-67</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
