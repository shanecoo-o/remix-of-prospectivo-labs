import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code2, Database, Layers3, LineChart, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_WA_MESSAGE, whatsappLink } from "@/lib/contact";

const ECOSYSTEM = [
  { label: "Marca", detail: "Identidade forte", icon: Sparkles },
  { label: "Web", detail: "Sites rápidos", icon: Code2 },
  { label: "Dados", detail: "Decisão inteligente", icon: Database },
  { label: "Automação", detail: "Processos fluidos", icon: Zap },
  { label: "IA", detail: "Experiências smart", icon: BrainCircuit },
  { label: "Crescimento", detail: "Conversão medida", icon: LineChart },
];

const LAB_ITEMS = [
  "Interfaces modernas",
  "Dashboards",
  "Sistemas internos",
  "Apps mobile",
  "Motion design",
  "Automação comercial",
];

export function TechShowcase() {
  const reduce = useReducedMotion();

  return (
    <section id="laboratorio" className="relative overflow-hidden px-5 py-20 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <Layers3 className="h-4 w-4" />
            Laboratório Digital
          </span>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tecnologia visual, robusta e pronta para{" "}
            <span className="text-gradient">converter negócios.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Elevamos marcas com websites, sistemas, apps, motion, automação e experiências digitais que mostram força técnica sem perder foco comercial.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-card backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Padrão de Excelência</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Acabamento premium, organização, consistência visual e robustez de entrega.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-card backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Foco Comercial</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Beleza visual com CTA claro, WhatsApp sempre presente e jornada simples para o cliente.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Falar sobre um projecto
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
              <a href="#projectos">
                Ver demonstrações <ArrowRight />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-square rounded-[2rem] border border-border bg-gradient-to-br from-card via-card/80 to-primary/10 p-4 shadow-card backdrop-blur">
            <div className="absolute inset-4 rounded-[1.5rem] border border-primary/10" />
            <div className="absolute inset-10 rounded-full border border-dashed border-primary/25" />
            <div className="absolute inset-20 rounded-full border border-dashed border-primary/20" />

            <motion.div
              className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/90 p-4 text-center shadow-glow backdrop-blur sm:h-36 sm:w-36"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <p className="font-display text-sm font-extrabold leading-tight text-foreground">
                  Centro Digital
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">estratégia + tecnologia</p>
              </div>
            </motion.div>

            <div className="absolute inset-0">
              {ECOSYSTEM.map((item, index) => {
                const angle = (index / ECOSYSTEM.length) * 360;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(clamp(7.1rem, 28vw, 12.4rem)) rotate(-${angle}deg)`,
                    }}
                    animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background/90 p-3 shadow-soft backdrop-blur">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block whitespace-nowrap text-xs font-bold text-foreground">{item.label}</span>
                          <span className="block whitespace-nowrap text-[10px] text-muted-foreground">{item.detail}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              aria-hidden
              className="absolute bottom-6 left-6 right-6 h-20 rounded-full bg-primary/20 blur-2xl"
              animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {LAB_ITEMS.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card px-3 py-3 text-center text-xs font-semibold text-muted-foreground shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}