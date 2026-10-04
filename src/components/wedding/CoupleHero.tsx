import { coupleImg } from "@/assets/images";
import { useWedding } from "@/config/WeddingContext";

export function CoupleHero() {
  const { couple, photos } = useWedding();

  return (
    <section className="mx-auto w-full max-w-2xl px-4 pt-10 text-center">
      {/* Pristine Gold Frame without any hashtags or stickers blocking the couple photo */}
      <div className="glass-card gold-frame relative rounded-3xl p-4 sm:p-6 shadow-xl">
        <img
          src={photos?.couple || couple.photo || coupleImg}
          alt={`${couple.firstPerson} and ${couple.secondPerson} in royal wedding attire`}
          width={1024}
          height={1024}
          onError={(e) => {
            e.currentTarget.src = coupleImg;
          }}
          className="mx-auto w-full rounded-[1.25rem] object-cover max-h-[500px]"
        />
      </div>

      {/* Royal Couple Name Presentation (Strictly 3 Centered Lines) */}
      <div className="mt-7 flex flex-col items-center justify-center">
        {/* Line 1: First Person (Groom or Bride based on Side) */}
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-100 drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] leading-tight tracking-wide">
          {couple.firstPerson}
        </h2>

        {/* Line 2: Centered & with Royal Gold Hairlines */}
        <div className="flex items-center justify-center gap-3 my-1.5 sm:my-2 w-44 sm:w-56">
          <span className="h-px flex-1 hairline-gold" />
          <span className="font-serif italic text-2xl sm:text-3xl text-amber-300 font-normal leading-none select-none">
            &amp;
          </span>
          <span className="h-px flex-1 hairline-gold" />
        </div>

        {/* Line 3: Second Person */}
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-100 drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] leading-tight tracking-wide">
          {couple.secondPerson}
        </h2>

        {/* Subtle decorative motif */}
        <div className="flex items-center justify-center gap-2 mt-3 text-amber-400">
          <span className="text-xs">✨</span>
          <span className="text-xs">❖</span>
          <span className="text-xs">✨</span>
        </div>
      </div>

      {/* Short, crisp, and heartfelt invitation line */}
      <p className="mx-auto mt-4 max-w-md font-serif text-sm sm:text-base italic text-amber-100/85 leading-relaxed drop-shadow-xs">
        {couple.invitationQuote}
      </p>
    </section>
  );
}

