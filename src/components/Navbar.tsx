import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, Gitlab } from "lucide-react"; // Se quitó MessageCircle

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LÓGICA DE COLORES DINÁMICOS ---
  const textColorClass = isScrolled ? "text-earth-50" : "text-foreground";
  const mutedTextClass = isScrolled ? "text-earth-200" : "text-muted-foreground";
  const hoverTextClass = isScrolled ? "hover:text-white" : "hover:text-primary";
  const logoDotClass = isScrolled ? "text-earth-400" : "text-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-earth-900/95 backdrop-blur-md shadow-lg border-b border-earth-800"
          : "bg-transparent"
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

          {/* ICONOS SOCIALES (Escritorio) - Sin WhatsApp */}
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
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
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

        {/* MENÚ MÓVIL */}
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
              
              {/* Iconos en menú móvil - Sin WhatsApp */}
              <div className="flex gap-6 pt-4 mt-2 border-t border-earth-800 px-4 justify-center">
                <a href="https://linkedin.com/in/jonamare" className="text-earth-200 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/JonathanMReyes" className="text-earth-200 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://gitlab.com/JonathanMReyes" className="text-earth-200 hover:text-white">
                  <Gitlab className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};