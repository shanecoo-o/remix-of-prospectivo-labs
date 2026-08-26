import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { TechShowcase } from "@/components/landing/TechShowcase";
import { HowWeHelp } from "@/components/landing/HowWeHelp";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

const Solutions = lazy(() => import("@/components/landing/Solutions").then((m) => ({ default: m.Solutions })));
const Process = lazy(() => import("@/components/landing/Process").then((m) => ({ default: m.Process })));
const Projects = lazy(() => import("@/components/landing/Projects").then((m) => ({ default: m.Projects })));
const LeadCapture = lazy(() => import("@/components/landing/LeadCapture").then((m) => ({ default: m.LeadCapture })));
const MotionVideo = lazy(() => import("@/components/landing/MotionVideo").then((m) => ({ default: m.MotionVideo })));
const Benefits = lazy(() => import("@/components/landing/Benefits").then((m) => ({ default: m.Benefits })));
const CtaSection = lazy(() => import("@/components/landing/CtaSection").then((m) => ({ default: m.CtaSection })));
const Contact = lazy(() => import("@/components/landing/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/landing/Footer").then((m) => ({ default: m.Footer })));

const SITE_URL = "https://centroprospectivo.tech";
const TITLE = "Centro Prospectivo Tecnológico | Soluções tecnológicas ao seu alcance";
const DESC =
  "Soluções tecnológicas ao seu alcance: websites, sistemas, apps, marketing, branding, motion e automação para empresas que querem crescer.";
const OG_IMAGE = `${SITE_URL}/og-centro-prospectivo.svg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Centro Prospectivo Tecnológico, websites, sistemas, apps mobile, marketing digital, branding, motion design, automação, tecnologia, Moçambique",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#2563eb" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Centro Prospectivo Tecnológico" },
      { property: "og:locale", content: "pt_MZ" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Centro Prospectivo Tecnológico — tecnologia, marca e crescimento" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <TechShowcase />
        <HowWeHelp />
        <Suspense fallback={<div className="h-32" />}>
          <Solutions />
          <Process />
          <Projects />
          <LeadCapture />
          <MotionVideo />
          <Benefits />
          <CtaSection />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <StickyMobileCta />
      <Toaster position="top-center" />
    </div>
  );
}