import { ClipboardCheck, MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/contact";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border glass p-3 lg:hidden">
      <a
        href="#diagnostico"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        <ClipboardCheck className="h-4 w-4" /> Diagnóstico
      </a>
      <a
        href={whatsappLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}