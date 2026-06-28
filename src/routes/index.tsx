import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RGV Construcciones · Ingeniería, Estructuras Metálicas e Instalaciones Eléctricas" },
      {
        name: "description",
        content:
          "RGV Construcciones — empresa boliviana de ingeniería: estructuras metálicas, instalaciones eléctricas, sistemas contra incendio y proyectos eléctricos.",
      },
      { property: "og:title", content: "RGV Construcciones · Ingeniería y Construcción" },
      { property: "og:description", content: "Diseñamos, calculamos y ejecutamos proyectos industriales, comerciales y residenciales con los más altos estándares de calidad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-right" richColors />
    </div>
  );
}
