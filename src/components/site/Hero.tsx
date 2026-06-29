import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-primary-dark">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={hero}
          alt="Estructuras metálicas y grúas industriales"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container-rgv min-h-[100svh] flex flex-col justify-center pt-40 md:pt-48 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-semibold text-accent"
        >
          <Wrench className="size-3.5" /> Ingeniería • Bolivia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-5xl font-display font-black text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
        >
          RGV <span className="text-accent">CONSTRUCCIONES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 max-w-3xl text-white/85 font-semibold text-base sm:text-lg md:text-xl"
        >
          Ingeniería · Construcción · Instalaciones Eléctricas · Estructuras Metálicas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-2xl text-white/75 text-sm sm:text-base md:text-lg"
        >
          Diseñamos, calculamos y ejecutamos proyectos industriales, comerciales y residenciales
          con los más altos estándares de calidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-bold shadow-elegant hover:bg-accent-dark transition-all hover:-translate-y-0.5"
          >
            Solicitar Cotización
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 backdrop-blur text-white px-7 py-3.5 font-bold hover:bg-white hover:text-primary transition-all"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/15 max-w-4xl"
        >
          {[
            { k: "+10", v: "Años de experiencia" },
            { k: "+200", v: "Proyectos ejecutados" },
            { k: "100%", v: "Garantía de calidad" },
            { k: "24/7", v: "Soporte técnico" },
          ].map((s) => (
            <div key={s.v} className="bg-primary-dark/60 p-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-accent">{s.k}</div>
              <div className="text-[11px] md:text-xs mt-1 text-white/75 uppercase tracking-wider">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
