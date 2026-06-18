import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BENEFITS } from "./data";

export function Benefits() {
  return (
    <section className="snap-section relative flex min-h-[100svh] flex-col justify-center py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Benefícios
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Por que escolher o Centro Prospectivo Tecnológico?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Trabalhamos com método, foco em resultado e atenção ao detalhe.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={(i % 4) * 0.05}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-colors hover:border-primary/40 sm:flex-row sm:text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
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
