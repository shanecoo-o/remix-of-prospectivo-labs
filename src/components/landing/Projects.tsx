import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";
import { whatsappLink } from "@/lib/contact";

export function Projects() {
  return (
    <section id="projectos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Projectos</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Exemplos de soluções que desenvolvemos.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <motion.a
                href={whatsappLink(
                  `Olá, quero algo parecido com "${p.category}" do Centro Prospectivo Tecnológico.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-card"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-ink">
                  <div className="absolute inset-0 tech-grid opacity-25" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 animate-blob bg-primary opacity-40 blur-2xl" />
                  <span className="relative font-display text-2xl font-extrabold uppercase tracking-tight text-primary-foreground/90">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Quero algo parecido
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
