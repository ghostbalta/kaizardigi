"use client";

import { useMemo } from "react";

type Props = {
  columns?: number;
  color?: "blue" | "green";
};

function makeStream(len: number) {
  const chars = "01アイウエオカキクケコサシスセソ0123456789";
  let s = "";
  for (let i = 0; i < len; i++) {
    s += chars[Math.floor(Math.random() * chars.length)] + " ";
  }
  return s;
}

export default function MatrixRain({ columns = 18, color = "blue" }: Props) {
  const cols = useMemo(() => {
    return Array.from({ length: columns }).map((_, i) => {
      const left = Math.random() * 100; // %
      const duration = 22 + Math.random() * 18; // 7-15s
      const delay = Math.random() * 5; // 0-5s
      const size = 10 + Math.random() * 4; // 10-14px
      const opacity = 0.42 + Math.random() * 0.28; // 0.28-0.50
      const blur = Math.random() < 0.4 ? 0.6 : 0;

      return {
        id: `${i}-${left.toFixed(2)}`,
        left,
        duration,
        delay,
        size,
        opacity,
        blur,
        text: makeStream(160),
      };
    });
  }, [columns]);

  const rgb =
    color === "green"
      ? "16, 185, 129" // emerald-ish
      : "37, 99, 235"; // brand blue

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes matrixDrop {
          0%   { transform: translateY(-120%); }
          100% { transform: translateY(120%); }
        }
        .matrixMask {
          mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
        }
      `}</style>

      {/* glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(circle at 20% 10%, rgba(${rgb},0.20), transparent 45%),
             radial-gradient(circle at 80% 30%, rgba(${rgb},0.14), transparent 45%),
             radial-gradient(circle at 35% 90%, rgba(${rgb},0.10), transparent 45%)`,
          opacity: 1,
        }}
      />

      {/* rain columns */}
      <div className="matrixMask absolute inset-0">
        {cols.map((c) => (
          <div
            key={c.id}
            className="absolute top-0 whitespace-pre-wrap"
            style={{
              left: `${c.left}%`,
              width: "10px",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              fontSize: `${c.size}px`,
              lineHeight: "16px",
              letterSpacing: "0.18em",
              color: `rgba(${rgb}, ${c.opacity})`,
              textShadow: `0 0 14px rgba(${rgb}, 0.18)`,
              filter: c.blur ? `blur(${c.blur}px)` : "none",
              transform: "skewX(-10deg)",
              animation: `matrixDrop ${c.duration}s linear ${c.delay}s infinite`,
            }}
          >
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}
