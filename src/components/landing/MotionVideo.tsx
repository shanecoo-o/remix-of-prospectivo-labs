import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { FORMATS } from "./data";

export function MotionVideo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FORMATS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="snap-section relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-primary py-20 text-primary-foreground lg:py-28">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            Motion · Vídeo · Design
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Conteúdo visual que faz a marca ser lembrada.
          </h2>
        </Reveal>

        <div className="mt-12 flex min-h-[8rem] items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={FORMATS[index]}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.21, 0.5, 0.27, 0.99] }}
              className="font-display text-6xl font-extrabold uppercase tracking-tight sm:text-8xl"
            >
              {FORMATS[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
            {FORMATS.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
