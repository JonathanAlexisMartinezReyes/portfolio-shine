import { User, Rocket, Fingerprint } from "lucide-react";

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

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎯" },
  { name: "Java", icon: "☕" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
];

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Sobre Mí
              <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
            </h2>
          </div>

          {/* About Cards Grid */}
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

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-10">
              Mis Habilidades Técnicas
            </h3>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-3 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center text-3xl lg:text-4xl group-hover:scale-110 group-hover:shadow-hover group-hover:border-primary/30 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};