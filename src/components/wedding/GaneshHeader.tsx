import { useState } from "react";
import { Swastik } from "./Swastik";
import { ganeshaImg } from "@/assets/images";

interface GaneshHeaderProps {
  image?: string;
  title?: string;
  shloka?: string;
}

export function GaneshHeader({
  image,
  title = "॥ श्री गणेशाय नमः ॥",
  shloka,
}: GaneshHeaderProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl text-center pt-8 pb-4 px-4">
      {/* Sacred Swastik Hairline Header */}
      <div className="flex items-center justify-center gap-3 text-amber-300 mb-2">
        <Swastik className="w-5 h-5 text-amber-400" />
        <span className="h-px w-16 hairline-gold" />
        <Swastik className="w-5 h-5 text-amber-400" />
      </div>

      {/* Transparent Deity / Lord Ganesha Sacred Area (No card/box) */}
      <div className="relative mx-auto my-3 flex items-center justify-center">
        {/* Soft Warm Aura Glow */}
        <div className="absolute w-28 h-28 rounded-full bg-amber-400/25 blur-xl pointer-events-none" />

        {/* 100% Transparent container for PNG/illustration */}
        <div className="relative flex items-center justify-center h-24 sm:h-28 w-auto bg-transparent">
          {image && !imgError ? (
            <img
              src={image}
              alt="Lord Ganesha / Auspicious Deity"
              className="h-full w-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Traditional Ganesha Vector Fallback */
            <svg
              className="h-16 w-16 sm:h-20 sm:w-20 text-[#d4af37] drop-shadow-md"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Ornate Mukut */}
              <path d="M50 8 L58 24 L42 24 Z" fill="#f5d466" />
              <path d="M46 12 L54 12 L52 22 L48 22 Z" fill="#d4af37" />
              <circle cx="50" cy="9" r="2.5" fill="#fef08a" />
              {/* Sacred Tilak */}
              <path d="M47 26 Q50 32 53 26 Q50 35 47 26 Z" fill="#ef4444" />
              {/* Ears */}
              <path
                d="M38 28 C26 28 20 38 24 50 C26 56 34 54 36 46 C37 42 37 34 38 28 Z"
                fill="#b8860b"
              />
              <path
                d="M62 28 C74 28 80 38 76 50 C74 56 66 54 64 46 C63 42 63 34 62 28 Z"
                fill="#b8860b"
              />
              {/* Face */}
              <path
                d="M38 28 Q50 26 62 28 Q64 46 58 56 Q50 60 42 56 Q36 46 38 28 Z"
                fill="#d4af37"
              />
              {/* Tusk */}
              <path d="M42 54 L36 55 L40 52 Z" fill="#fef3c7" />
              {/* Trunk */}
              <path
                d="M48 46 Q47 62 52 70 Q56 76 66 75 Q72 74 72 68 Q72 64 66 65 Q58 66 55 58 Q53 50 53 46 Z"
                fill="#b8860b"
              />
              {/* Modak */}
              <circle cx="68" cy="65" r="4.5" fill="#fef08a" />
              {/* Eyes */}
              <ellipse cx="44" cy="38" rx="2" ry="3.5" fill="#1c1917" />
              <circle cx="44" cy="37" r="1" fill="#ffffff" />
              <ellipse cx="56" cy="38" rx="2" ry="3.5" fill="#1c1917" />
              <circle cx="56" cy="37" r="1" fill="#ffffff" />
            </svg>
          )}
        </div>
      </div>

      {/* Auspicious Inscription in Sacred Devanagari */}
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-amber-100 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
        {title}
      </h2>

      {/* Sanskrit Shloka Traditional on North Indian Wedding Cards */}
      <div className="mt-3 mx-auto max-w-md px-4 py-2 rounded-xl bg-amber-950/40 border border-[#d4af37]/40 shadow-sm backdrop-blur-xs">
        <p className="font-serif text-xs sm:text-sm text-amber-200 leading-relaxed font-medium drop-shadow-xs">
          {shloka || (
            <>
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </>
          )}
        </p>
      </div>

      <div className="mx-auto mt-4 h-px w-32 hairline-gold" />
    </div>
  );
}
