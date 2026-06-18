import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Instagram, Mail, Send } from "lucide-react";
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
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá Centro Prospectivo Tecnológico!%0A%0ANome: ${form.nome}%0ATelefone: ${form.telefone}%0AEmail: ${form.email}%0AServiço de interesse: ${form.servico || "—"}%0A%0A${form.mensagem}`;
    toast.success("Mensagem preparada", {
      description: "Para resposta mais rápida, continue pelo WhatsApp.",
    });
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`, "_blank", "noopener");
  };

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contacto</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Vamos construir o próximo passo.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Preencha o formulário ou fale connosco diretamente pelos canais abaixo.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                { Icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneDisplay, href: whatsappLink("Olá Centro Prospectivo Tecnológico!") },
                { Icon: Phone, label: "Telefone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
                { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { Icon: Instagram, label: "Instagram", value: "@centroprospectivo", href: CONTACT.instagram },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" required value={form.telefone} onChange={(e) => set("telefone")(e.target.value)} placeholder="+258 ..." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} placeholder="email@empresa.com" />
                  </div>
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
                  <Textarea id="mensagem" rows={4} value={form.mensagem} onChange={(e) => set("mensagem")(e.target.value)} placeholder="Conte-nos sobre o seu projeto..." />
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-2 w-full">
                  <Send /> Enviar mensagem
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
