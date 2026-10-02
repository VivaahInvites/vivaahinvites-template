interface KalashProps {
  className?: string;
  size?: number;
  opacity?: number;
}

/**
 * Traditional Mangal Kalash (मंगल कलश)
 * Featuring:
 * - Golden brass pot (घट) with sacred Swastik & Kalava thread
 * - Fanned auspicious Mango Leaves (आम्रपल्लव / आम के पत्ते)
 * - Sacred Shrifal (जटा नारियल / Coconut) with red Tilak
 */
export function KalashArt({ className = "", size = 120, opacity = 1 }: KalashProps) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 100 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        {/* Gold Pot Gradient */}
        <linearGradient id="goldPotGrad" x1="20" y1="65" x2="80" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#eab308" />
          <stop offset="70%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>

        {/* Mango Leaf Green Gradient */}
        <linearGradient id="leafGrad1" x1="50" y1="35" x2="15" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="50" y1="35" x2="85" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="leafGradCenter" x1="50" y1="15" x2="50" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>

        {/* Coconut Brown Gradient */}
        <linearGradient id="nariyalGrad" x1="38" y1="20" x2="62" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="45%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>

        {/* Sacred Kumkum Red */}
        <linearGradient id="kumkumGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>

      {/* --- 1. AAM KE PATTE (MANGO LEAVES / आम्रपल्लव) fanning out --- */}
      {/* Outer Left Leaf */}
      <path
        d="M50 56 C38 52 24 50 14 40 C10 36 8 30 10 26 C15 32 28 42 50 52 Z"
        fill="url(#leafGrad1)"
        stroke="#14532d"
        strokeWidth="0.8"
      />
      {/* Mid Left Leaf */}
      <path
        d="M50 54 C42 46 30 38 22 24 C20 20 22 15 25 14 C27 20 38 34 50 50 Z"
        fill="url(#leafGrad1)"
        stroke="#14532d"
        strokeWidth="0.8"
      />

      {/* Outer Right Leaf */}
      <path
        d="M50 56 C62 52 76 50 86 40 C90 36 92 30 90 26 C85 32 72 42 50 52 Z"
        fill="url(#leafGrad2)"
        stroke="#14532d"
        strokeWidth="0.8"
      />
      {/* Mid Right Leaf */}
      <path
        d="M50 54 C58 46 70 38 78 24 C80 20 78 15 75 14 C73 20 62 34 50 50 Z"
        fill="url(#leafGrad2)"
        stroke="#14532d"
        strokeWidth="0.8"
      />

      {/* Center Left Leaf */}
      <path
        d="M50 52 C46 40 40 25 36 12 C36 8 40 6 42 6 C44 14 48 30 50 48 Z"
        fill="url(#leafGradCenter)"
        stroke="#14532d"
        strokeWidth="0.8"
      />
      {/* Center Right Leaf */}
      <path
        d="M50 52 C54 40 60 25 64 12 C64 8 60 6 58 6 C56 14 52 30 50 48 Z"
        fill="url(#leafGradCenter)"
        stroke="#14532d"
        strokeWidth="0.8"
      />

      {/* --- 2. SHRIFAL / NARIYAL (COCONUT) --- */}
      {/* Coconut oval body */}
      <ellipse cx="50" cy="38" rx="13" ry="17" fill="url(#nariyalGrad)" stroke="#451a03" strokeWidth="1" />
      {/* Coconut top tuft / shikha */}
      <path d="M46 22 Q50 14 54 22 Z" fill="#78350f" stroke="#451a03" strokeWidth="0.8" />
      {/* Coconut fibers texture */}
      <path d="M45 28 Q43 38 46 48" stroke="#a16207" strokeWidth="0.6" strokeDasharray="1 1.5" />
      <path d="M50 25 Q50 38 50 50" stroke="#ca8a04" strokeWidth="0.7" strokeDasharray="1 2" />
      <path d="M55 28 Q57 38 54 48" stroke="#a16207" strokeWidth="0.6" strokeDasharray="1 1.5" />
      {/* Auspicious Tilak on Nariyal */}
      <circle cx="50" cy="33" r="2.5" fill="url(#kumkumGrad)" />
      <circle cx="50" cy="33" r="1" fill="#fef08a" />

      {/* --- 3. KALASH POT (घट / लोटा) --- */}
      {/* Pot Neck Rim (कंठ) */}
      <ellipse cx="50" cy="56" rx="16" ry="4" fill="url(#goldPotGrad)" stroke="#78350f" strokeWidth="1" />
      <ellipse cx="50" cy="56" rx="13" ry="2.5" fill="#ca8a04" />

      {/* Sacred Thread / Kalava (मौली / कलावा धागा) tied at the neck */}
      <path d="M35 59 Q50 63 65 59" stroke="#dc2626" strokeWidth="2.5" />
      <path d="M36 61 Q50 65 64 61" stroke="#facc15" strokeWidth="1.2" strokeDasharray="2 2" />

      {/* Pot Main Round Belly */}
      <path
        d="M37 60 
           C28 65 20 78 22 92 
           C24 104 36 108 50 108 
           C64 108 76 104 78 92 
           C80 78 72 65 63 60 
           Z"
        fill="url(#goldPotGrad)"
        stroke="#78350f"
        strokeWidth="1.2"
      />

      {/* Pot Base (तल) */}
      <path d="M36 107 C36 112 64 112 64 107 Z" fill="#854d0e" stroke="#78350f" strokeWidth="1" />

      {/* Sacred Auspicious Swastik on the Kalash Belly */}
      <g stroke="#991b1b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Horizontal & Vertical Main Cross */}
        <line x1="42" y1="84" x2="58" y2="84" />
        <line x1="50" y1="76" x2="50" y2="92" />
        {/* Arms */}
        <line x1="58" y1="84" x2="58" y2="90" />
        <line x1="42" y1="84" x2="42" y2="78" />
        <line x1="50" y1="76" x2="56" y2="76" />
        <line x1="50" y1="92" x2="44" y2="92" />
        {/* 4 Auspicious Bindus / Dots */}
        <circle cx="46" cy="80" r="0.8" fill="#991b1b" />
        <circle cx="54" cy="80" r="0.8" fill="#991b1b" />
        <circle cx="46" cy="88" r="0.8" fill="#991b1b" />
        <circle cx="54" cy="88" r="0.8" fill="#991b1b" />
      </g>

      {/* Gold Highlights & Sheen */}
      <path
        d="M26 84 C26 76 30 68 36 64"
        stroke="#fef08a"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Traditional Mango Leaves Toran / Amra Pallav (आम्रपल्लव वंदनवार)
 * Draped across top borders with Marigold (गेंदा) floral motifs
 */
