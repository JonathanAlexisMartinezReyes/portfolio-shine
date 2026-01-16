import React from "react";
import { Github, ExternalLink, Play, Lock } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Sistemas de Gestión Judicial (TJAEZ)",
    description:
      "Lideré el desarrollo full-stack de los sistemas SICAAP y SALG. Digitalización completa de procesos judiciales, reduciendo tiempos de gestión y aumentando la seguridad.",
    tags: ["Django", "Python", "Docker", "MySQL", "AWS"],
    links: {
      demo: "https://youtube.com/TU_LINK_AQUI",
      repo: null,
    },
    private: true,
  },
  {
    title: "Predicción de Riesgos Médicos (ML)",
    description:
      "Modelo de Machine Learning para identificar riesgos de aborto espontáneo. Análisis de patrones clínicos con algoritmos de clasificación y ciencia de datos.",
    tags: ["Python", "Scikit-learn", "Pandas", "Data Science"],
    links: {
      demo: "#",
      repo: "https://gitlab-ingsoftware.uaz.edu.mx/JonathanMReyes",
    },
    private: false,
  },
  {
    title: "Portafolio Profesional",
    description:
      "Diseño y desarrollo de mi portafolio personal. Enfocado en UI minimalista, performance y buenas prácticas de arquitectura de componentes modernos.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: {
      demo: "#",
      repo: "https://github.com/JonathanMReyes/portfolio-shine",
    },
    private: false,
  },
];

export const ProjectsSection = () => {
  const pluginAutoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const pluginFade = React.useRef(Fade());

  return (
    // AJUSTE 1: py-12 (antes era 32). Esto elimina el hueco gigante arriba.
    <section id="proyectos" className="py-12 lg:py-16 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* AJUSTE 2: Menos margen abajo del título (mb-6) */}
        <div className="mb-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Proyectos Destacados
            <span className="block w-16 h-1 bg-primary rounded-full mt-2 mx-auto lg:mx-0" />
          </h2>
          <p className="mt-2 text-muted-foreground text-base">
            Innovación técnica y soluciones reales.
          </p>
        </div>

        {/* AJUSTE 3: Max-width reducido (max-w-3xl) para que la tarjeta sea más compacta visualmente */}
        <Carousel
          plugins={[pluginAutoplay.current, pluginFade.current]}
          className="w-full max-w-3xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full">
                {/* Padding interno reducido para evitar cortes */}
                <div className="h-full perspective-1000 px-1 py-4"> 
                  <Card 
                    className="
                      flex flex-col h-full min-h-[280px] /* Altura mínima reducida */
                      bg-white/30 backdrop-blur-xl border border-white/40 
                      shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                      animate-in fade-in zoom-in-95 duration-700
                      transition-all duration-500 ease-out
                      hover:-translate-y-1 hover:shadow-lg
                      hover:border-primary/30
                      dark:bg-black/20 dark:border-white/10
                      group rounded-2xl overflow-hidden
                    "
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                    <CardHeader className="relative pb-2"> {/* Menos padding abajo */}
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-white/40 backdrop-blur-md rounded-lg text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          {project.private ? <Lock size={20} /> : <Github size={20} />}
                        </div>
                        <Badge variant="outline" className="text-xs bg-white/20 backdrop-blur-md border-white/20 text-muted-foreground">
                           {index + 1} / {projects.length}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground/90 font-medium line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 py-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="px-2 py-0.5 text-xs bg-white/40 backdrop-blur-sm text-foreground/80 hover:bg-white/60 border border-white/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="gap-3 pt-2 pb-6">
                      {project.links.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 border-primary/20 bg-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 h-9"
                          asChild
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            {project.private ? <Play size={14} /> : <ExternalLink size={14} />}
                            <span className="text-xs">{project.private ? "Ver Video" : "Demo Live"}</span>
                          </a>
                        </Button>
                      )}

                      {project.links.repo ? (
                        <Button
                          size="sm"
                          className="flex-1 gap-2 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 h-9"
                          asChild
                        >
                          <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                            <Github size={14} />
                            <span className="text-xs">Código</span>
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="flex-1 gap-2 opacity-80 cursor-not-allowed bg-muted/50 text-muted-foreground h-9"
                        >
                          <Lock size={14} />
                          <span className="text-xs">Privado</span>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex -left-12 border-none bg-white/10 hover:bg-white/30 backdrop-blur-md text-primary w-8 h-8" />
          <CarouselNext className="hidden md:flex -right-12 border-none bg-white/10 hover:bg-white/30 backdrop-blur-md text-primary w-8 h-8" />
        </Carousel>
      </div>
    </section>
  );
};