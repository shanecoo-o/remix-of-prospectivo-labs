import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardCheck, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/contact";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Processo", href: "#processo" },
  { label: "Projectos", href: "#projectos" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center" aria-label="Centro Prospectivo Tecnológico">
          <Logo className="h-11 sm:h-12 lg:h-14" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="glass" size="lg">
            <a href={whatsappLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
          <Button asChild variant="hero" size="lg">
            <a href="#diagnostico">
              <ClipboardCheck /> Diagnóstico
            </a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-background lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.21, 0.5, 0.27, 0.99] }}
          >
            <div className="flex items-center justify-between px-5 py-3">
              <Logo className="h-10 sm:h-11" />
              <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="p-2">
                <X />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6 pt-8">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl font-semibold tracking-tight text-foreground"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="grid gap-3 px-6 pt-8">
              <Button asChild variant="hero" size="xl" className="w-full">
                <a href="#diagnostico" onClick={() => setOpen(false)}>
                  <ClipboardCheck /> Solicitar Diagnóstico
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="w-full">
                <a
                  href={whatsappLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}