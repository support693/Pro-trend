"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

export default function ScrollAnimate({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translate3d(0,0,0) scale(1)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform: Record<Animation, string> = {
    "fade-up": "translate3d(0, 40px, 0)",
    "fade-down": "translate3d(0, -40px, 0)",
    "fade-left": "translate3d(-40px, 0, 0)",
    "fade-right": "translate3d(40px, 0, 0)",
    "zoom-in": "scale(0.92)",
    fade: "translate3d(0, 0, 0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform[animation],
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
