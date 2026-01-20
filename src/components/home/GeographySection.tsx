import { MapPin } from "lucide-react";
import russiaMap from "@/assets/russia-map.png";

const regions = [
  { name: "Москва", x: 22, y: 52 },
  { name: "Санкт-Петербург", x: 17, y: 42 },
  { name: "Краснодар", x: 20, y: 68 },
  { name: "Екатеринбург", x: 36, y: 50 },
  { name: "Новосибирск", x: 48, y: 55 },
  { name: "Владивосток", x: 88, y: 62 },
  { name: "Казань", x: 28, y: 50 },
  { name: "Нижний Новгород", x: 24, y: 50 },
  { name: "Самара", x: 29, y: 55 },
  { name: "Ростов-на-Дону", x: 22, y: 62 },
  { name: "Красноярск", x: 55, y: 50 },
  { name: "Тюмень", x: 40, y: 48 },
  { name: "Омск", x: 43, y: 52 },
  { name: "Челябинск", x: 36, y: 53 },
  { name: "Уфа", x: 33, y: 52 },
  { name: "Волгоград", x: 25, y: 58 },
  { name: "Пермь", x: 33, y: 46 },
  { name: "Иркутск", x: 62, y: 55 },
  { name: "Хабаровск", x: 85, y: 55 },
  { name: "Якутск", x: 75, y: 38 },
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
        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-border overflow-hidden">
          {/* Map visualization */}
          <div className="relative aspect-[16/9] min-h-[500px]">
            {/* Russia map background */}
            <img 
              src={russiaMap} 
              alt="Карта России" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            
            {/* Gradient overlay for better marker visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-card/40" />

            {/* Region markers */}
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="absolute group cursor-pointer z-10"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Pulse effect */}
                <div 
                  className="absolute inset-0 w-5 h-5 -translate-x-0.5 -translate-y-0.5 rounded-full bg-primary/40 animate-ping"
                  style={{ animationDelay: `${index * 150}ms`, animationDuration: '2s' }}
                />

                {/* Marker */}
                <div
                  className="relative w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-lg glow-orange group-hover:scale-150 transition-transform duration-300"
                >
                  <MapPin className="w-2.5 h-2.5 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-card/95 backdrop-blur-sm border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20">
                  <div className="text-foreground">{region.name}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-card/95" />
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 p-6 border-t border-border bg-card/50">
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
            <div key={stat.label} className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border card-hover">
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
