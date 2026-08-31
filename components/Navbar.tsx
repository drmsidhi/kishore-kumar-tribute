import Link from "next/link";

const navLinks = [
  { name: "Jukebox", href: "#jukebox" },
  { name: "Cinema", href: "#cinema" },
  { name: "Chronicles", href: "#chronicles" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-retro-dark/85 border-b border-retro-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-retro-gold flex items-center justify-center font-serif text-retro-gold font-bold group-hover:bg-retro-gold group-hover:text-retro-dark transition-all">
            KK
          </div>
          <span className="font-serif text-xl font-bold tracking-wide text-retro-cream">
            Kishore <span className="text-retro-gold">Kumar</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-retro-muted hover:text-retro-gold transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <a
          href="#jukebox"
          className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-retro-gold/10 text-retro-gold border border-retro-gold/30 rounded-full hover:bg-retro-gold hover:text-retro-dark transition-all duration-300"
        >
          Play Hits
        </a>
      </div>
    </header>
  );
}
