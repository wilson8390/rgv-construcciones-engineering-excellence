import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-card border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-rgv flex items-center justify-between h-32 md:h-40">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="RGV Construcciones"
            width={288}
            height={144}
            className="h-28 w-56 md:h-36 md:w-72 object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight hidden sm:block">
            <div className={`font-display font-extrabold text-base md:text-lg ${scrolled ? "text-primary" : "text-white drop-shadow"}`}>
              RGV
            </div>
            <div className={`text-[10px] md:text-xs font-semibold tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/85"}`}>
              CONSTRUCCIONES
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-colors
                ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-accent"}
                after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-accent
                after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-soft hover:bg-accent-dark transition-all hover:-translate-y-0.5"
          >
            Cotizar
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-background border-t border-border`}
      >
        <nav className="container-rgv py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-md text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-accent-foreground font-bold shadow-soft"
          >
            Solicitar Cotización
          </a>
        </nav>
      </div>
    </header>
  );
}
