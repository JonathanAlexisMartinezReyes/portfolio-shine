export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            Sobre mí
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                ¡Hola! Soy un desarrollador apasionado por crear experiencias
                digitales que viven en internet. Mi interés en el desarrollo
                web comenzó cuando decidí crear mi primer sitio web.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Actualmente, me enfoco en construir productos accesibles,
                inclusivos y de alto rendimiento. Me encanta aprender nuevas
                tecnologías y resolver problemas complejos.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Aquí hay algunas tecnologías con las que he trabajado
                recientemente:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Tailwind CSS",
                  "Next.js",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-0 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
