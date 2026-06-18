import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SERVICES, type Service } from "./data";
import { whatsappLink } from "@/lib/contact";
import { HorizontalShowcaseCarousel } from "./HorizontalShowcaseCarousel";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section
      id="servicos"
      className="snap-section relative flex min-h-[100svh] flex-col justify-center py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Serviços
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Tudo o que a sua empresa precisa para avançar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Estratégia, design, tecnologia e comunicação — num só parceiro.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 lg:mt-14">
        <HorizontalShowcaseCarousel
          ariaLabel="Serviços do Centro Prospectivo Tecnológico"
          items={SERVICES.map((s, i) => (
            <motion.button
              key={s.title}
              onClick={() => setActive(s)}
              whileHover={{ y: -6 }}
              transition={{ delay: (i % 3) * 0.04 }}
              className="group flex h-full w-full flex-col items-center rounded-3xl border border-border bg-card p-7 text-center shadow-card transition-colors hover:border-primary/40 min-h-[280px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Saber mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          ))}
        />
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <active.icon className="h-6 w-6" />
                </div>
                <DialogTitle className="font-display text-2xl">{active.title}</DialogTitle>
                <DialogDescription className="text-base">{active.details}</DialogDescription>
              </DialogHeader>
              <ul className="mt-2 grid gap-2">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-4 w-full">
                <a
                  href={whatsappLink(
                    `Olá, quero saber mais sobre ${active.title} do Centro Prospectivo Tecnológico.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Conversar sobre isto
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
