import { Compass, Sparkles, Cpu, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";
import { PILLARS } from "./data";

const ICONS = [Compass, Sparkles, Cpu, LineChart];

export function HowWeHelp() {
  return (
    <section className="snap-section relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-ink py-20 text-primary-foreground lg:py-28">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 animate-blob bg-primary opacity-30 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-glow sm:text-sm">
            Como ajudamos empresas
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold">
            Mais do que serviços, criamos caminhos digitais.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/70 sm:text-lg">
            Unimos consultoria, design, marketing e software para transformar desafios
            empresariais em soluções digitais reais.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary-glow/50">
                  <Icon className="h-9 w-9 text-primary-glow" />
                  <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
