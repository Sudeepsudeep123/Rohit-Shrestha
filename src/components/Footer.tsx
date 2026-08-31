import { Instagram, Facebook, MapPin } from 'lucide-react';
import { trainer } from '@/data/trainer';

// TikTok icon — lucide-react doesn't ship one.
function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-px relative py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl uppercase tracking-tight text-white">
              {trainer.name}
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {trainer.profession}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lime-300">
              {trainer.certification.full}
            </div>
            <div className="mt-5 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
              {trainer.gym} • {trainer.location.area} • {trainer.location.city}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.href);
                    }}
                    className="text-sm text-white/60 transition-colors hover:text-lime-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Connect
            </div>
            <div className="flex gap-3">
              <a
                href={trainer.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={trainer.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={trainer.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <TikTok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © 2026 {trainer.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            {trainer.profession} • {trainer.gym} {trainer.location.area}
          </p>
        </div>
      </div>
    </footer>
  );
}
