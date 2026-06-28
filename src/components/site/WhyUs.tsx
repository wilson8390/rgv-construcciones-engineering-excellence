import { Reveal } from "./Reveal";
import { Briefcase, Users, ShieldCheck, Hammer, Clock, Award } from "lucide-react";

const items = [
  { Icon: Briefcase, t: "Ingeniería especializada", d: "Profesionales con respaldo técnico y experiencia comprobada." },
  { Icon: Users, t: "Personal calificado", d: "Equipo de trabajo capacitado y comprometido." },
  { Icon: ShieldCheck, t: "Seguridad industrial", d: "Protocolos rigurosos en cada etapa del proyecto." },
  { Icon: Hammer, t: "Equipos profesionales", d: "Maquinaria y herramientas de última generación." },
  { Icon: Clock, t: "Cumplimiento de plazos", d: "Entregamos en tiempo y forma según cronograma." },
  { Icon: Award, t: "Calidad garantizada", d: "Materiales certificados y trabajos respaldados." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-rgv">
        <Reveal className="max-w-3xl">
          <span className="inline-block text-xs md:text-sm font-bold text-accent-dark tracking-widest uppercase">¿Por qué elegirnos?</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            La confianza se construye <span className="text-gradient-brand">con resultados</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="group h-full relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-accent/10 group-hover:bg-accent/25 transition-colors" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-6 transition-all">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-lg text-foreground">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
