import { useEffect, useState } from "react";
import { useWedding } from "@/config/WeddingContext";

const CARDS = [
  { key: "days", label: "Days", bg: "linear-gradient(160deg, #fffdf8, #fbf4e8)" },
  { key: "hours", label: "Hours", bg: "linear-gradient(160deg, #fffdf8, #fbf4e8)" },
  { key: "minutes", label: "Minutes", bg: "linear-gradient(160deg, #fffdf8, #fbf4e8)" },
  { key: "seconds", label: "Seconds", bg: "linear-gradient(160deg, #fffdf8, #fbf4e8)" },
] as const;

export function Countdown() {
  const { common, couple } = useWedding();
  const target = new Date(common.targetDateISO).getTime();

  function diff() {
    const ms = Math.max(0, target - Date.now());
    return {
      days: Math.floor(ms / 86400000),
      hours: Math.floor(ms / 3600000) % 24,
      minutes: Math.floor(ms / 60000) % 60,
      seconds: Math.floor(ms / 1000) % 60,
    };
  }

  const [time, setTime] = useState(() => diff());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTime(diff());
    setReady(true);
    const id = window.setInterval(() => setTime(diff()), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${couple.shortFirstPerson} & ${couple.shortSecondPerson} Wedding`
  )}&dates=20261129T131500Z/20261129T161500Z&details=${encodeURIComponent(
    `Auspicious Wedding Ceremony of ${couple.firstPerson} & ${couple.secondPerson}`
  )}&location=${encodeURIComponent(common.calendarLocation)}`;


  return (
    <section id="countdown-section" className="mx-auto mt-14 w-full max-w-3xl px-4 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-200/90 sm:text-xs drop-shadow-sm">
        ✨ Counting Down to Forever ✨
      </p>

      {/* Single 1-line 4-column compact countdown */}
      <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
        {CARDS.map((c) => (
          <div
            key={c.key}
            className="glass-card rounded-2xl p-2 sm:p-3 transition-transform duration-300 hover:-translate-y-0.5 shadow-sm border border-amber-300/40 flex flex-col items-center justify-center"
            style={{ backgroundImage: c.bg }}
          >
            <div className="font-serif text-2xl sm:text-3xl font-bold text-crimson tabular-nums leading-none">
              {ready ? String(time[c.key as keyof typeof time]).padStart(2, "0") : "--"}
            </div>
            <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              {c.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <a
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-royal inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold shadow-md"
        >
          🗓️ Add to Google Calendar
        </a>
      </div>
    </section>
  );
}
