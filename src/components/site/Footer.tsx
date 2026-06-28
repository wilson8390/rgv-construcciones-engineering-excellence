import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground pt-16 pb-8">
      <div className="container-rgv grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RGV Construcciones" width={56} height={56} className="h-14 w-14 object-contain" />
            <div>
              <div className="font-display font-extrabold text-xl">RGV CONSTRUCCIONES</div>
              <div className="text-xs text-accent font-semibold tracking-widest uppercase">Ingeniería & Construcción</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 max-w-md leading-relaxed">
            Diseñamos, calculamos y ejecutamos proyectos industriales, comerciales y residenciales
            con los más altos estándares de calidad.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Red social"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-0.5"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-extrabold text-accent uppercase text-sm tracking-wider">Servicios</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#servicios" className="hover:text-accent transition-colors">Estructuras metálicas</a></li>
            <li><a href="#servicios" className="hover:text-accent transition-colors">Sistemas contra incendio</a></li>
            <li><a href="#servicios" className="hover:text-accent transition-colors">Instalaciones eléctricas</a></li>
            <li><a href="#servicios" className="hover:text-accent transition-colors">Proyectos eléctricos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-extrabold text-accent uppercase text-sm tracking-wider">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li><a href="https://wa.me/59168478109" className="flex items-center gap-2 hover:text-accent"><Phone className="size-4" /> 68478109</a></li>
            <li><a href="https://wa.me/59175992092" className="flex items-center gap-2 hover:text-accent"><Phone className="size-4" /> 75992092</a></li>
            <li><a href="mailto:rgv.construcciones.bo@gmail.com" className="flex items-start gap-2 hover:text-accent break-all"><Mail className="size-4 mt-0.5" /> rgv.construcciones.bo@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container-rgv mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-primary-foreground/65">
        <div>© {new Date().getFullYear()} RGV Construcciones · Todos los derechos reservados.</div>
        <div>Bolivia · Ingeniería · Construcción · Estructuras Metálicas</div>
      </div>
    </footer>
  );
}
