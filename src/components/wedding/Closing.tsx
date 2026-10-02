import { useWedding } from "@/config/WeddingContext";

export function Closing() {
  const { couple, gratitudeTitle } = useWedding();

  return (
    <section className="mx-auto mt-20 w-full max-w-2xl px-4 text-center">
      <div className="glass-card gold-frame rounded-3xl px-6 py-9 shadow-xl">
        <h2 className="font-script text-4xl sm:text-5xl text-crimson">
          Grand Gratitude
        </h2>
        <p className="mt-4 font-serif text-base italic leading-relaxed text-foreground">
          “To our parents, siblings, cousins, and lifelong friends — every laugh you’ve shared with us, every word of guidance, and every memory has shaped the individuals we are today. Thank you for filling our hearts with joy and being an inseparable part of our story.”
        </p>
        <div className="mx-auto mt-6 h-px w-28 hairline-gold" />
        <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          {gratitudeTitle}
        </p>
        <div className="mt-4 flex flex-col items-center justify-center">
          <span className="font-script text-4xl sm:text-5xl text-crimson leading-none">
            {couple.shortFirstPerson}
          </span>
          <div className="flex items-center justify-center gap-2 my-1">
            <span className="h-px w-6 hairline-gold" />
            <span className="font-serif italic text-2xl text-[#d4af37] leading-none">
              &amp;
            </span>
            <span className="h-px w-6 hairline-gold" />
          </div>
          <span className="font-script text-4xl sm:text-5xl text-crimson leading-none">
            {couple.shortSecondPerson}
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { footerCopyright } = useWedding();

  return (
    <footer className="w-full mt-10 pt-8 pb-14 text-center border-t border-[#d4af37]/30">
      {/* Refined Luxury Hashtag with Gold Hairlines */}
      <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-serif tracking-[0.2em] text-[#822227] uppercase font-semibold">
        <span className="h-px w-8 bg-[#d4af37]/60" />
        <span>{footerCopyright}</span>
        <span className="h-px w-8 bg-[#d4af37]/60" />
      </div>

      {/* Crafted with ♥ by Vivaah Invites in Royal Maroon */}
      <div className="mt-3.5 text-xs sm:text-sm font-serif text-[#822227] flex items-center justify-center gap-1.5 flex-wrap">
        <span>Crafted with</span>
        <svg
          className="w-3.5 h-3.5 fill-current inline-block shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span>by</span>
        <a
          href="https://vivaahinvites.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#822227] hover:underline underline-offset-4 cursor-pointer"
        >
          Vivaah Invites
        </a>
      </div>

      {/* Create your own invite link in Royal Maroon */}
      <div className="mt-1.5">
        <a
          href="https://vivaahinvites.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-serif text-xs text-[#822227] hover:text-[#9e2d33] underline-offset-4 hover:underline cursor-pointer group"
        >
          <span>Create your own invite</span>
          <span className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </footer>
  );
}
