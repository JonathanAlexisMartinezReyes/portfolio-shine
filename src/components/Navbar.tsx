import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, Gitlab, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectamos si el usuario ha bajado más de 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LÓGICA DE COLORES DINÁMICOS ---
  // Si hay scroll (Fondo Café): Texto Blanco/Crema (earth-50) para contraste
  // Si NO hay scroll (Transparente): Texto normal del tema (foreground)
  const textColorClass = isScrolled ? "text-earth-50" : "text-foreground";
  const mutedTextClass = isScrolled ? "text-earth-200" : "text-muted-foreground";
  const hoverTextClass = isScrolled ? "hover:text-white" : "hover:text-primary";
  const logoDotClass = isScrolled ? "text-earth-400" : "text-primary"; // El punto se vuelve dorado/ocre

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-earth-900/95 backdrop-blur-md shadow-lg border-b border-earth-800" // AL BAJAR: Café Oscuro
          : "bg-transparent" // ARRIBA: Transparente
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO */}
          <a
            href="#inicio"
            className={`text-xl lg:text-2xl font-bold transition-colors ${textColorClass} hover:opacity-80`}
          >
            Dev Jonathan<span className={logoDotClass}>.</span>
          </a>

          {/* NAVEGACIÓN DE ESCRITORIO */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 ${mutedTextClass} ${hoverTextClass}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ICONOS SOCIALES (Escritorio) - Con tus enlaces reales */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://linkedin.com/in/jonamare"
              target="_blank"
              rel="noopener noreferrer"
              className={`${mutedTextClass} ${hoverTextClass} transition-all duration-300 hover:-translate-y-0.5`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JonathanMReyes"
              target="_blank"
              rel="noopener noreferrer"
              className={`${mutedTextClass} ${hoverTextClass} transition-all duration-300 hover:-translate-y-0.5`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://gitlab.com/JonathanMReyes"
              target="_blank"
              rel="noopener noreferrer"
              className={`${mutedTextClass} ${hoverTextClass} transition-all duration-300 hover:-translate-y-0.5`}
            >
              <Gitlab className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/524922600026"
              target="_blank"
              rel="noopener noreferrer"
              className={`${mutedTextClass} ${hoverTextClass} transition-all duration-300 hover:-translate-y-0.5`}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* BOTÓN MENÚ MÓVIL (Hamburguesa) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${textColorClass}`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MENÚ MÓVIL (Desplegable) */}
        {/* Forzamos fondo café siempre para legibilidad en móviles */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-earth-900/95 backdrop-blur-xl rounded-2xl mt-2 p-4 border border-earth-800 shadow-xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-earth-200 hover:text-white hover:bg-earth-800 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Iconos en menú móvil */}
              <div className="flex gap-6 pt-4 mt-2 border-t border-earth-800 px-4 justify-center">
                <a href="https://linkedin.com/in/jonamare" className="text-earth-200 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/JonathanAlexisMartinezReyes?tab=repositories" className="text-earth-200 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://gitlab-ingsoftware.uaz.edu.mx/JonathanMReyes" className="text-earth-200 hover:text-white">
                  <Gitlab className="w-6 h-6" />
                </a>
                <a href="https://wa.me/524922600026" className="text-earth-200 hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};