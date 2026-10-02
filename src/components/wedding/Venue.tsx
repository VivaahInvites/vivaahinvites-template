import { useWedding } from "@/config/WeddingContext";

export function Venue() {
  const { venue } = useWedding();

  return (
    <section className="mx-auto mt-24 w-full max-w-3xl px-4 text-center">
      <h2 className="font-script text-4xl sm:text-5xl text-crimson">
        {venue.title}
      </h2>
      <div className="mx-auto mt-3 h-px w-32 hairline-gold" />

      <div className="glass-card gold-frame mt-7 overflow-hidden rounded-3xl p-5 sm:p-7 shadow-xl">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-crimson">
          {venue.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {venue.address}
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-amber-300/40 shadow-inner bg-amber-50/30">
          <iframe
            title="Wedding venue map"
            src={venue.mapEmbed}
            loading="lazy"
            className="h-64 w-full sm:h-80"
            style={{ border: 0 }}
          />
        </div>

        <a
          href={venue.mapLink}
          target="_blank"
          rel="noreferrer"
          className="btn-royal mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          📍 Open in Google Maps (Get Directions)
        </a>
      </div>
    </section>
  );
}
