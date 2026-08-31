export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 border-b border-retro-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-retro-gold/30 bg-retro-surface text-xs font-mono text-retro-gold">
            <span className="w-2 h-2 rounded-full bg-retro-gold animate-pulse"></span>
            1929 – 1987 • The Unrivaled Maestro
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-retro-cream leading-tight">
            The Voice That <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-retro-gold via-retro-amber to-yellow-200">
              Defined Generations
            </span>
          </h1>
          <p className="text-retro-muted text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Singer, actor, director, composer, and an untamable spirit. Explore the complete discography, cinematic archive, and eccentric tales of India’s most versatile playback legend.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#jukebox"
              className="px-7 py-3 rounded-full bg-retro-gold text-retro-dark font-semibold text-sm hover:brightness-110 shadow-lg shadow-retro-gold/20 transition"
            >
              Explore Jukebox
            </a>
            <a
              href="#chronicles"
              className="px-7 py-3 rounded-full border border-retro-border bg-retro-surface text-retro-cream font-semibold text-sm hover:border-retro-gold/50 transition"
            >
              Read Chronicles
            </a>
          </div>
        </div>

        {/* Right Vinyl Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Spinning Vinyl */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-950 to-neutral-800 p-4 shadow-2xl border-4 border-neutral-800 animate-spin-slow flex items-center justify-center">
              {/* Grooves */}
              <div className="w-full h-full rounded-full border border-neutral-700/40 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full border border-neutral-700/30 flex items-center justify-center">
                  {/* Center Label */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-retro-amber to-retro-gold flex flex-col items-center justify-center text-center p-2 shadow-inner border border-yellow-200">
                    <span className="text-[9px] uppercase tracking-widest text-neutral-900 font-bold">HMV Retro</span>
                    <span className="text-xs font-serif font-black text-neutral-900">KISHORE DA</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-retro-dark mt-1 border border-retro-gold/80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
