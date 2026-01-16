import { useState, useEffect } from "react";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold text-gradient font-mono"
          >
            {"<Dev />"}
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 link-underline ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-primary font-mono text-xs mr-1">
                    0{index + 1}.
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary/10 transition-all duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </nav>
  );
};
