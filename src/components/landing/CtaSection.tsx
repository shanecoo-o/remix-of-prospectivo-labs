import { BriefcaseBusiness, MessageCircle, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CONTACT, whatsappLink } from "@/lib/contact";

export function CtaSection() {
  return (
    <section className="snap-section relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-ink py-20 text-primary-foreground lg:py-28">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 animate-blob bg-primary opacity-25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Soluções tecnológicas ao seu alcance.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/75">
            Veja o nosso portfólio de soluções, fale connosco no WhatsApp ou solicite um diagnóstico para perceber o melhor caminho para a sua empresa.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="xl">
              <a href="#projectos">
                <BriefcaseBusiness /> Ver Portfólio
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={whatsappLink(
                  "Olá Centro Prospectivo Tecnológico! Gostaria de saber mais sobre os vossos serviços.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={`tel:${CONTACT.phoneTel}`}>
                <Phone /> Ligar Agora
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <a href="#diagnostico">
                <FileText /> Diagnóstico
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}