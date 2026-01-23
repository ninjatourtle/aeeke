import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";
import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Политика конфиденциальности — АО Энерджи Констракшн"
        description="Политика обработки и защиты персональных данных пользователей сайта АО Энерджи Констракшн."
        keywords="политика конфиденциальности, персональные данные, защита данных"
      />
      <section className="pt-32 pb-20 section-dark-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Правовая информация</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Политика <span className="text-primary">конфиденциальности</span>
            </h1>
            <p className="text-muted-foreground mb-12">
              Последнее обновление: 23 января 2026 года
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                  ООО «Энерджи Констракшн» (далее — Компания) персональных данных пользователей 
                  веб-сайта aoec.ru (далее — Сайт). Используя Сайт, вы соглашаетесь с условиями 
                  настоящей Политики.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Сбор персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Компания собирает следующие персональные данные:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Имя и фамилия</li>
                  <li>Контактный телефон</li>
                  <li>Адрес электронной почты</li>
                  <li>Наименование организации</li>
                  <li>Иная информация, добровольно предоставленная пользователем</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Цели обработки данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Персональные данные обрабатываются в следующих целях:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Обработка заявок и запросов пользователей</li>
                  <li>Связь с пользователями для предоставления консультаций</li>
                  <li>Направление коммерческих предложений</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Выполнение требований законодательства РФ</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Защита данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Компания принимает необходимые организационные и технические меры для защиты 
                  персональных данных от неправомерного или случайного доступа, уничтожения, 
                  изменения, блокирования, копирования, распространения, а также от иных 
                  неправомерных действий третьих лиц.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Передача данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Компания не передаёт персональные данные третьим лицам, за исключением случаев, 
                  предусмотренных законодательством Российской Федерации, а также случаев, когда 
                  передача необходима для выполнения обязательств перед пользователем.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Права пользователей</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Пользователь имеет право:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Получить информацию об обработке своих персональных данных</li>
                  <li>Требовать уточнения, блокирования или уничтожения данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card/80 border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  По вопросам, связанным с обработкой персональных данных, вы можете обратиться 
                  по адресу электронной почты: <a href="mailto:info@aoec.ru" className="text-primary hover:underline">info@aoec.ru</a> 
                  или по телефону: <a href="tel:+78127209767,220" className="text-primary hover:underline">+7 (812) 720-97-67, доб. 220</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
