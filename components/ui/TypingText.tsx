"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

export default function TypingText({
  text,
  speed = 25,
  delay = 0,
  className,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let index = 0;
    let interval: any;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [mounted, text, speed, delay]);

  if (!mounted) return null;

  return <span className={className}>{displayed}</span>;
}