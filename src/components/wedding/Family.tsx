import { useWedding } from "@/config/WeddingContext";

export function Family() {
  const { family, isBride } = useWedding();

  return (
    <section className="mx-auto mt-24 w-full max-w-3xl px-3 sm:px-6">
      {/* Outer Single Traditional Royal Patrika Frame */}
      <div className="glass-card gold-frame relative rounded-2xl sm:rounded-3xl p-5 sm:p-9 text-center shadow-lg transition-transform duration-300 hover:shadow-2xl">
        {/* Four Corner Ornamental Traditional Motifs */}
        <span className="absolute top-3 left-3 text-sm text-[#d4af37]/60 select-none">
          ❖
        </span>
        <span className="absolute top-3 right-3 text-sm text-[#d4af37]/60 select-none">
          ❖
        </span>
        <span className="absolute bottom-3 left-3 text-sm text-[#d4af37]/60 select-none">
          ❖
        </span>
        <span className="absolute bottom-3 right-3 text-sm text-[#d4af37]/60 select-none">
          ❖
        </span>

        {/* Auspicious Shloka at Top */}
        <p className="font-hindi text-xs sm:text-sm text-crimson/90 font-medium tracking-wide">
          ॥ मङ्गलं भगवान् विष्णुः मङ्गलं गरुडध्वजः । मङ्गलं पुण्डरीकाक्षो मङ्गलायतनो हरिः ॥
        </p>

        {/* Traditional Gold Divider */}
        <div className="mx-auto my-3 h-px w-36 hairline-gold" />

        {/* Main Royal Heading */}
        <h2 className="font-hindi text-2xl sm:text-3xl font-semibold text-crimson">
          ॥ सस्नेह निमंत्रण ॥
        </h2>
        <p className="mt-0.5 font-serif text-[11px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground font-hindi">
          {family.headerSub}
        </p>

        {/* 1. विनीत (Main Hosts - Parents) */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-500/[0.04] border border-[#d4af37]/30 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-crimson">
            <span>🪷</span>
            <h3 className="font-hindi text-xl font-semibold">
              {family.vineet.title}
            </h3>
          </div>
          <p className="mt-2 font-hindi text-lg sm:text-xl font-medium text-foreground">
            {family.vineet.names}
          </p>
          <p className="font-hindi text-xs sm:text-sm text-muted-foreground mt-0.5">
            {family.vineet.relation}
          </p>
          <p className="mt-1 font-hindi text-xs text-amber-800/80 font-medium">
            {family.vineet.clan}
          </p>
        </div>

        {/* Gold Hairline Divider */}
        <div className="mx-auto my-7 h-px w-3/4 hairline-gold" />

        {/* 2. Classic Two Columns: दर्शनाभिलाषी (Left) & स्वागतकर्ता (Right) */}
        <div className="grid gap-6 sm:grid-cols-2 relative text-center">
          {/* Vertical divider on desktop */}
          <div className="hidden sm:block absolute left-1/2 top-1 bottom-1 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />

          {/* Left Column: दर्शनाभिलाषी */}
          <div className="flex flex-col items-center p-4 rounded-xl bg-amber-500/[0.02] border border-[#d4af37]/20 sm:border-transparent">
            <span className="text-xl">🌸</span>
            <h3 className="mt-1 font-hindi text-xl font-semibold text-crimson">
              {family.darshanabhilashi.title}
            </h3>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold font-hindi">
              {family.darshanabhilashi.subtitle}
            </p>

            <div className="mt-3 space-y-2 font-hindi text-sm sm:text-base text-foreground">
              {family.darshanabhilashi.members.map((m) => (
                <p key={m.name}>
                  <span className="font-medium">{m.name}</span>{" "}
                  <span className="text-xs text-muted-foreground">{m.relation}</span>
                </p>
              ))}
            </div>
            <p className="mt-3.5 font-hindi text-xs text-amber-800/80 italic border-t border-[#d4af37]/20 pt-2 w-3/4">
              {family.darshanabhilashi.footer}
            </p>
          </div>

          {/* Right Column: स्वागतकर्ता */}
          <div className="flex flex-col items-center p-4 rounded-xl bg-amber-500/[0.02] border border-[#d4af37]/20 sm:border-transparent">
            <span className="text-xl">🪔</span>
            <h3 className="mt-1 font-hindi text-xl font-semibold text-crimson">
              {family.swagatkarta.title}
            </h3>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold font-hindi">
              {family.swagatkarta.subtitle}
            </p>

            <div className="mt-3 space-y-2 font-hindi text-sm sm:text-base text-foreground">
              {family.swagatkarta.members.map((m) => (
                <p key={m.name}>
                  <span className="font-medium">{m.name}</span>{" "}
                  <span className="text-xs text-muted-foreground">{m.relation}</span>
                </p>
              ))}
            </div>
            <p className="mt-3.5 font-hindi text-xs text-amber-800/80 italic border-t border-[#d4af37]/20 pt-2 w-3/4">
              {family.swagatkarta.footer}
            </p>
          </div>
        </div>

        {/* 3. बाल-मनुहार (Adapts affectionately to Groom or Bride side) */}
        <div className="mt-7 pt-4 border-t border-[#d4af37]/25 bg-amber-500/[0.03] rounded-xl p-3">
          <p className="font-hindi text-xs font-semibold text-crimson">
            ॥ बाल मनुहार ॥
          </p>
          <p className="font-hindi text-xs sm:text-sm text-foreground/90 italic mt-1 leading-relaxed">
            "भेज रहे हैं स्नेह निमंत्रण, प्यारे मेहमानों को बुलाने को।
            <br className="hidden sm:inline" />
            {isBride ? " दीदी की शादी में, भूल ना जाना आने को!" : " चाचू की शादी में, भूल ना जाना आने को!"}
          </p>
          <p className="font-hindi text-[11px] text-muted-foreground mt-1">
            — आरव, अनन्या, कबीर एवं समस्त बाल गोपाल
          </p>
        </div>

        {/* Bottom Sacred Invitation Note */}
        <div className="mt-5 pt-3">
          <p className="font-hindi text-xs text-foreground/80 italic">
            “आपकी गरिमामयी उपस्थिति एवं पावन आशीष सादर प्रार्थनीय है।”
          </p>
        </div>
      </div>
    </section>
  );
}
