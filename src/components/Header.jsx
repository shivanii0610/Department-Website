import { Link } from 'react-router-dom';
import { Search, MapIcon, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + College Name */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 transition-transform hover:scale-[1.01]">
            <img src="/Information/Logo/College logo.png" alt="College Logo" className="w-12 h-12 md:w-16 md:h-16 shrink-0 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-navy leading-tight">
                AJMVPS New Arts, Commerce & Science College
              </h1>
              <p className="text-xs text-gray-500">
                Tel: 0241-2324024 | Lal Taki Road, Ahmednagar 414001
              </p>
            </div>
          </Link>

          {/* Right side: social, search, sitemap */}
          <div className="flex items-center gap-3">
            {/* Social Icons - hidden on mobile */}
            <div className="hidden lg:flex items-center gap-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-section-bg flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-36 md:w-48 pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-section-bg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Sitemap */}
            <Link
              to="/sitemap"
              className="hidden md:flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
            >
              <MapIcon size={14} />
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
