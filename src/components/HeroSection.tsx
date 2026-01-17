import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Server, CloudCog, ShieldCheck } from "lucide-react";

// --- IMPORTACIÓN DE LA FOTO ---
import profileImage from "../assets/images/cuerpo_completo.jpeg"; 

// Definimos los delays exactos para que el brillo coincida con el giro del radar
const radarSkills = [
  {
    icon: Server,
    label: "Backend",
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", 
    highlightDelay: "0s",
  },
  {
    icon: CloudCog,
    label: "Cloud Arch",
    // AJUSTE RESPONSIVO: En móvil más afuera (bottom-10%), en desktop como estaba antes (bottom-20%)
    position: "bottom-[10%] right-[5%] md:bottom-[20%] md:right-[10%]", 
    highlightDelay: "1.5s",
  },
  {
    icon: ShieldCheck,
    label: "QA & Sec",
    // AJUSTE RESPONSIVO: En móvil más afuera (bottom-10%), en desktop como estaba antes (bottom-20%)
    position: "bottom-[10%] left-[5%] md:bottom-[20%] md:left-[10%]", 
    highlightDelay: "2.5s",
  },
];

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrollador Backend & Full Stack";
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
      className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-20 lg:pt-0"
    >
      {/* Estilos para la animación del brillo (Flash) */}
      <style>{`
        @keyframes radar-flash {
          0%, 100% { 
            background-color: hsla(var(--card), 0.8); 
            color: hsl(var(--primary)); 
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          }
          10%, 20% { 
            background-color: hsl(var(--primary)); 
            color: hsl(var(--primary-foreground)); 
            transform: scale(1.15); 
            box-shadow: 0 0 25px hsl(var(--primary) / 0.6);
            border-color: transparent;
          }
        }
        .animate-radar-flash {
          animation: radar-flash 4s infinite;
        }
      `}</style>

      {/* Fondos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Columna de Texto (Izquierda) */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0 z-20">
            <p className="text-muted-foreground text-lg mb-3 animate-fade-up">
              Hola Mundo, Soy Jonathan Alexis
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up animation-delay-100">
              <span className="text-gradient">Ingeniero de Software y</span>
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
              Experiencia en el desarrollo de sistemas seguros y escalables.
              Enfocado en Python, Django, Docker y AWS.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up animation-delay-300">
              {/* BOTÓN DESCARGAR CV (Actualizado a CV_JAMR.pdf) */}
              <Button
                size="lg"
                asChild
                className="group rounded-full px-8 gap-2 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                {/* href apunta a la carpeta public automáticamente. 
                   download="nombre..." es el nombre que se le pondrá al archivo cuando se descargue 
                */}
                <a href="/CV_JAMR.pdf" download="CV_Jonathan_Martinez.pdf">
                  <Download className="w-4 h-4" />
                  Descargar CV
                </a>
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

          {/* Columna Visual (Derecha) - COMPOSICIÓN GEOMÉTRICA */}
          <div className="flex-1 flex items-center justify-center lg:justify-end order-1 lg:order-2 animate-scale-in animation-delay-200 relative min-h-[450px]">
            
            {/* Contenedor relativo maestro de la composición */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mr-0 lg:mr-10">
              
              {/* 1. EL RADAR (Base Centrada) */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Límite visual del radar */}
                <div className="w-full h-full rounded-full border border-primary/10 relative overflow-hidden">
                    
                    {/* Haz de Luz (Scanner) */}
                    <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
                        <div className="w-full h-1/2 bg-gradient-to-l from-transparent via-transparent to-primary/20 opacity-0" />
                        <div className="w-full h-1/2 bg-gradient-to-r from-transparent via-primary/5 to-primary/30 border-b border-primary/40 blur-sm" />
                    </div>

                    {/* Ondas internas */}
                    <div className="absolute inset-8 rounded-full border-2 border-primary/5 animate-[ping_3s_ease-in-out_infinite]" />
                    <div className="absolute inset-20 rounded-full border-2 border-primary/10 animate-[ping_3s_ease-in-out_infinite] animation-delay-500" />
                    
                    {/* Centro exacto del radar */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* Iconos distribuidos en el radar */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {radarSkills.map((skill, index) => (
                    <div
                        key={index}
                        className={`absolute ${skill.position} flex flex-col items-center gap-2 z-10`}
                    >
                        {/* El icono con la animación de flash sincronizada */}
                        <div 
                            className="w-10 h-10 md:w-12 md:h-12 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/30 shadow-soft text-primary transition-all duration-300 animate-radar-flash"
                            style={{ animationDelay: skill.highlightDelay }}
                        >
                            <skill.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        
                        {/* Etiqueta de texto */}
                        <span className="text-[10px] md:text-xs font-semibold text-primary/80 bg-card/60 px-2 py-0.5 rounded-full border border-primary/5">
                            {skill.label}
                        </span>
                    </div>
                    ))}
                </div>
              </div>

              {/* 2. LA FOTO (Posicionada Estratégicamente) */}
              <div 
                className="
                  absolute z-20
                  /* MÓVIL: Centrado en el radar */
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  /* ESCRITORIO: Desplazado a la izquierda */
                  lg:top-auto lg:bottom-1/2 lg:translate-y-0 lg:-translate-x-[250%] lg:mb-8
                "
              >
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-[4px] border-card shadow-2xl bg-earth-100 relative group">
                  {/* Brillo interior */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full z-10" />
                  
                  {/* FOTO DE PERFIL (Variable importada) */}
                  <img 
                    src={profileImage} 
                    alt="Jonathan Alexis"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Etiqueta flotante */}
                <div className="absolute -right-4 bottom-4 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full shadow-lg border-2 border-card animate-bounce hidden md:block z-30">
                    Dev
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};