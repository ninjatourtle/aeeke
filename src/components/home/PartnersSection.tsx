const partners = [
  { name: "ГАЗПРОМ НЕФТЬ", logo: "ГН" },
  { name: "ЛУКОЙЛ", logo: "ЛК" },
  { name: "РОСНЕФТЬ", logo: "РН" },
  { name: "ТАТНЕФТЬ", logo: "ТН" },
  { name: "СУРГУТНЕФТЕГАЗ", logo: "СНГ" },
  { name: "БАШНЕФТЬ", logo: "БН" },
  { name: "СЛАВНЕФТЬ", logo: "СН" },
  { name: "РУССНЕФТЬ", logo: "РС" },
];

export function PartnersSection() {
  return (
    <section className="py-24 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-gradient-gold">партнёры</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Работаем напрямую с крупнейшими нефтеперерабатывающими заводами России
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-center">
                {/* Placeholder logo */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">
              Официальный дистрибьютор ведущих НПЗ России
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
