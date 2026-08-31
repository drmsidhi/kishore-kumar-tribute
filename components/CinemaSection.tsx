const FILMS = [
  { title: "Chalti Ka Naam Gaadi", year: "1958", role: "Actor & Singer", desc: "A timeless comedic masterpiece co-starring his brothers Ashok and Anoop Kumar alongside Madhubala." },
  { title: "Half Ticket", year: "1962", role: "Actor & Singer", desc: "A tour de force of physical comedy and vocal gymnastics featuring the legendary duet with himself." },
  { title: "Padosan", year: "1968", role: "Actor & Singer", desc: "Iconic portrayal of Vidyapati, the musical guru in one of Indian cinema's greatest comedies." },
  { title: "Door Gagan Ki Chhaon Mein", year: "1964", role: "Director & Composer", desc: "A deeply poignant directorial drama showcasing his profound emotional range beyond comedy." }
];

export default function CinemaSection() {
  return (
    <section id="cinema" className="py-20 max-w-6xl mx-auto px-6 border-b border-retro-border">
      <div className="max-w-xl mb-12">
        <span className="text-retro-gold font-mono text-xs uppercase tracking-widest">Cinematic Versatility</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-retro-cream mt-2">The Actor & Director</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FILMS.map((film, idx) => (
          <div key={idx} className="bg-retro-surface/60 border border-retro-border p-6 rounded-xl flex flex-col justify-between hover:border-retro-gold/40 transition">
            <div>
              <span className="text-[11px] font-mono text-retro-amber">{film.year} • {film.role}</span>
              <h3 className="text-lg font-serif font-bold text-retro-cream mt-2 mb-2">{film.title}</h3>
              <p className="text-xs text-retro-muted leading-relaxed">{film.desc}</p>
            </div>
            <div className="mt-6 pt-3 border-t border-retro-border/40 text-[11px] text-retro-gold font-mono">
              Classic Archive
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
