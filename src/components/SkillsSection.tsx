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
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            Stack Tecnológico
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="card-gradient rounded-lg p-6 border border-border hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};