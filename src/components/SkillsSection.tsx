import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const skills = [
  {
    category: "Lenguajes & Frameworks",
    items: ["Python (Avanzado)", "Java", "Django", "REST APIs"],
    icon: "💻",
  },
  {
    category: "Bases de Datos & Cloud",
    items: ["MySQL (Relacional)", "MongoDB (NoSQL)", "AWS", "Railway"],
    icon: "☁️",
  },
  {
    category: "DevOps & Herramientas",
    items: ["Docker", "Git", "GitLab", "Premiere Pro / CapCut"],
    icon: "🛠️",
  },
];

export const SkillsSection = () => {
  // Configuración de AutoScroll:
  // speed: 1 (velocidad normal), puedes subir a 2 si lo quieres más rápido
  const plugin = React.useRef(
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false,
      stopOnMouseEnter: true // Se detiene suavemente si pones el mouse encima (opcional)
    })
  );

  return (
    <section id="skills" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            Stack Tecnológico
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>
        </div>

        {/* Carrusel Infinito */}
        <div className="w-full">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true, // Vital para el efecto infinito
              dragFree: true, // Permite arrastrar libremente sin "saltos"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {/* Renderizamos las skills múltiples veces para asegurar que cubran la pantalla y el loop sea invisible */}
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <div className="card-gradient rounded-lg p-6 border border-border hover:border-primary/50 transition-colors h-full flex flex-col justify-between group">
                      <div>
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {skill.category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {skill.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full min-w-[6px]" />
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};