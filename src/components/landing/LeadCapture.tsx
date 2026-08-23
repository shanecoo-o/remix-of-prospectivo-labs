import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

type LeadForm = {
  name: string;
  whatsapp: string;
  company: string;
  serviceInterest: string;
  urgency: string;
  message: string;
};

const INITIAL_FORM: LeadForm = {
  name: "",
  whatsapp: "",
  company: "",
  serviceInterest: "",
  urgency: "Ainda estou a avaliar",
  message: "",
};

const SERVICES = [
  "Website / Landing Page",
  "Sistema de gestão",
  "App mobile",
  "Marketing digital",
  "Branding / Design",
  "Motion / Vídeo",
  "Automação / IA",
  "Consultoria de negócios",
];

const URGENCY = [
  "Ainda estou a avaliar",
  "Quero começar este mês",
  "Tenho urgência",
  "Preciso de proposta primeiro",
];

function buildDiagnosticMessage(form: LeadForm) {
  return [
    "Olá Centro Prospectivo Tecnológico! Quero solicitar um diagnóstico gratuito.",
    "",
    `Nome: ${form.name}`,
    `WhatsApp: ${form.whatsapp}`,
    form.company ? `Empresa: ${form.company}` : "Empresa: não informado",
    `Serviço de interesse: ${form.serviceInterest}`,
    `Urgência: ${form.urgency}`,
    form.message ? `Mensagem: ${form.message}` : "Mensagem: gostaria de entender a melhor solução para o meu caso.",
  ].join("\n");
}

export function LeadCapture() {
  const [form, setForm] = useState<LeadForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return form.name.trim().length >= 2 && form.whatsapp.trim().length >= 7 && form.serviceInterest.trim().length > 0;
  }, [form]);

  function updateField<K extends keyof LeadForm>(key: K, value: LeadForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setSubmitted(true);
      return;
    }

    const message = buildDiagnosticMessage(form);
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="diagnostico" className="snap-section relative overflow-hidden px-5 py-20 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="pointer-events-none absolute -right-28 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <Sparkles className="h-4 w-4" />
            Diagnóstico Gratuito
          </span>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Vamos mapear o que o seu negócio precisa para{" "}
            <span className="text-gradient">crescer com tecnologia.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Preencha o formulário rápido. A nossa equipa recebe o contexto e continua a conversa no WhatsApp com mais clareza, rapidez e foco.
          </p>

          <div className="mt-7 grid gap-3">
            {[
              "Diagnóstico inicial sem compromisso",
              "Recomendação de solução: website, sistema, app, marketing ou automação",
              "Contacto directo via WhatsApp para acelerar a decisão",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-border bg-card/80 p-4 shadow-soft backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-3xl border border-primary/20 bg-primary/10 p-5">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-7 text-muted-foreground">
              Na próxima fase, este formulário será ligado ao backend Railway, com PostgreSQL, KPIs, tracking de campanhas e painel admin.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-border bg-card/90 p-5 shadow-card backdrop-blur sm:p-7"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-extrabold text-foreground">Solicitar diagnóstico</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Campos curtos, foco em conversão. O envio abre o WhatsApp com a mensagem pronta.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Nome *
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="O seu nome"
                className="min-h-12 rounded-2xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              WhatsApp *
              <input
                value={form.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                placeholder="+258 ..."
                inputMode="tel"
                className="min-h-12 rounded-2xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Empresa
              <input
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="Nome da empresa"
                className="min-h-12 rounded-2xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Serviço *
              <select
                value={form.serviceInterest}
                onChange={(event) => updateField("serviceInterest", event.target.value)}
                className="min-h-12 rounded-2xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Escolha uma opção</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">
              Urgência
              <select
                value={form.urgency}
                onChange={(event) => updateField("urgency", event.target.value)}
                className="min-h-12 rounded-2xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {URGENCY.map((urgency) => (
                  <option key={urgency} value={urgency}>{urgency}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">
              Mensagem
              <textarea
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Conte em poucas palavras o que pretende criar ou melhorar."
                rows={4}
                className="rounded-2xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          {submitted && !canSubmit && (
            <p className="mt-4 rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              Preencha pelo menos nome, WhatsApp e serviço de interesse.
            </p>
          )}

          <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
            <MessageCircle /> Enviar e continuar no WhatsApp <ArrowRight />
          </Button>

          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
            Próxima versão: o mesmo formulário também ficará registado no painel admin com KPIs e histórico comercial.
          </p>
        </motion.form>
      </div>
    </section>
  );
}