import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { WeddingProvider, useWedding } from "@/config/WeddingContext";
import { GaneshHeader } from "@/components/wedding/GaneshHeader";
import { Ambience } from "@/components/wedding/Ambience";
import { Closing, Footer } from "@/components/wedding/Closing";
import { Countdown } from "@/components/wedding/Countdown";
import { CoupleHero } from "@/components/wedding/CoupleHero";
import { Cover } from "@/components/wedding/Cover";
import { Family } from "@/components/wedding/Family";
import { Hashtags } from "@/components/wedding/Hashtags";
import { ScratchCard } from "@/components/wedding/ScratchCard";
import { Timeline } from "@/components/wedding/Timeline";
import { Venue } from "@/components/wedding/Venue";
import { ScrollReveal } from "@/components/wedding/ScrollReveal";
import { ScrollCue } from "@/components/wedding/ScrollCue";
import { useWeddingAudio } from "@/lib/useWeddingAudio";

function InvitationContent() {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);
  const { playing, start, toggle } = useWeddingAudio();
  const { common } = useWedding();

  const open = () => {
    void start();
    setClosing(true);
    window.setTimeout(() => setOpened(true), 950);
  };

  return (
    <main
      className="relative min-h-screen selection:bg-amber-400/30 selection:text-amber-100 overflow-x-hidden"
      style={{
        background: "var(--gradient-velvet)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Royal Mughal Jaali & Damask Watermark Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* SVG Repeating Traditional Mughal Jaali Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mughal-jali-pattern" width="56" height="56" patternUnits="userSpaceOnUse">
              {/* Outer delicate gold diamond grid */}
              <path
                d="M28 0 L56 28 L28 56 L0 28 Z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.5"
                strokeOpacity="0.18"
              />
              {/* Inner floral star motif */}
              <circle cx="28" cy="28" r="3" fill="#d4af37" fillOpacity="0.14" />
              <path
                d="M28 20 C28 25 31 28 36 28 C31 28 28 31 28 36 C28 31 25 28 20 28 C25 28 28 25 28 20 Z"
                fill="none"
                stroke="#f5d466"
                strokeWidth="0.6"
                strokeOpacity="0.22"
              />
              {/* Corner connector dots */}
              <circle cx="0" cy="0" r="1.5" fill="#d4af37" fillOpacity="0.2" />
              <circle cx="56" cy="0" r="1.5" fill="#d4af37" fillOpacity="0.2" />
              <circle cx="0" cy="56" r="1.5" fill="#d4af37" fillOpacity="0.2" />
              <circle cx="56" cy="56" r="1.5" fill="#d4af37" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mughal-jali-pattern)" />
        </svg>

        {/* Soft golden aura at the top center for divine blessings */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(245,212,102,0.22)_0%,rgba(120,23,36,0.18)_50%,transparent_75%)] blur-3xl" />

        {/* Soft golden Diya ambient glows */}
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,rgba(88,16,26,0.2)_50%,transparent_75%)] blur-3xl" />
        <div className="absolute top-[65%] -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,212,102,0.15)_0%,rgba(63,9,16,0.25)_50%,transparent_75%)] blur-3xl" />

        {/* Sacred Mandap & Mandala Watermarks behind cards */}
        <svg
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[850px] text-amber-400/8 stroke-current"
          viewBox="0 0 100 100"
          fill="none"
          strokeWidth="0.4"
        >
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1.5 2" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="18" strokeDasharray="1 1.5" />
          <circle cx="50" cy="50" r="8" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 46 * Math.cos((i * Math.PI) / 8)}
              y2={50 + 46 * Math.sin((i * Math.PI) / 8)}
              strokeDasharray="1 2.5"
            />
          ))}
        </svg>

        <svg
          className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] text-amber-400/6 stroke-current"
          viewBox="0 0 100 100"
          fill="none"
          strokeWidth="0.4"
        >
          <circle cx="50" cy="50" r="44" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="32" />
          <circle cx="50" cy="50" r="20" strokeDasharray="1.5 2" />
        </svg>
      </div>

      {/* Royal Cover with "Click to Open" */}
      {!opened && <Cover onOpen={open} closing={closing} />}

      {/* Main Invitation Sections */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          opened ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Ambience count={18} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal delay={100} direction="fade">
            <GaneshHeader image={common?.ganeshaPhoto} />
          </ScrollReveal>

          <ScrollReveal delay={250} direction="up">
            <CoupleHero />
            <ScrollCue />
          </ScrollReveal>

          <ScrollReveal delay={120} direction="up">
            <Countdown />
          </ScrollReveal>

          <ScrollReveal delay={140} direction="scale">
            <ScratchCard />
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            <Timeline />
          </ScrollReveal>

          <ScrollReveal delay={120} direction="up">
            <Family />
          </ScrollReveal>

          <ScrollReveal delay={100} direction="fade">
            <Hashtags />
          </ScrollReveal>

          <ScrollReveal delay={120} direction="up">
            <Venue />
          </ScrollReveal>

          <ScrollReveal delay={140} direction="scale">
            <Closing />
          </ScrollReveal>

          <Footer />
        </div>
      </div>

      {/* Sleek, Compact Sound Icon */}
      {opened && (
        <button
          onClick={toggle}
          aria-label={playing ? "Mute music" : "Play music"}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#822227] hover:bg-[#96272d] border-2 border-[#d4af37] shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          title={playing ? "Music Playing (Click to Mute)" : "Music Muted (Click to Play)"}
        >
          {playing ? (
            <Volume2 className="w-5 h-5 text-[#fcedd0]" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#fcedd0]" />
          )}
        </button>
      )}
    </main>
  );
}

export default function App() {
  return (
    <WeddingProvider>
      <InvitationContent />
    </WeddingProvider>
  );
}
