import { Compass, Sparkles, Cpu, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";
import { PILLARS } from "./data";

const ICONS = [Compass, Sparkles, Cpu, LineChart];

export function HowWeHelp() {
  return (
    <section className="relative overflow-hidden bg-gradient-ink py-24 text-primary-foreground lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 animate-blob bg-primary opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-glow">
            Como ajudamos empresas
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Mais do que serviços, criamos caminhos digitais.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/70">
            Unimos consultoria, design, marketing e software para transformar desafios empresariais
            em soluções digitais reais.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-primary-glow/50">
                  <Icon className="h-8 w-8 text-primary-glow" />
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