export function MangoLeavesToran() {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none flex justify-center opacity-85">
      <svg
        className="w-full max-w-5xl h-12 sm:h-16"
        viewBox="0 0 1000 70"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="toranLeaf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
        </defs>

        {/* Golden Toran Sacred String / Dori */}
        <path
          d="M0 8 Q 125 22 250 8 Q 375 22 500 8 Q 625 22 750 8 Q 875 22 1000 8"
          stroke="#ca8a04"
          strokeWidth="2.5"
          fill="none"
        />

        {/* 16 Hanging Mango Leaves (Aam ke Patte) in clusters along the curve */}
        {Array.from({ length: 17 }).map((_, i) => {
          const x = 30 + i * 58;
          // Follow the curve y position
          const wavePhase = (x % 250) / 250;
          const curveY = 8 + Math.sin(wavePhase * Math.PI) * 14;

          return (
            <g key={i} transform={`translate(${x}, ${curveY})`}>
              {/* Marigold flower bud at suspension point */}
              <circle cx="0" cy="0" r="5" fill="url(#marigoldOrange)" />
              <circle cx="0" cy="0" r="2" fill="#ef4444" />

              {/* Pointed Hanging Mango Leaf (आम का पत्ता) */}
              <path
                d="M-7 3 C-10 18 -6 32 0 44 C6 32 10 18 7 3 Z"
                fill="url(#toranLeaf)"
                stroke="#14532d"
                strokeWidth="0.8"
              />
              {/* Central Leaf Vein */}
              <line x1="0" y1="3" x2="0" y2="38" stroke="#86efac" strokeWidth="0.8" opacity="0.8" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Background Traditional Decor Layer
 * Features subtle, elegant Kalash with Mango Leaves in the corners & backdrop
 */
export function BackgroundKalashDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Auspicious Mango Leaves Toran hanging at the very top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <MangoLeavesToran />
      </div>

      {/* 2. Top-Left Traditional Kalash Accent */}
      <div className="absolute top-12 -left-6 sm:left-4 md:left-8 opacity-25 hover:opacity-40 transition-opacity duration-700 transform -rotate-12 scale-90 sm:scale-100">
        <KalashArt size={110} />
      </div>

      {/* 3. Top-Right Traditional Kalash Accent */}
      <div className="absolute top-12 -right-6 sm:right-4 md:right-8 opacity-25 hover:opacity-40 transition-opacity duration-700 transform rotate-12 scale-90 sm:scale-100">
        <KalashArt size={110} />
      </div>

      {/* 4. Mid-Page Left Decorative Kalash with Mango Leaves Watermark */}
      <div className="absolute top-[42%] -left-10 sm:left-2 md:left-6 opacity-20 transform -rotate-6 scale-95 sm:scale-110">
        <KalashArt size={120} />
      </div>

      {/* 5. Mid-Page Right Decorative Kalash with Mango Leaves Watermark */}
      <div className="absolute top-[68%] -right-10 sm:right-2 md:right-6 opacity-20 transform rotate-6 scale-95 sm:scale-110">
        <KalashArt size={120} />
      </div>

      {/* 6. Soft Watermark Kalash in Central Background behind cards */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 opacity-[0.06] transform scale-150">
        <KalashArt size={320} />
      </div>
    </div>
  );
}
