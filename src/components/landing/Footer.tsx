import { Facebook, MessageCircle, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { SERVICES } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="h-9" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {CONTACT.slogan}. Estratégia, design e tecnologia para empresas que querem avançar.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, href: CONTACT.facebook, label: "Facebook" },
                { Icon: MessageCircle, href: whatsappLink("Olá Centro Prospectivo Tecnológico!"), label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#servicos" className="transition-colors hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
              Contactos
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={whatsappLink("Olá Centro Prospectivo Tecnológico!")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4" /> {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p className="font-medium text-foreground">
            {CONTACT.brandName} — {CONTACT.slogan}.
          </p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}