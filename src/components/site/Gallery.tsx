import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Cat = "Todos" | "Estructuras metálicas" | "Instalaciones eléctricas" | "Sistemas contra incendio" | "Proyectos eléctricos";

const items: { src: string; cat: Exclude<Cat, "Todos">; alt: string; span?: string }[] = [
  { src: g1, cat: "Estructuras metálicas", alt: "Galpón industrial con estructura metálica", span: "md:row-span-2" },
  { src: g2, cat: "Instalaciones eléctricas", alt: "Instalación de tablero eléctrico" },
  { src: g3, cat: "Sistemas contra incendio", alt: "Panel y detectores contra incendio" },
  { src: g5, cat: "Estructuras metálicas", alt: "Cubierta metálica parabólica", span: "md:col-span-2" },
  { src: g4, cat: "Proyectos eléctricos", alt: "Planos y memorias de cálculo" },
  { src: g6, cat: "Instalaciones eléctricas", alt: "Iluminación LED en galpón" },
];

const cats: Cat[] = ["Todos", "Estructuras metálicas", "Instalaciones eléctricas", "Sistemas contra incendio", "Proyectos eléctricos"];

export function Gallery() {
  const [active, setActive] = useState<Cat>("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "Todos" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-steel">
      <div className="container-rgv">
        <Reveal className="max-w-3xl">
          <span className="inline-block text-xs md:text-sm font-bold text-accent-dark tracking-widest uppercase">Galería</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Proyectos <span className="text-gradient-brand">recientes</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all
                  ${active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                key={it.src + it.alt}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(it.src)}
                className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-shadow ${it.span ?? ""}`}
              >
                <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-accent">{it.cat}</div>
                  <div className="text-white text-sm font-semibold mt-0.5">{it.alt}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              aria-label="Cerrar"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="size-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
