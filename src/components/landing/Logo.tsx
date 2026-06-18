import logo from "@/assets/logo.jpeg.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Centro Prospectivo Tecnológico"
      className={`${className} w-auto object-contain`}
      loading="eager"
      width={240}
      height={80}
    />
  );
}
