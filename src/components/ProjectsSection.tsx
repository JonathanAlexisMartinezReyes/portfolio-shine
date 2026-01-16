import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Registro de control de centros SICT",
    description:
      "Sistema de registro de llamadas e incidencias de licencias nacionales e internacionales. Una solución completa para la gestión y seguimiento de casos.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "PostgreSQL"],
    color: "from-primary/20 to-secondary",
  },
  {
    title: "Página Web Personal",
    description:
      "Página web responsiva que muestra mis conocimientos de desarrollo y perfil profesional. Diseño moderno y optimizado para todos los dispositivos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "from-secondary to-muted",
  },
  {
    title: "Desarrollo Microservicios",
    description:
      "Desarrollo de microservicios usando Spring Boot y arquitectura REST (API REST). Backend escalable y mantenible para aplicaciones empresariales.",
    technologies: ["Java", "Spring Boot", "Oracle"],
    color: "from-muted to-primary/10",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Proyectos
              <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Preview */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <Folder className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-500" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
