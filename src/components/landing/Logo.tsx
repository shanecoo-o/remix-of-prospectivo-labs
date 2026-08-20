export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/logo-centro-prospectivo.png"
      alt="Centro Prospectivo Tecnológico"
      className={`${className} w-auto object-contain`}
      loading="eager"
      decoding="async"
      width={320}
      height={120}
    />
  );
}
