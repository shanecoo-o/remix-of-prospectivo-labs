import {
  Briefcase,
  TrendingUp,
  Clapperboard,
  Palette,
  Video,
  Globe,
  Code2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  details: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Briefcase,
    title: "Consultoria de Negócios",
    short: "Estratégia e estrutura para crescimento sustentável.",
    details:
      "Analisamos o seu negócio, identificamos oportunidades e estruturamos estratégias para crescimento sustentável.",
    bullets: ["Diagnóstico do negócio", "Plano estratégico", "Modelo de crescimento", "Indicadores e metas"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    short: "Campanhas, funis e posicionamento que geram clientes.",
    details:
      "Criamos campanhas, funis, conteúdos e posicionamento digital para atrair clientes e gerar resultados.",
    bullets: ["Funis de conversão", "Gestão de redes sociais", "Tráfego pago", "Conteúdo estratégico"],
  },
  {
    icon: Clapperboard,
    title: "Motion Design",
    short: "Animações modernas para marcas e campanhas.",
    details:
      "Transformamos ideias em animações modernas para redes sociais, apresentações, anúncios e marcas.",
    bullets: ["Animação para redes sociais", "Apresentações animadas", "Anúncios animados", "Logo animation"],
  },
  {
    icon: Palette,
    title: "Design & Branding",
    short: "Identidades visuais alinhadas ao valor da marca.",
    details:
      "Construímos identidades visuais, peças gráficas e experiências digitais alinhadas ao valor da sua marca.",
    bullets: ["Identidade visual", "Manual de marca", "Peças gráficas", "Design de experiência"],
  },
  {
    icon: Video,
    title: "Criação de Vídeos",
    short: "Vídeos institucionais e promocionais com impacto.",
    details:
      "Produzimos vídeos institucionais, promocionais e criativos para comunicar com impacto.",
    bullets: ["Vídeos institucionais", "Promocionais", "Conteúdo criativo", "Edição profissional"],
  },
  {
    icon: Globe,
    title: "Websites",
    short: "Sites rápidos, responsivos e focados em conversão.",
    details:
      "Desenvolvemos websites rápidos, responsivos, modernos e focados em conversão.",
    bullets: ["Design responsivo", "Performance otimizada", "SEO técnico", "Foco em conversão"],
  },
  {
    icon: Code2,
    title: "Softwares",
    short: "Sistemas personalizados para automatizar processos.",
    details:
      "Criamos sistemas personalizados para automatizar processos e melhorar a gestão da empresa.",
    bullets: ["Sistemas à medida", "Automatização", "Integrações", "Gestão centralizada"],
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    short: "Aplicações móveis intuitivas e prontas para escalar.",
    details:
      "Desenvolvemos aplicações móveis funcionais, intuitivas e preparadas para escalar.",
    bullets: ["iOS e Android", "UX intuitivo", "Escalável", "Manutenção contínua"],
  },
];

export const PILLARS = [
  { title: "Estratégia", text: "Decisões orientadas a dados e objetivos claros." },
  { title: "Identidade", text: "Marcas memoráveis e consistentes em todos os pontos." },
  { title: "Tecnologia", text: "Plataformas robustas, rápidas e escaláveis." },
  { title: "Crescimento", text: "Resultados mensuráveis e expansão contínua." },
];

export const SOLUTIONS = [
  "Presença Digital",
  "Automatização de Processos",
  "Gestão Comercial",
  "Plataformas Web",
  "Aplicações Mobile",
  "Conteúdo Visual",
  "Marketing e Performance",
  "Sistemas Internos",
];

export const PROCESS = [
  { step: "01", title: "Diagnóstico", text: "Entendemos o negócio, desafios e objetivos." },
  { step: "02", title: "Estratégia", text: "Definimos o caminho e as prioridades certas." },
  { step: "03", title: "Design", text: "Criamos a experiência e a identidade visual." },
  { step: "04", title: "Desenvolvimento", text: "Construímos a solução com tecnologia sólida." },
  { step: "05", title: "Lançamento", text: "Colocamos no ar com qualidade e impacto." },
  { step: "06", title: "Acompanhamento", text: "Medimos, otimizamos e evoluímos continuamente." },
];

export const PROJECTS = [
  { category: "Website Institucional", title: "Presença digital premium", result: "Mais credibilidade e contactos qualificados." },
  { category: "Sistema de Gestão", title: "Operação automatizada", result: "Processos internos mais rápidos e organizados." },
  { category: "Campanha Digital", title: "Aquisição de clientes", result: "Maior alcance e leads consistentes." },
  { category: "App Mobile", title: "Serviço na palma da mão", result: "Experiência fluida e clientes mais próximos." },
  { category: "Vídeo Promocional", title: "História de marca em vídeo", result: "Comunicação com impacto e memorável." },
  { category: "Identidade Visual", title: "Marca forte e coerente", result: "Reconhecimento e diferenciação no mercado." },
];

export const FORMATS = ["Reels", "Ads", "Vídeos", "Motion", "Identidade", "Campanhas"];

export const BENEFITS = [
  "Visão estratégica",
  "Equipa multidisciplinar",
  "Soluções personalizadas",
  "Design moderno",
  "Foco em conversão",
  "Tecnologia escalável",
  "Comunicação clara",
  "Acompanhamento contínuo",
];

export const MORPH_WORDS = [
  "estratégia",
  "websites",
  "softwares",
  "apps",
  "marcas",
  "campanhas",
  "motion",
];
