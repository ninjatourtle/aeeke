import { MapPin } from "lucide-react";

const regions = [
  { name: "Москва и МО", x: 42, y: 35 },
  { name: "Санкт-Петербург", x: 36, y: 28 },
  { name: "Краснодар", x: 38, y: 48 },
  { name: "Екатеринбург", x: 58, y: 32 },
  { name: "Новосибирск", x: 72, y: 35 },
  { name: "Владивосток", x: 92, y: 42 },
  { name: "Казань", x: 48, y: 34 },
  { name: "Нижний Новгород", x: 44, y: 33 },
  { name: "Самара", x: 50, y: 38 },
  { name: "Ростов-на-Дону", x: 40, y: 45 },
  { name: "Красноярск", x: 78, y: 32 },
  { name: "Тюмень", x: 62, y: 30 },
];

export function GeographySection() {
  return (
    <section className="py-24 section-dark-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            География <span className="text-primary">поставок</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Осуществляем поставки нефтепродуктов по всей территории России —
            от Калининграда до Владивостока
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border p-8 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Map visualization */}
          <div className="relative aspect-[2/1] min-h-[400px]">
            {/* Russia outline (simplified) */}
            <svg
              viewBox="0 0 100 60"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Simplified Russia shape */}
              <path
                d="M5,35 Q10,20 30,25 Q50,15 70,25 Q90,20 98,30 Q95,40 85,45 Q70,50 50,48 Q30,50 15,45 Q5,42 5,35 Z"
                fill="hsl(var(--secondary))"
                stroke="hsl(var(--border))"
                strokeWidth="0.3"
              />
            </svg>

            {/* Region markers */}
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="absolute group cursor-pointer"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Pulse effect */}
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/40 animate-ping" />

                {/* Marker */}
                <div
                  className="relative w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-lg glow-orange group-hover:scale-125 transition-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MapPin className="w-2.5 h-2.5 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  {region.name}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary glow-orange" />
              <span className="text-sm text-muted-foreground">
                Основные точки присутствия
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-primary/50" />
              <span className="text-sm text-muted-foreground">
                Маршруты доставки
              </span>
            </div>
          </div>
        </div>

        {/* Stats below map */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { value: "45", label: "регионов" },
            { value: "150+", label: "городов" },
            { value: "24ч", label: "срок доставки" },
            { value: "99%", label: "доставок в срок" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
