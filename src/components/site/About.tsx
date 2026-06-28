import { Reveal } from "./Reveal";
import { Building2, ShieldCheck, Award } from "lucide-react";
import img from "@/assets/gallery-1.jpg";

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-industrial opacity-60" />
      <div className="container-rgv relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={img} alt="Estructuras metálicas RGV" loading="lazy" width={1024} height={1280} className="w-full h-[420px] md:h-[540px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-accent text-accent-foreground rounded-2xl p-5 md:p-6 shadow-elegant max-w-[220px]">
            <div className="font-display text-3xl md:text-4xl font-black">10+</div>
            <div className="text-sm font-semibold">Años entregando proyectos en Bolivia</div>
          </div>
          <div className="absolute -top-5 -left-5 hidden md:block bg-primary text-primary-foreground rounded-2xl p-4 shadow-elegant animate-float">
            <Award className="size-7 text-accent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-block text-xs md:text-sm font-bold text-accent-dark tracking-widest uppercase">Sobre nosotros</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Ingeniería con experiencia <span className="text-gradient-brand">y compromiso</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Somos una empresa especializada en ingeniería y construcción, ofreciendo soluciones
              integrales para proyectos industriales, comerciales y residenciales.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es brindar <strong className="text-foreground">calidad, seguridad y cumplimiento</strong> en cada proyecto.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { Icon: Building2, t: "Proyectos integrales", d: "Diseño, fabricación, montaje y entrega llave en mano." },
              { Icon: ShieldCheck, t: "Seguridad industrial", d: "Cumplimos protocolos rigurosos en cada obra." },
            ].map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={0.15 + i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-foreground">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
