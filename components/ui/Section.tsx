// components/ui/Section.tsx
export default function Section({
  children,
  variant = "light",
  className = "",
  id,
}: {
  children: React.ReactNode;
  variant?: "light" | "soft" | "dark";
  className?: string;
  id?: string;
}) {
  const base = "py-14 md:py-18"; // ✅ plus compact
  const variants = {
    light: "bg-white",
    soft: "bg-slate-50",
    dark: "bg-slate-950 text-white",
  } as const;

  return (
    <section id={id} className={`${base} ${variants[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}