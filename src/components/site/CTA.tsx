import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-rgv">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute inset-0 bg-grid-industrial opacity-10" />

            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  ¿Necesita una solución para <span className="text-accent">su proyecto</span>?
                </h2>
                <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
                  Conversemos sobre su idea — le entregaremos una propuesta clara, técnica y a la medida.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-bold shadow-elegant hover:bg-accent-dark hover:-translate-y-0.5 transition-all"
                >
                  Solicitar Cotización
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/59168478109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-7 py-3.5 font-bold hover:bg-white hover:text-primary transition-all"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
