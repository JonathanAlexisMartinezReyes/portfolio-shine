import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Email", icon: Mail, url: "mailto:tu@email.com" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono mb-4">04. ¿Qué sigue?</p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¡Hablemos!
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas
            una pregunta, una propuesta de proyecto, o simplemente quieras
            saludar, ¡estaré encantado de responderte!
          </p>

          <a
            href="mailto:tu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 animate-pulse-glow"
          >
            <Mail className="w-5 h-5" />
            Enviar mensaje
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
