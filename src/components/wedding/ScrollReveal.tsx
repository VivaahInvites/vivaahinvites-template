import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "fade" | "scale";
  flourish?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  flourish = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver with a negative bottom margin so it triggers nicely before reaching middle
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClasses = () => {
    if (direction === "scale") {
      return isVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none";
    }
    if (direction === "fade") {
      return isVisible
        ? "opacity-100"
        : "opacity-0 pointer-events-none";
    }
    // Default: "up"
    return isVisible
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-8 scale-[0.98] pointer-events-none";
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "800ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${getTransformClasses()} ${className}`}
    >
      {flourish && isVisible && (
        <div className="flex justify-center mb-3 animate-fade-in opacity-80 pointer-events-none">
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
      )}
      {children}
    </div>
  );
}
