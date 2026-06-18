import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";
import { whatsappLink } from "@/lib/contact";
import { HorizontalShowcaseCarousel } from "./HorizontalShowcaseCarousel";

export function Projects() {
  return (
    <section
      id="projectos"
      className="snap-section relative flex min-h-[100svh] flex-col justify-center py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Projectos
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Exemplos de soluções que desenvolvemos.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Showcases de trabalhos que combinam estratégia, design e tecnologia.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-14">
        <HorizontalShowcaseCarousel
          ariaLabel="Projectos"
          items={PROJECTS.map((p) => (
            <motion.a
              key={p.title}
              href={whatsappLink(
                `Olá, quero algo parecido com "${p.category}" do Centro Prospectivo Tecnológico.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="group block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-ink">
                <div className="absolute inset-0 tech-grid opacity-25" />
                <div className="absolute -right-10 -top-10 h-40 w-40 animate-blob bg-primary opacity-40 blur-2xl" />
                <span className="relative px-6 text-center font-display text-2xl font-extrabold uppercase tracking-tight text-primary-foreground/90">
                  {p.category}
                </span>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Quero algo parecido
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        />
      </div>
    </section>
  );
}
