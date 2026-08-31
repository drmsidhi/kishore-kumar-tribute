"use client";
import { useState } from "react";

const TRACKS = [
  { id: 1, title: "Pal Pal Dil Ke Paas", film: "Blackmail (1973)", mood: "Romantic", composer: "Kalyanji-Anandji", actor: "Dharmendra" },
  { id: 2, title: "Zindagi Ka Safar", film: "Aap Ki Kasam (1974)", mood: "Soulful", composer: "R.D. Burman", actor: "Rajesh Khanna" },
  { id: 3, title: "Ek Ladki Bheegi Bhaagi Si", film: "Chalti Ka Naam Gaadi (1958)", mood: "Playful", composer: "S.D. Burman", actor: "Kishore Kumar" },
  { id: 4, title: "Yeh Shaam Mastani", film: "Kati Patang (1971)", mood: "Romantic", composer: "R.D. Burman", actor: "Rajesh Khanna" },
  { id: 5, title: "Aake Seedhi Lagi Dil Pe", film: "Half Ticket (1962)", mood: "Yodeling", composer: "Salil Chowdhury", actor: "Kishore & Pran" },
  { id: 6, title: "Chingari Koi Bhadke", film: "Amar Prem (1972)", mood: "Soulful", composer: "R.D. Burman", actor: "Rajesh Khanna" },
  { id: 7, title: "O Saathi Re", film: "Muqaddar Ka Sikandar (1978)", mood: "Soulful", composer: "Kalyanji-Anandji", actor: "Amitabh Bachchan" },
  { id: 8, title: "Khaike Paan Banaraswala", film: "Don (1978)", mood: "Playful", composer: "Kalyanji-Anandji", actor: "Amitabh Bachchan" },
  { id: 9, title: "Ina Mina Dika", film: "Aasha (1957)", mood: "Yodeling", composer: "C. Ramchandra", actor: "Kishore Kumar" },
];

const CATEGORIES = ["All", "Romantic", "Soulful", "Playful", "Yodeling"];

export default function Jukebox() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTracks = activeTab === "All" 
    ? TRACKS 
    : TRACKS.filter((t) => t.mood === activeTab);

  return (
    <section id="jukebox" className="py-20 max-w-6xl mx-auto px-6 border-b border-retro-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-retro-gold font-mono text-xs uppercase tracking-widest">Selected Discography</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-retro-cream mt-2">The Mood Jukebox</h2>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab
                  ? "bg-retro-gold text-retro-dark shadow-md"
                  : "bg-retro-surface text-retro-muted hover:text-retro-cream border border-retro-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Track Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="p-6 rounded-xl bg-retro-surface border border-retro-border hover:border-retro-gold/50 transition-all group relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-retro-gold uppercase tracking-wider">{track.mood}</span>
                  <h3 className="text-lg font-serif font-bold text-retro-cream mt-1 group-hover:text-retro-gold transition">
                    {track.title}
                  </h3>
                  <p className="text-xs text-retro-muted mt-1">{track.film}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-retro-dark border border-retro-border flex items-center justify-center text-retro-gold text-xs group-hover:scale-110 transition shrink-0">
                  ▶
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-retro-border/50 text-[11px] text-retro-muted flex justify-between items-center">
              <span>Music: {track.composer}</span>
              <span className="text-retro-gold/80 hover:underline cursor-pointer">Listen ↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
