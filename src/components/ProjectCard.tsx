import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  if (featured) {
    return (
      <div className="relative grid md:grid-cols-12 gap-4 items-center group">
        {/* Image */}
        <div className="md:col-span-7 relative rounded-lg overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl">🖼️</span>
            )}
          </div>
          <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="md:col-span-5 md:absolute md:right-0 md:text-right z-10">
          <p className="text-primary font-mono text-sm mb-2">
            Proyecto Destacado
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>

          <div className="bg-secondary p-6 rounded-lg card-shadow mb-4">
            <p className="text-muted-foreground">{description}</p>
          </div>

          <ul className="flex flex-wrap justify-end gap-3 mb-4">
            {technologies.map((tech) => (
              <li key={tech} className="text-sm font-mono text-muted-foreground">
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex justify-end gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-gradient rounded-lg p-6 hover-lift group border border-border">
      <div className="flex justify-between items-start mb-4">
        <div className="text-primary">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <ul className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <li key={tech} className="text-xs font-mono text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
