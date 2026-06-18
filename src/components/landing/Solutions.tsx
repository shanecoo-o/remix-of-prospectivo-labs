import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOLUTIONS } from "./data";
import { whatsappLink } from "@/lib/contact";

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Soluções digitais</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Sistemas modulares para cada necessidade.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s} delay={(i % 4) * 0.05} y={36}>
              <motion.a
                href={whatsappLink(
                  `Olá, quero saber mais sobre ${s} do Centro Prospectivo Tecnológico.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border glass p-6 shadow-soft transition-colors hover:border-primary/50"
              >
                <span className="font-display text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">{s}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                  <MessageCircle className="h-4 w-4" /> Conversar sobre isto
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
