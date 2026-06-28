import { Reveal } from "./Reveal";
import { HardHat, Flame, Plug, FileText, Check, ArrowRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";

const services = [
  {
    Icon: HardHat,
    title: "Diseño, cálculo y fabricación de estructuras metálicas",
    img: g1,
    items: [
      "Diseño y cálculo estructural",
      "Cubiertas metálicas, parabólicas, una y dos aguas",
      "Tinglados, galpones comerciales e industriales",
      "Pérgolas, fabricación, montaje y desmontaje",
    ],
  },
  {
    Icon: Flame,
    title: "Sistemas de alarma contra incendio",
    img: g3,
    items: [
      "Panel central · configuración y programación",
      "Detectores de humo y temperatura",
      "Estaciones manuales y sirenas estroboscópicas",
      "Cable certificado · manual de operación",
    ],
  },
  {
    Icon: Plug,
    title: "Instalaciones eléctricas",
    img: g2,
    items: [
      "Edificios · medidores monofásicos y trifásicos",
      "Tableros, tomacorrientes, iluminación LED",
      "Puesta a tierra, pararrayos, automatización",
      "Cámaras, videoporteros, grupos electrógenos",
    ],
  },
  {
    Icon: FileText,
    title: "Elaboración de proyectos eléctricos",
    img: g4,
    items: [
      "Planos eléctricos y diagramas unifilares",
      "Memorias de cálculo · planillas de carga",
      "Especificaciones técnicas, APU y presupuesto",
      "Visado en la SIB y Colegio de Ingenieros",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-secondary">
      <div className="container-rgv">
        <Reveal className="max-w-3xl">
          <span className="inline-block text-xs md:text-sm font-bold text-accent-dark tracking-widest uppercase">Servicios</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Soluciones integrales en <span className="text-gradient-brand">ingeniería</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Capacidad técnica certificada para proyectos industriales, comerciales y residenciales.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group h-full rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/40 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                    <s.Icon className="size-6" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-extrabold text-white text-xl md:text-2xl leading-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="p-6 md:p-7">
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm md:text-[15px] text-muted-foreground">
                        <Check className="size-4 mt-0.5 text-accent-dark flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent-dark group/link"
                  >
                    Consultar este servicio
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
