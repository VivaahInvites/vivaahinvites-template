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
      className="relative min-h-screen selection:bg-amber-200 selection:text-crimson overflow-x-hidden"
      style={{
        background: "var(--gradient-dreamy)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle royal gold decorative mandalas behind cards */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft golden aura at the top center */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(253,230,138,0.3)_0%,rgba(212,175,55,0.08)_50%,transparent_70%)] blur-2xl" />

        {/* Soft golden glow in middle */}
        <div className="absolute top-[45%] -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(254,215,170,0.25)_0%,rgba(212,175,55,0.06)_50%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[65%] -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(253,230,138,0.22)_0%,rgba(212,175,55,0.05)_50%,transparent_70%)] blur-3xl" />

        {/* Traditional Royal Mandala SVG Watermark behind cards */}
        <svg
          className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[700px] text-amber-500/5 stroke-current"
          viewBox="0 0 100 100"
          fill="none"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="15" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((i * Math.PI) / 6)}
              y2={50 + 45 * Math.sin((i * Math.PI) / 6)}
              strokeDasharray="2 3"
            />
          ))}
        </svg>

        <svg
          className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] text-amber-500/5 stroke-current"
          viewBox="0 0 100 100"
          fill="none"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="16" />
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
