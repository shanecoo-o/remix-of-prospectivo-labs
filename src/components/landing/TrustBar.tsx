import { motion } from "framer-motion";
import { BadgeCheck, Globe2, Layers3, LineChart, Rocket, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Globe2,
    title: "Presença digital",
    text: "Websites e landing pages focadas em credibilidade e conversão.",
  },
  {
    icon: Layers3,
    title: "Soluções completas",
    text: "Marca, design, marketing, software, apps e automação no mesmo ecossistema.",
  },
  {
    icon: LineChart,
    title: "Crescimento mensurável",
    text: "Estratégia, funis, dados e KPIs para tomar melhores decisões.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega robusta",
    text: "Processo organizado, tecnologia moderna e acompanhamento contínuo.",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-10 border-y border-border bg-background/80 px-5 py-8 backdrop-blur lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <BadgeCheck className="h-3.5 w-3.5" />
              Padrão de entrega
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Do primeiro contacto ao lançamento.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Uma página bonita chama atenção. Uma experiência bem estruturada gera confiança, conversa e oportunidade comercial.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5">
            <Rocket className="h-3.5 w-3.5 text-primary" />
            Websites
          </span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Sistemas</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Apps</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Marketing</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Motion</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Automação</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">KPIs</span>
        </div>
      </div>
    </section>
  );
}