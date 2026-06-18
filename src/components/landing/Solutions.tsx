import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOLUTIONS } from "./data";
import { whatsappLink } from "@/lib/contact";
import { HorizontalShowcaseCarousel } from "./HorizontalShowcaseCarousel";

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="snap-section relative flex min-h-[100svh] flex-col justify-center py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Soluções digitais
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Sistemas modulares para cada necessidade.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Cada solução resolve uma dor real do negócio. Escolha por onde começar.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 lg:mt-14">
        <HorizontalShowcaseCarousel
          ariaLabel="Soluções digitais"
          items={SOLUTIONS.map((s, i) => (
            <motion.a
              key={s}
              href={whatsappLink(
                `Olá, quero saber mais sobre ${s} do Centro Prospectivo Tecnológico.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="group flex h-full w-full flex-col items-center justify-between rounded-3xl border border-border glass p-7 text-center shadow-soft transition-colors hover:border-primary/50 min-h-[260px]"
            >
              <span className="font-display text-3xl font-extrabold text-gradient">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{s}</h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
                <MessageCircle className="h-4 w-4" /> Conversar sobre isto
              </span>
            </motion.a>
          ))}
        />
      </div>
    </section>
  );
}
