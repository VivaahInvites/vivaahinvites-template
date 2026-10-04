import { useState } from "react";
import { useWedding } from "@/config/WeddingContext";

export function Hashtags() {
  const { hashtag, couple } = useWedding();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (tag: string) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopied(tag);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section className="mx-auto mt-24 w-full max-w-2xl px-4">
      <div className="glass-card gold-frame rounded-3xl px-6 py-8 text-center shadow-xl">
        <span className="glass-card inline-block rounded-full px-4 py-1.5 text-[11px] tracking-wide text-crimson font-medium">
          📷 Capture &amp; Share The Magic ✨
        </span>
        <h2 className="font-script text-4xl mt-4 text-crimson">
          Wedding Hashtag
        </h2>
        <p className="mt-1 font-serif text-sm italic text-muted-foreground">
          “Help us capture every smile, tear, and dance move!”
        </p>

        {/* Clean Royal Hashtag Button */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => copy(hashtag)}
            className="btn-royal rounded-full px-8 py-3 text-base font-semibold shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95 tracking-wide"
            title="Click to copy hashtag"
          >
            {hashtag}
          </button>
        </div>

        {copied && (
          <p className="mt-2.5 text-xs font-medium text-crimson animate-fade-in">
            ✨ Hashtag copied! Share your memories with us.
          </p>
        )}

        <div className="mt-7 rounded-2xl border border-amber-300/40 bg-amber-50/60 px-5 py-4">
          <p className="font-serif text-sm italic text-foreground">
            📸 Tag your photos, selfies, and Instagram Reels with our hashtag so {couple.shortFirstPerson} &amp; {couple.shortSecondPerson} can cherish them forever!
          </p>
        </div>
      </div>
    </section>
  );
}
