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

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Serviços</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Tudo o que a sua empresa precisa para avançar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <motion.button
                onClick={() => setActive(s)}
                whileHover={{ y: -6 }}
                className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Saber mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
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
              <Button asChild variant="whatsapp" size="lg" className="mt-4">
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
