import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingrese su nombre").max(80),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  telefono: z.string().trim().min(6, "Teléfono inválido").max(30),
  correo: z.string().trim().email("Correo inválido").max(160),
  mensaje: z.string().trim().min(10, "Cuéntenos sobre su proyecto").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revise los datos del formulario");
      return;
    }
    setLoading(true);
    // Compone mensaje de WhatsApp como envío rápido
    const d = parsed.data;
    const text =
      `Hola RGV Construcciones, soy ${d.nombre}` +
      (d.empresa ? ` (${d.empresa})` : "") +
      `.%0ATel: ${encodeURIComponent(d.telefono)}%0AEmail: ${encodeURIComponent(d.correo)}%0A%0AMensaje:%0A${encodeURIComponent(d.mensaje)}`;
    setTimeout(() => {
      window.open(`https://wa.me/59168478109?text=${text}`, "_blank", "noopener,noreferrer");
      toast.success("Abriendo WhatsApp para enviar su mensaje");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 400);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container-rgv">
        <Reveal className="max-w-3xl">
          <span className="inline-block text-xs md:text-sm font-bold text-accent-dark tracking-widest uppercase">Contacto</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Hablemos de su <span className="text-gradient-brand">próximo proyecto</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            {[
              { Icon: Phone, t: "WhatsApp", v: ["68478109", "75992092"], links: ["https://wa.me/59168478109", "https://wa.me/59175992092"] },
              { Icon: Mail, t: "Correo", v: ["rgv.construcciones.bo@gmail.com"], links: ["mailto:rgv.construcciones.bo@gmail.com"] },
              { Icon: MapPin, t: "Bolivia", v: ["Cobertura nacional"], links: [] },
            ].map(({ Icon, t, v, links }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{t}</div>
                    <div className="mt-1 space-y-0.5">
                      {v.map((line, i) =>
                        links[i] ? (
                          <a key={line} href={links[i]} target="_blank" rel="noopener noreferrer" className="block font-semibold text-foreground hover:text-primary transition-colors">
                            {line}
                          </a>
                        ) : (
                          <div key={line} className="font-semibold text-foreground">{line}</div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3] bg-steel grid place-items-center text-center p-6">
              <div>
                <MapPin className="mx-auto size-8 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Espacio para Google Maps</p>
                <p className="text-xs text-muted-foreground mt-1">Integrable próximamente</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="nombre" label="Nombre *" placeholder="Su nombre" />
                <Field name="empresa" label="Empresa" placeholder="Opcional" />
                <Field name="telefono" label="Teléfono *" placeholder="+591 ..." type="tel" />
                <Field name="correo" label="Correo *" placeholder="correo@ejemplo.com" type="email" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Mensaje *</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  placeholder="Cuéntenos sobre su proyecto..."
                  maxLength={1000}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-bold shadow-elegant hover:bg-primary-dark hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                Enviar mensaje
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar abriremos WhatsApp con su mensaje listo para entregar.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
      />
    </div>
  );
}
