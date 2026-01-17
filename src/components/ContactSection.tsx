import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Gitlab, Send, Mail } from "lucide-react"; // Se quitó MessageCircle
import { toast } from "sonner";

// Se eliminó el objeto de WhatsApp de aquí
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jonamare" },
  { name: "GitHub", icon: Github, url: "https://github.com/JonathanMReyes" },
  { name: "GitLab", icon: Gitlab, url: "https://gitlab.com/JonathanMReyes" },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    setTimeout(() => {
      toast.success("¡Mensaje enviado correctamente!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trabajemos Juntos
              <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estoy interesado en oportunidades para colaborar en proyectos
                innovadores. Si tienes alguna propuesta, no dudes en contactarme.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:jonathanalexismr@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>jonathanalexismr@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-1 shadow-soft hover:shadow-hover transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft space-y-6"
            >
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Nombre"
                  required
                  className="h-12 bg-muted/50 border-border focus:border-primary focus:bg-card transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                  className="h-12 bg-muted/50 border-border focus:border-primary focus:bg-card transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Tu mensaje"
                  rows={5}
                  required
                  className="bg-muted/50 border-border focus:border-primary focus:bg-card transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full gap-2 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};