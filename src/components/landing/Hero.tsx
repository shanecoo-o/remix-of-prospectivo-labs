import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MORPH_WORDS } from "./data";
import { CONTACT, whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/contact";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % MORPH_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* fundo */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem] animate-blob bg-gradient-primary opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 animate-blob bg-primary-glow opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Visão · Tecnologia · Crescimento
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Transformamos visão em{" "}
            <span className="text-gradient">tecnologia, marca e crescimento.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            O Centro Prospectivo Tecnológico cria estratégias, websites, softwares, apps mobile,
            design, marketing digital, motion design e vídeos para empresas que querem evoluir.
          </p>

          {/* frase morph */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 font-display text-2xl font-bold sm:text-3xl">
            <span className="text-foreground">Criamos</span>
            <span className="relative inline-flex h-10 min-w-[8.5rem] items-center justify-center overflow-hidden rounded-lg bg-gradient-primary px-4 sm:h-12">
              <AnimatePresence mode="wait">
                <motion.span
                  key={MORPH_WORDS[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.5, 0.27, 0.99] }}
                  className="text-primary-foreground"
                >
                  {MORPH_WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-foreground">que movem negócios.</span>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#servicos">
                Ver Serviços <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={`tel:${CONTACT.phoneTel}`}>
                <Phone /> Ligar Agora
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              { Icon: MessageCircle, href: whatsappLink(DEFAULT_WA_MESSAGE), label: "WhatsApp" },
              { Icon: Phone, href: `tel:${CONTACT.phoneTel}`, label: "Telefone" },
              { Icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
              { Icon: Facebook, href: CONTACT.facebook, label: "Facebook" },
              { Icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
