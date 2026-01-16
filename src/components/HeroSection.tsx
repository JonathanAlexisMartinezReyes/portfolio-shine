import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const techIcons = [
  { icon: "JS", delay: 0, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { icon: "⚛️", delay: 200, position: "bottom-[15%] right-[-5%]" },
  { icon: "🐍", delay: 400, position: "bottom-[15%] left-[-5%]" },
];

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrollador Web";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-20"
    >
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="text-muted-foreground text-lg mb-3 animate-fade-up">
              Hola Mundo, Soy Esteban
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up animation-delay-100">
              <span className="text-gradient">Ingeniero en Sistemas y</span>
              <br />
              <span className="text-foreground">
                {displayText}
                <span
                  className={`border-r-2 border-primary ml-1 ${
                    isTypingComplete ? "animate-blink-cursor" : ""
                  }`}
                >
                  &nbsp;
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up animation-delay-200">
              Apasionado por crear soluciones digitales innovadoras y funcionales
              que impacten positivamente al usuario final.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up animation-delay-300">
              <Button
                size="lg"
                className="group rounded-full px-8 gap-2 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full px-8 gap-2 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="#contacto">
                  Contáctame
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image with Orbit Icons */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-secondary shadow-hover">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Orbiting Icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className={`absolute ${tech.position} w-12 h-12 md:w-14 md:h-14 bg-card rounded-full flex items-center justify-center border border-secondary shadow-soft animate-float z-20`}
                  style={{ animationDelay: `${tech.delay}ms` }}
                >
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    {tech.icon}
                  </span>
                </div>
              ))}

              {/* Decorative ring */}
              <div className="absolute inset-0 -m-4 rounded-full border border-dashed border-secondary/50 animate-[spin_30s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
