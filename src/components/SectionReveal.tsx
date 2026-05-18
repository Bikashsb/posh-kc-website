"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

const delayClass: Record<number, string> = {
  0: "",
  1: "section-reveal-delay-1",
  2: "section-reveal-delay-2",
  3: "section-reveal-delay-3",
  4: "section-reveal-delay-4",
};

export default function SectionReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section-reveal ${delayClass[delay]} ${className}`}>
      {children}
    </div>
  );
}
