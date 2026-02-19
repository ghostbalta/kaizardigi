import MatrixRain from "@/components/ui/MatrixRain";

type Props = {
  children: React.ReactNode;
  columns?: number;
  opacity?: number; // 0.05 -> 0.20
  color?: "blue" | "green";
  className?: string;
};

export default function MatrixSection({
  children,
  columns = 18,
  opacity = 0.12,
  color = "blue",
  className = "",
}: Props) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Matrix behind */}
      <div className="absolute inset-0 -z-10" style={{ opacity }}>
        <MatrixRain columns={columns} color={color} />
      </div>

      {/* Soft overlay to keep readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/70 to-slate-50/80" />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
