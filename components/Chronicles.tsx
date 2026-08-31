const STORIES = [
  {
    title: "The Signboard at 'Gouri Kunj'",
    tag: "Eccentric Genius",
    desc: "He famously placed a sign outside his bungalow that read 'Beware of Kishore' and bit a producer's hand when asked if he was truly that wild.",
  },
  {
    title: "The Double Voice Miracle",
    tag: "Half Ticket (1962)",
    desc: "When Lata Mangeshkar was unavailable, Kishore Da sang both the male and female vocals for 'Aake Seedhi Lagi Dil Pe' in a single seamless take.",
  },
  {
    title: "The Emergency Broadcast Ban",
    tag: "1975 Resistance",
    desc: "Refusing to sing for a political rally during the Indian Emergency led to a complete ban on his songs on All India Radio and Doordarshan.",
  },
];

export default function Chronicles() {
  return (
    <section id="chronicles" className="py-20 max-w-6xl mx-auto px-6 border-b border-retro-border">
      <div className="max-w-xl mb-12">
        <span className="text-retro-gold font-mono text-xs uppercase tracking-widest">Lore & Legends</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-retro-cream mt-2">The Kishore Chronicles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STORIES.map((item, idx) => (
          <div key={idx} className="bg-retro-surface/50 border border-retro-border p-6 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-retro-amber">{item.tag}</span>
              <h3 className="text-xl font-serif font-semibold text-retro-cream mt-2 mb-3">{item.title}</h3>
              <p className="text-sm text-retro-muted leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-6 text-xs text-retro-gold font-medium">Archive Reference #{idx + 101}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
