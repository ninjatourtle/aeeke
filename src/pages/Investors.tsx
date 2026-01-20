import { Layout } from "@/components/layout/Layout";
import { TrendingUp, FileText, Users, Building, Download, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const financials = [
  { label: "Выручка 2024", value: "12.5 млрд ₽", change: "+18%" },
  { label: "EBITDA", value: "2.1 млрд ₽", change: "+22%" },
  { label: "Чистая прибыль", value: "1.4 млрд ₽", change: "+15%" },
  { label: "Объём поставок", value: "500 000 т", change: "+12%" },
];

const reports = [
  { title: "Годовой отчёт 2024", date: "Март 2025", type: "PDF" },
  { title: "Финансовая отчётность Q4 2024", date: "Январь 2025", type: "PDF" },
  { title: "Финансовая отчётность Q3 2024", date: "Октябрь 2024", type: "PDF" },
  { title: "Годовой отчёт 2023", date: "Март 2024", type: "PDF" },
  { title: "ESG-отчёт 2024", date: "Апрель 2025", type: "PDF" },
];

const governance = [
  {
    title: "Совет директоров",
    description: "7 членов совета, включая 3 независимых директоров",
  },
  {
    title: "Комитет по аудиту",
    description: "Контроль финансовой отчётности и внутреннего аудита",
  },
  {
    title: "Комитет по вознаграждениям",
    description: "Определение политики вознаграждения руководства",
  },
  {
    title: "Комитет по рискам",
    description: "Управление рисками и внутренний контроль",
  },
];

const Investors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Инвесторам</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Финансовая <span className="text-primary">прозрачность</span> и устойчивый рост
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Информация для инвесторов, акционеров и аналитиков. 
              Финансовые показатели, отчётность и корпоративное управление.
            </p>
          </div>
        </div>
      </section>

      {/* Key Financials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Ключевые <span className="text-primary">показатели</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financials.map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{item.value}</div>
                <p className="text-muted-foreground mb-2">{item.label}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Download */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Отчёты и <span className="text-primary">документы</span>
              </h2>
              <p className="text-muted-foreground">
                Скачайте финансовую отчётность и корпоративные документы
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.title}
                className="flex items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  {report.type}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Корпоративное <span className="text-primary">управление</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {governance.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Связь с IR-отделом
            </h2>
            <p className="text-muted-foreground mb-8">
              По вопросам инвестиций и финансовой отчётности обращайтесь в отдел по работе с инвесторами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-gold text-navy-dark font-semibold">
                ir@energyconstruction.ru
              </Button>
              <Button size="lg" variant="outline">
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
