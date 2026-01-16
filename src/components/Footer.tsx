export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Diseñado y desarrollado por{" "}
            <span className="text-primary font-medium">Esteban</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
