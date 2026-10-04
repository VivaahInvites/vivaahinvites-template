import { coupleImg } from "@/assets/images";
import { useWedding } from "@/config/WeddingContext";
import { Ambience } from "./Ambience";
import { Swastik } from "./Swastik";

export function Cover({ onOpen, closing }: { onOpen: () => void; closing: boolean }) {
  const { couple, photos } = useWedding();

  return (
    <div
      className={`fixed inset-0 z-50 h-screen overflow-hidden transition-all duration-1000 ${
        closing ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--gradient-velvet)" }}
    >
      {/* Repeating Mughal Jaali pattern on Cover */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#mughal-jali-pattern)" />
        </svg>
      </div>

      {/* Royal Golden Aura Glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,212,102,0.18)_0%,rgba(120,23,36,0.15)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      <Ambience count={18} />

      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <div className="glass-card gold-frame w-full max-w-sm sm:max-w-md rounded-3xl p-6 sm:p-8 text-center shadow-2xl flex flex-col items-center">
          {/* Sacred Ganesha Inscription */}
          <div className="flex items-center gap-2 text-xs text-amber-800/90 font-serif mb-1.5">
            <Swastik className="w-4 h-4 text-amber-700" />
            <span className="font-semibold tracking-widest text-crimson font-hindi text-sm">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <Swastik className="w-4 h-4 text-amber-700" />
          </div>

          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#b8860b]">
            ✨ The Royal Wedding Invitation ✨
          </p>

          <div className="mx-auto mt-2 h-px w-20 hairline-gold" />

          {/* Portrait circular frame */}
          <div className="animate-glow mx-auto mt-4 aspect-square w-48 sm:w-60 overflow-hidden rounded-full border-4 border-[#d4af37] bg-ivory shadow-[0_0_0_8px_rgba(247,238,222,0.85)] flex items-center justify-center">
            <img
              src={photos?.cover || couple.photo || coupleImg}
              alt={`${couple.shortFirstPerson} and ${couple.shortSecondPerson}`}
              width={1024}
              height={1024}
              onError={(e) => {
                e.currentTarget.src = coupleImg;
              }}
              className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Couple Names */}
          <div className="mt-4 flex flex-col items-center justify-center">
            <span className="font-script text-4xl sm:text-5xl text-crimson leading-tight tracking-wide drop-shadow-sm">
              {couple.shortFirstPerson}
            </span>
            <div className="flex items-center justify-center gap-3 my-0.5">
              <span className="h-px w-8 hairline-gold" />
              <span className="font-serif italic text-2xl sm:text-3xl text-[#d4af37] font-normal leading-none">
                &amp;
              </span>
              <span className="h-px w-8 hairline-gold" />
            </div>
            <span className="font-script text-4xl sm:text-5xl text-crimson leading-tight tracking-wide drop-shadow-sm">
              {couple.shortSecondPerson}
            </span>
          </div>

          <p className="mt-2 font-serif text-xs sm:text-sm italic text-muted-foreground">
            “Two Hearts, One Soul, Forever”
          </p>

          <button
            onClick={onOpen}
            className="btn-royal animate-glow mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            💌 Click to Open
          </button>
        </div>
      </div>
    </div>
  );
}
