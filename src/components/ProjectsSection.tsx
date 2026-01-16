import { ProjectCard } from "./ProjectCard";

const featuredProjects = [
  {
    title: "Proyecto Destacado 1",
    description:
      "Una aplicación web completa que permite a los usuarios gestionar sus tareas de manera eficiente con una interfaz intuitiva y moderna.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Proyecto 2",
    description:
      "Aplicación de e-commerce con carrito de compras, pagos integrados y panel de administración.",
    technologies: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Proyecto 3",
    description:
      "Dashboard interactivo para visualización de datos en tiempo real con gráficos dinámicos.",
    technologies: ["React", "D3.js", "Firebase"],
  },
  {
    title: "Proyecto 4",
    description:
      "API REST completa con autenticación JWT, documentación Swagger y tests automatizados.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Mis Proyectos
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-center mb-8">
            Otros Proyectos
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
