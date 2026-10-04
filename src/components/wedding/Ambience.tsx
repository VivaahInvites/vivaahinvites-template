import { useMemo } from "react";

const ITEMS = ["🌸", "✨", "🌹", "🌼", "✨", "🌸", "🌹"];

export function Ambience({ count = 22 }: { count?: number }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Distributed horizontally across 2% - 96%
      const left = ((i * 137.5) % 94) + 3;
      // Gentle romantic fall duration: 8s to 16s
      const duration = 9 + (i % 6) * 1.5;
      // Negative delay so they are already mid-flight falling down immediately
      const delay = -((i * 2.3) % duration);
      // Soft petal size
      const size = 15 + (i % 5) * 4;

      return {
        id: i,
        char: ITEMS[i % ITEMS.length],
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute select-none pointer-events-none"
          style={{
            left: p.left,
            top: "-40px",
            fontSize: p.size,
            opacity: 0.45,
            animationName: "petalFall",
            animationDuration: p.duration,
            animationTimingFunction: "linear",
            animationDelay: p.delay,
            animationIterationCount: "infinite",
            willChange: "transform, opacity",
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
