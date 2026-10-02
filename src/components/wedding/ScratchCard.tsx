import React, { useCallback, useEffect, useRef, useState } from "react";
import { celebrate } from "@/lib/celebrate";
import { useWedding } from "@/config/WeddingContext";

export function ScratchCard() {
  const { common } = useWedding();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const cleared = useRef(0);
  const [revealed, setRevealed] = useState(false);

  const paintFoil = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const { width: w, height: h } = canvas;
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "#b8860b");
      grad.addColorStop(0.2, "#f7e7a3");
      grad.addColorStop(0.4, "#d4af37");
      grad.addColorStop(0.62, "#fff3c4");
      grad.addColorStop(0.8, "#c99a2e");
      grad.addColorStop(1, "#f2d98c");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 500; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.22})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, Math.random() * 2.5, Math.random() * 2.5);
      }
      ctx.fillStyle = "rgba(90,60,10,0.9)";
      ctx.font = "600 13px Jost, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "✨ स्क्रैच करें • Scratch to Reveal ✨",
        w / 2,
        h / 2,
      );
    },
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    paintFoil(canvas);
  }, [paintFoil]);

  const reveal = useCallback(() => {
    if (revealed) return;
    setRevealed(true);
    celebrate(120);
  }, [revealed]);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    cleared.current += 1;
    const strokesFor10Percent = Math.max(
      6,
      Math.round((canvas.width * canvas.height * 0.08) / (Math.PI * 22 * 22)),
    );
    if (cleared.current >= strokesFor10Percent) reveal();
  };

  return (
    <section className="mx-auto mt-14 sm:mt-16 w-full max-w-[320px] sm:max-w-sm px-4 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
        💌 Save the Date
      </p>

      {/* Sleek, Compact Mobile-Optimized Scratch Box */}
      <div className="glass-card gold-frame relative mt-3 overflow-hidden rounded-2xl p-1 shadow-lg">
        <div className="relative h-40 w-full overflow-hidden rounded-xl bg-ivory sm:h-44">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 select-none py-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              {common.dayName}
            </span>
            <span className="font-serif text-5xl sm:text-6xl font-bold leading-none text-[#822227] drop-shadow-xs my-0.5">
              {common.dayNumber}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              {common.monthYear}
            </span>
            <span className="mt-1.5 rounded-full bg-amber-50/90 px-3 py-1 text-[11px] text-[#822227] font-medium border border-amber-300/60 shadow-xs">
              🕒 Ceremony: {common.ceremonyTime}
            </span>
          </div>

          <canvas
            ref={canvasRef}
            onPointerDown={(e) => {
              drawing.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              scratch(e);
            }}
            onPointerMove={scratch}
            onPointerUp={() => (drawing.current = false)}
            onPointerLeave={() => (drawing.current = false)}
            className={`absolute inset-0 h-full w-full cursor-grab touch-none transition-opacity duration-700 ${
              revealed ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      {revealed && (
        <p className="text-xs text-emerald-700 font-medium mt-2 animate-bounce">
          🎉 Auspicious date revealed! See you in Agra!
        </p>
      )}
    </section>
  );
}
