"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** optionnel: légère mise à l'échelle */
  scale?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 14,
  scale = 1,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? { opacity: 1 } : { opacity: 0, y, scale: scale === 1 ? 0.98 : scale };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
