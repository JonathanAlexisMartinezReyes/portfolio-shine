import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Gitlab, Send, Mail } from "lucide-react";
import { toast } from "sonner";

// 1. IMPORTACIONES DE FIREBASE
// Traemos la base de datos (db) y las funciones para guardar datos
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jonamare" },
  { name: "GitHub", icon: Github, url: "https://github.com/JonathanMReyes" },
  { name: "GitLab", icon: Gitlab, url: "https://gitlab.com/JonathanMReyes" },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. ESTADOS PARA LOS CAMPOS (Aquí se guarda lo que escribe el usuario)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Función que actualiza el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. FUNCIÓN DE ENVÍO A FIREBASE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setIsSubmitting(true);

    try {
      // Intentamos guardar en la colección "contacts"
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(), // Guarda la fecha y hora del servidor
      });

      // Si todo sale bien:
      toast.success("¡Mensaje enviado con éxito! Te responderé pronto.");
      setFormData({ name: "", email: "", message: "" }); // Limpiamos el formulario

    } catch (error) {
      // Si algo falla:
      console.error("Error enviando a Firebase:", error);
      toast.error("Hubo un error al enviar. Por favor intenta de nuevo.");
    } finally {
      // Pase lo que pase, desbloqueamos el botón
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trabajemos Juntos
              <span className="block w-24 h-1 bg-primary rounded-full mt-4" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info de Contacto */}
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

              {/* Redes Sociales (Sin WhatsApp) */}
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

            {/* FORMULARIO CONECTADO */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft space-y-6"
            >
              <div className="space-y-2">
                <Input
                  type="text"
                  name="name" // Vital para el handleChange
                  placeholder="Nombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-muted/50 border-border focus:border-primary focus:bg-card transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  name="email" // Vital para el handleChange
                  placeholder="Correo Electrónico"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-muted/50 border-border focus:border-primary focus:bg-card transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message" // Vital para el handleChange
                  placeholder="Tu mensaje"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
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