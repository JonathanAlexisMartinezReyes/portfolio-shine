import { Github, ExternalLink, Play, Lock } from "lucide-react";
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

const projects = [
  {
    title: "Sistemas de Gestión Judicial (TJAEZ)",
    description:
      "Lideré el desarrollo full-stack de los sistemas SICAAP y SALG para el Tribunal de Justicia Administrativa. Digitalización completa de procesos judiciales, reduciendo tiempos de gestión y aumentando la seguridad de datos sensibles.",
    tags: ["Django", "Python", "Docker", "MySQL", "AWS"],
    links: {
      demo: "https://youtube.com/TU_LINK_AQUI", // ¡PON AQUÍ TU LINK DE YOUTUBE!
      repo: null, // null indica que es privado
    },
    private: true,
  },
  {
    title: "Predicción de Riesgos Médicos (ML)",
    description:
      "Investigación y desarrollo de un modelo de Machine Learning para identificar riesgos de aborto espontáneo. Análisis de patrones clínicos utilizando algoritmos de clasificación y bibliotecas de ciencia de datos.",
    tags: ["Python", "Scikit-learn", "Pandas", "Data Science"],
    links: {
      demo: "#", // Si tienes un paper o PDF, ponlo aquí
      repo: "https://gitlab-ingsoftware.uaz.edu.mx/JonathanMReyes", // Tu GitLab general o el repo específico
    },
    private: false,
  },
  {
    title: "Portafolio Profesional",
    description:
      "Diseño y desarrollo de mi portafolio personal utilizando tecnologías modernas de frontend. Enfocado en UI minimalista, performance y buenas prácticas de arquitectura de componentes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: {
      demo: "#",
      repo: "https://github.com/JonathanMReyes/portfolio-shine", // Asumiendo que este lo harás público
    },
    private: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Proyectos Destacados
            <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Una selección de mis trabajos más recientes en desarrollo web y ciencia de datos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.private ? <Lock size={24} /> : <Github size={24} />}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3 pt-6">
                {/* Botón de Demo / Video */}
                {project.links.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                    asChild
                  >
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.private ? <Play size={16} /> : <ExternalLink size={16} />}
                      {project.private ? "Ver Video" : "Demo Live"}
                    </a>
                  </Button>
                )}

                {/* Botón de Código */}
                {project.links.repo ? (
                  <Button
                    size="sm"
                    className="flex-1 gap-2 shadow-sm"
                    asChild
                  >
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="flex-1 gap-2 opacity-80 cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted"
                  >
                    <Lock size={16} />
                    Privado
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};