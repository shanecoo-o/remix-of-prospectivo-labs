import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BENEFITS } from "./data";

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefícios</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Por que escolher o Centro Prospectivo Tecnológico?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={(i % 4) * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/40">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
