import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, Instagram, Facebook, Linkedin, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MORPH_WORDS } from "./data";
import { CONTACT, whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/contact";

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % MORPH_WORDS.length), 2000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="inicio"
      className="snap-section relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-[calc(var(--navbar-height)+1rem)] pb-10"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem] animate-blob bg-gradient-primary opacity-25 blur-3xl"
        animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 animate-blob bg-primary-glow opacity-15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
            Visão · Tecnologia · Crescimento
          </span>

          <h1 className="mt-5 h-display font-display font-extrabold text-foreground">
            Criamos tecnologia, marca e sistemas digitais para{" "}
            <span className="text-gradient">empresas que querem crescer.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
            Websites, apps, softwares, marketing, motion e automação para transformar presença digital em confiança, operação e vendas.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-display text-xl font-bold sm:text-2xl lg:text-3xl">
            <span className="text-foreground">Criamos</span>
            <span className="relative inline-flex h-9 min-w-[7.5rem] items-center justify-center overflow-hidden rounded-lg bg-gradient-primary px-3 sm:h-11 sm:min-w-[9rem] sm:px-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={MORPH_WORDS[index]}
                  initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.21, 0.5, 0.27, 0.99] }}
                  className="text-primary-foreground"
                >
                  {MORPH_WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-foreground">que movem negócios.</span>
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <a href="#diagnostico">
                <ClipboardCheck /> Solicitar Diagnóstico Gratuito
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
              <a href="#servicos">
                Ver Serviços <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={`tel:${CONTACT.phoneTel}`}>
                <Phone /> Ligar Agora
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5 sm:gap-3">
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
                target={label === "Telefone" ? undefined : "_blank"}
                rel={label === "Telefone" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}