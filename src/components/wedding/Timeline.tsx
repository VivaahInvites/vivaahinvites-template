import { useWedding } from "@/config/WeddingContext";
import { ScrollReveal } from "./ScrollReveal";

export function Timeline() {
  const { events } = useWedding();

  return (
    <section className="mx-auto mt-20 w-full max-w-4xl px-3 sm:px-6">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="font-script text-4xl sm:text-5xl text-crimson">
          Wedding Events
        </h2>
        <p className="mt-1 font-hindi text-sm sm:text-base text-amber-900/80 font-medium">
          ॥ मांगलिक कार्यक्रम एवं शुभ मुहूर्त ॥
        </p>
        <div className="mx-auto mt-2 h-px w-28 hairline-gold" />
      </div>

      {/* Events List */}
      <div className="mt-10 space-y-5 sm:space-y-6">
        {events.map((e, idx) => (
          <ScrollReveal key={e.title} delay={idx * 60}>
            <article
              className="glass-card gold-frame w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
            {/* TOP: Title centered across full width */}
            <div className="flex items-baseline justify-center gap-2.5 pb-3 mb-3 sm:mb-4 border-b border-[#d4af37]/25 text-center">
              <h3 className="font-script text-2xl sm:text-3xl text-crimson leading-none">
                {e.title}
              </h3>
              <span className="text-xs sm:text-base font-serif text-[#d4af37] font-light">
                /
              </span>
              <span className="font-hindi text-base sm:text-xl font-normal text-amber-800 leading-none">
                {e.hindiTitle}
              </span>
            </div>

            {/* MIDDLE: Bigger Photo on left, Details on right */}
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Bigger Photo */}
              <img
                src={e.img}
                alt={`${e.title} ceremony`}
                loading="lazy"
                width={400}
                height={400}
                onError={(ev) => {
                  ev.currentTarget.src =
                    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85";
                }}
                className="h-24 w-24 sm:h-36 sm:w-36 shrink-0 rounded-2xl border-2 border-[#d4af37]/80 object-cover shadow-sm mt-0.5"
              />

              {/* Details */}
              <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground font-hindi">
                  {e.date}
                </p>

                {/* Main Time */}
                <p className="flex items-center gap-1.5 whitespace-nowrap font-medium text-xs sm:text-sm text-foreground">
                  <span className="text-xs text-amber-700">🕒</span>
                  <span>{e.time}</span>
                </p>

                {/* Venue */}
                <p className="flex items-start gap-1.5 text-xs sm:text-sm text-foreground/80">
                  <span className="text-xs text-crimson shrink-0 mt-0.5">📍</span>
                  <span className="leading-snug">{e.venue}</span>
                </p>
              </div>
            </div>

            {/* FULL-WIDTH CENTERED: Shubh Muhurat Section (properly aligned across card) */}
            {e.muhuratLine && (
              <div className="mt-4 pt-3.5 border-t border-[#d4af37]/30 w-full">
                {/* Heading Centered */}
                <div className="text-center mb-3">
                  <span className="text-xs sm:text-sm font-semibold text-crimson font-hindi tracking-wider">
                    ॥ शुभ मुहूर्त ॥
                  </span>
                </div>

                {/* Clean, compact centered list with minimal gap between name and time */}
                <div className="max-w-[240px] sm:max-w-[260px] mx-auto space-y-1.5 text-xs sm:text-sm font-serif">
                  {e.muhuratLine.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 border-b border-dashed border-[#d4af37]/25 pb-1 last:border-b-0"
                    >
                      <span className="flex items-center gap-1.5 font-hindi text-amber-950 font-medium">
                        <span className="text-sm select-none">{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="font-sans font-semibold text-crimson text-xs sm:text-sm whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
