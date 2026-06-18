import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { HowWeHelp } from "@/components/landing/HowWeHelp";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

const Solutions = lazy(() => import("@/components/landing/Solutions").then((m) => ({ default: m.Solutions })));
const Process = lazy(() => import("@/components/landing/Process").then((m) => ({ default: m.Process })));
const Projects = lazy(() => import("@/components/landing/Projects").then((m) => ({ default: m.Projects })));
const MotionVideo = lazy(() => import("@/components/landing/MotionVideo").then((m) => ({ default: m.MotionVideo })));
const Benefits = lazy(() => import("@/components/landing/Benefits").then((m) => ({ default: m.Benefits })));
const CtaSection = lazy(() => import("@/components/landing/CtaSection").then((m) => ({ default: m.CtaSection })));
const Contact = lazy(() => import("@/components/landing/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/landing/Footer").then((m) => ({ default: m.Footer })));

const TITLE = "Centro Prospectivo Tecnológico | Negócios, Marketing, Design e Tecnologia";
const DESC =
  "Consultoria de negócios, marketing digital, motion design, design, vídeos, websites, softwares e apps mobile para empresas que querem crescer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Services />
        <HowWeHelp />
        <Suspense fallback={<div className="h-32" />}>
          <Solutions />
          <Process />
          <Projects />
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
