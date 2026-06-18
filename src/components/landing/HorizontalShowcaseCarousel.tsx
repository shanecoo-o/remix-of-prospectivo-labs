import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

interface Props {
  items: ReactNode[];
  /** approx card width via tailwind classes per breakpoint */
  itemClassName?: string;
  ariaLabel?: string;
}

/**
 * Reusable horizontal showcase carousel with scroll-snap, drag support,
 * hidden scrollbar, edge fade and a one-time auto-hint nudge on first load.
 */
export function HorizontalShowcaseCarousel({
  items,
  itemClassName = "w-[85%] sm:w-[55%] lg:w-[33%] shrink-0 snap-start",
  ariaLabel = "showcase",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const reduce = useReducedMotion();

  // Drag-to-scroll (desktop)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let scrollLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      down = true;
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      el.scrollLeft = scrollLeft - (e.pageX - startX);
    };
    const onUp = (e: PointerEvent) => {
      down = false;
      el.style.cursor = "grab";
      try { el.releasePointerCapture(e.pointerId); } catch {}
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  // Track scroll state for arrows
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  // One-time auto-hint nudge
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      const x = Math.min(120, el.scrollWidth - el.clientWidth);
      el.scrollTo({ left: x, behavior: "smooth" });
      setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 900);
    }, 800);
    return () => clearTimeout(t);
  }, [reduce]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 py-2 sm:gap-6 lg:px-8 cursor-grab"
        style={{ scrollPaddingInline: "1.25rem" }}
      >
        {items.map((item, i) => (
          <div key={i} className={itemClassName}>
            {item}
          </div>
        ))}
        {/* trailing spacer so last card can centre on snap */}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      {/* desktop arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 lg:flex">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Anterior"
          disabled={!canPrev}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Próximo"
          disabled={!canNext}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-soft backdrop-blur transition disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
