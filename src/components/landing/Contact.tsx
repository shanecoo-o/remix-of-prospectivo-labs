import { useState, type FormEvent } from "react";
import { Facebook, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";
import { CONTACT, whatsappLink } from "@/lib/contact";

export function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const msg = [
      "Olá Centro Prospectivo Tecnológico!",
      "",
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `Serviço de interesse: ${form.servico || "—"}`,
      "",
      form.mensagem || "Gostaria de saber mais sobre os vossos serviços.",
    ].join("\n");

    toast.success("Mensagem preparada", {
      description: "Para resposta mais rápida, continue pelo WhatsApp.",
    });

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section
      id="contacto"
      className="snap-section relative flex min-h-[100svh] flex-col justify-center py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Contacto
          </p>
          <h2 className="mt-3 h-section font-display font-extrabold text-foreground">
            Vamos construir o próximo passo.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Fale connosco por WhatsApp, chamada ou Facebook. Estamos em Maputo e trabalhamos soluções digitais para empresas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mt-8 flex flex-col gap-3">
              {[
                { Icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsappDisplay, href: whatsappLink("Olá Centro Prospectivo Tecnológico!") },
                { Icon: Phone, label: "Chamadas", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
                { Icon: Facebook, label: "Facebook", value: "Centro Prospectivo Tecnológico", href: CONTACT.facebook },
                { Icon: MapPin, label: "Localização", value: CONTACT.location, href: "#" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                    <span className="font-semibold text-foreground">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" required value={form.nome} onChange={(e) => set("nome")(e.target.value)} placeholder="O seu nome" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                  <Input id="telefone" required value={form.telefone} onChange={(e) => set("telefone")(e.target.value)} placeholder="+258 ..." />
                </div>
                <div className="grid gap-2">
                  <Label>Serviço de interesse</Label>
                  <Select value={form.servico} onValueChange={set("servico")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" rows={4} value={form.mensagem} onChange={(e) => set("mensagem")(e.target.value)} placeholder="Conte-nos sobre o seu projecto..." />
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-2 w-full">
                  <Send /> Enviar pelo WhatsApp
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}