// Configuração de contacto — fácil de trocar.
// Substitua os placeholders pelos dados reais do Centro Prospectivo Tecnológico.

export const CONTACT = {
  phoneDisplay: "+258 84 000 0000",
  phoneTel: "+258840000000",
  whatsappNumber: "258840000000", // sem '+' nem espaços
  instagram: "https://instagram.com/centroprospectivo",
  facebook: "https://facebook.com/centroprospectivo",
  linkedin: "https://linkedin.com/company/centroprospectivo",
  email: "geral@centroprospectivo.tech",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá Centro Prospectivo Tecnológico! Gostaria de saber mais sobre os vossos serviços.";
