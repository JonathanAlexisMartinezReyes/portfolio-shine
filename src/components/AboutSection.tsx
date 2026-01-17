import React from "react";
import { User, Rocket, Fingerprint } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// --- IMPORTACIÓN DE ICONOS ---
// Ajusta los nombres de archivo si son diferentes en tu carpeta
import pythonIcon from "../assets/icons/python.png";
import djangoIcon from "../assets/icons/django.png";
import javaIcon from "../assets/icons/java.png";
import mysqlIcon from "../assets/icons/mysql.png";
import mongoIcon from "../assets/icons/mongodb.png";
import dockerIcon from "../assets/icons/docker.png";
import awsIcon from "../assets/icons/aws.png";
import gitIcon from "../assets/icons/git.png";

const aboutCards = [
  {
    icon: User,
    title: "¿Quién Soy?",
    description:
      "Ingeniero de Software en formación con sólida experiencia práctica en el desarrollo de sistemas gubernamentales seguros y escalables. Galardonado por el TJAEZ por la digitalización de procesos judiciales.",
  },
  {
    icon: Rocket,
    title: "Mi Objetivo",
    description:
      "Busco aportar soluciones técnicas robustas en equipos de desarrollo ágil, priorizando la escalabilidad y la seguridad de datos sensibles.",
  },
  {
    icon: Fingerprint,
    title: "Investigación",
    description:
      "Actualmente investigando aplicaciones de Machine Learning en el sector salud, desarrollando modelos predictivos para identificar riesgos médicos.",
  },
];

// Actualizamos el array para usar las variables importadas
const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "Django", icon: djangoIcon },
  { name: "Java", icon: javaIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Git", icon: gitIcon },
];

export const AboutSection = () => {
  // Configuración para movimiento fluido infinito (speed: 1)
  const plugin = React.useRef(
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false,
      stopOnMouseEnter: true, // Se detiene suave si pones el mouse
    })
  );

  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Título de Sección */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Sobre Mí
              <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
            </h2>
          </div>

          {/* Tarjetas de Información (Estáticas) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className="group bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft hover-lift cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carrusel de Habilidades (Fluido) */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-10">
              Mis Habilidades Técnicas
            </h3>

            <div className="w-full px-4 overflow-hidden">
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {/* Duplicamos la lista 3 veces para asegurar el efecto infinito sin cortes */}
                  {[...skills, ...skills, ...skills].map((skill, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                    >
                      <div className="group flex flex-col items-center gap-3 py-4 select-none">
                        {/* Contenedor del icono */}
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center group-hover:scale-110 group-hover:shadow-hover group-hover:border-primary/30 transition-all duration-300 p-3">
                          {/* CAMBIO: Renderizamos la imagen PNG */}
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                          />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};