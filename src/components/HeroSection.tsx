import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrollador Web";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up opacity-0">
            ¡Hola! Mi nombre es
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up opacity-0 animation-delay-100">
            Tu Nombre Aquí
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-up opacity-0 animation-delay-200">
            <span className="text-gradient">{displayText}</span>
            <span className="border-r-2 border-primary animate-pulse ml-1">
              &nbsp;
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-fade-up opacity-0 animation-delay-300">
            Creo experiencias digitales excepcionales. Especializado en
            construir aplicaciones web modernas, accesibles y de alto
            rendimiento.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 animation-delay-400">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover-lift"
            >
              Ver proyectos
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-600">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
