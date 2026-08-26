// Configuração oficial de contacto do Centro Prospectivo Tecnológico (CPT).

export const CONTACT = {
  brandName: "Centro Prospectivo Tecnológico",
  shortName: "CPT",
  slogan: "Soluções tecnológicas ao seu alcance",
  location: "Maputo, Moçambique",

  whatsappDisplay: "+258 84 503 7090",
  whatsappNumber: "258845037090", // sem '+' nem espaços

  phoneDisplay: "+258 87 746 7606 / +258 84 266 7606",
  phoneTel: "+258877467606",
  phoneSecondaryTel: "+258842667606",

  facebook: "https://web.facebook.com/profile.php?id=61591052609739",

  // Canais ainda não confirmados.
  instagram: "",
  linkedin: "",
  email: "",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá Centro Prospectivo Tecnológico! Gostaria de saber mais sobre os vossos serviços.";