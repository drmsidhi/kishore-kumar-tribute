"use client";
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Rare Studio" | "LP Covers" | "Concerts" | "Candid";
  caption: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "The Recording Session",
    category: "Rare Studio",
    caption: "Kishore Da sharing a light moment with R.D. Burman during the 1970s Pancham studio sessions.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Aradhana Original Vinyl",
    category: "LP Covers",
    caption: "The iconic 1969 LP record sleeve of 'Aradhana' that cemented his legendary playback era.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Stage Persona in London",
    category: "Concerts",
    caption: "Electrifying live performance at Wembley Arena during his landmark 1980s world tour.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Gouri Kunj Retreat",
    category: "Candid",
    caption: "A rare relaxed moment at his famous Juhu bungalow, surrounded by nature and peace.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="archives" className="py-20 max-w-6xl mx-auto px-6 border-b border-retro-border">
      <div className="max-w-xl mb-12">
        <span className="text-retro-gold font-mono text-xs uppercase tracking-widest">Visual Legacy</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-retro-cream mt-2">Vintage Archives & Gallery</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-retro-surface border border-retro-border hover:border-retro-gold/60 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <span className="absolute top-3 left-3 bg-retro-dark/80 backdrop-blur-sm text-retro-gold text-[10px] font-mono px-2.5 py-1 rounded-full border border-retro-gold/30">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-serif font-semibold text-retro-cream text-base group-hover:text-retro-gold transition">
                {item.title}
              </h3>
              <p className="text-retro-muted text-xs mt-1 line-clamp-2">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-retro-surface border border-retro-gold/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <img src={activePhoto.image} alt={activePhoto.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="text-retro-gold text-xs font-mono">{activePhoto.category}</span>
              <h3 className="text-xl font-serif font-bold text-retro-cream mt-1 mb-2">{activePhoto.title}</h3>
              <p className="text-retro-muted text-sm leading-relaxed">{activePhoto.caption}</p>
              <button
                onClick={() => setActivePhoto(null)}
                className="mt-6 w-full py-2 bg-retro-gold/10 text-retro-gold border border-retro-gold/30 rounded-lg hover:bg-retro-gold hover:text-retro-dark text-xs font-semibold uppercase tracking-wider transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
