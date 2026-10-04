export function ScrollCue() {
  const scrollToNext = () => {
    const el = document.getElementById("countdown-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-4">
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center gap-1.5 text-center text-amber-200/90 hover:text-amber-100 transition-colors cursor-pointer focus:outline-none"
        title="Scroll down to explore rituals"
      >
        <span className="font-hindi text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-1.5 drop-shadow-sm">
          <span className="text-amber-300">✦</span>
          <span>मांगलिक कार्यक्रम देखने हेतु नीचे स्क्रॉल करें</span>
          <span className="text-amber-300">✦</span>
        </span>
        <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.2em] text-amber-300/85 font-medium drop-shadow-xs">
          Scroll to explore ceremonies
        </span>

        {/* Animated Bouncing Chevron */}
        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 border border-[#d4af37] shadow-md group-hover:scale-110 transition-all animate-bounce">
          <svg
            className="w-4 h-4 text-[#781724]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
