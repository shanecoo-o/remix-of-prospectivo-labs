import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PROCESS } from "./data";

export function Process() {
  return (
    <section
      id="processo"
      className="snap-section relative flex min-h-[100svh] flex-col justify-center bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Processo
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Como trabalhamos.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Seis etapas claras, do diagnóstico ao acompanhamento contínuo.
          </p>
        </Reveal>

        <div className="relative mt-12 lg:mt-16">
          <div className="absolute left-0 top-6 hidden h-px w-full bg-border lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 top-6 hidden h-px w-full bg-gradient-primary lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
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
