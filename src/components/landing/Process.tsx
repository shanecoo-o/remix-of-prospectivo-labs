import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PROCESS } from "./data";

export function Process() {
  return (
    <section id="processo" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Processo</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Como trabalhamos.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 top-6 hidden h-px w-full bg-border lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 top-6 hidden h-px w-full bg-gradient-primary lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
                    {p.step}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
