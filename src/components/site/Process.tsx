import { Reveal } from "./Reveal";
import { Search, PencilRuler, Calculator, Hammer, Plug, CheckCircle2 } from "lucide-react";

const steps = [
  { n: "01", Icon: Search, t: "Inspección", d: "Visita técnica y evaluación del sitio." },
  { n: "02", Icon: PencilRuler, t: "Diseño", d: "Planos, cálculos y memoria técnica." },
  { n: "03", Icon: Calculator, t: "Presupuesto", d: "Cotización detallada y transparente." },
  { n: "04", Icon: Hammer, t: "Fabricación", d: "Producción con materiales certificados." },
  { n: "05", Icon: Plug, t: "Instalación", d: "Montaje en obra con personal experto." },
  { n: "06", Icon: CheckCircle2, t: "Entrega", d: "Pruebas, garantía y manual de operación." },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-industrial opacity-10" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-rgv relative">
        <Reveal className="max-w-3xl">
          <span className="inline-block text-xs md:text-sm font-bold text-accent tracking-widest uppercase">Proceso</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Cómo trabajamos en <span className="text-accent">cada proyecto</span>
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative group text-center">
                  <div className="relative mx-auto h-24 w-24 rounded-full bg-primary-dark border-2 border-accent/40 flex items-center justify-center shadow-elegant group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                    <s.Icon className="size-9 text-accent" />
                    <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground text-xs font-extrabold flex items-center justify-center shadow-lg">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-lg">{s.t}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
