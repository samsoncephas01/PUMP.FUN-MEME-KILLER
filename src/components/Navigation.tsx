import React, { useState, useEffect } from 'react';
import { Menu, X, Skull } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavigationProps {
  onOpenDisclaimer?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-[#222222]'
          : 'bg-[#080808]/40 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Left: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#root')}
          className="group flex items-center gap-2.5 text-left shrink-0 text-decoration-none"
        >
          <div className="w-8 h-8 rounded-sm border border-[#00F0FF]/50 flex items-center justify-center bg-gradient-to-r from-[#00F0FF]/20 via-[#0d0d0d] to-[#B5FF32]/20 text-[#00F0FF] transition-transform duration-200 group-hover:scale-105 group-hover:border-[#00F0FF]">
            <Skull className="w-4 h-4 text-[#B5FF32]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-syne text-xs sm:text-sm font-extrabold tracking-wider text-[#F1F1E9] group-hover:text-white transition-colors">
              PUMP.FUN
            </span>
            <span className="font-mono-degen text-[10px] sm:text-xs font-bold tracking-widest bg-gradient-to-r from-[#00F0FF] to-[#B5FF32] bg-clip-text text-transparent">
              MEME KILLER
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono-degen tracking-wider text-[#F1F1E9]/75">
          <a
            href="#machine"
            onClick={(e) => handleScrollTo(e, '#machine')}
            className="hover:text-[#B5FF32] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#B5FF32]"
          >
            THE MACHINE
          </a>
          <a
            href="#damage"
            onClick={(e) => handleScrollTo(e, '#damage')}
            className="hover:text-[#B5FF32] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#B5FF32]"
          >
            THE DAMAGE
          </a>
          <a
            href="#timeline"
            onClick={(e) => handleScrollTo(e, '#timeline')}
            className="hover:text-[#B5FF32] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#B5FF32]"
          >
            THE TIMELINE
          </a>
          <a
            href="#manifesto"
            onClick={(e) => handleScrollTo(e, '#manifesto')}
            className="hover:text-[#B5FF32] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#B5FF32]"
          >
            THE MANIFESTO
          </a>
          <a
            href="#confessions"
            onClick={(e) => handleScrollTo(e, '#confessions')}
            className="hover:text-[#B5FF32] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#B5FF32]"
          >
            CONFESSIONS
          </a>
        </nav>

        {/* Right: Enter the Trenches CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#confessions"
            onClick={(e) => handleScrollTo(e, '#confessions')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 font-mono-degen text-xs font-bold tracking-wider text-[#080808] bg-[#B5FF32] hover:bg-[#c6ff59] active:translate-y-0.5 transition-all shadow-[0_0_15px_rgba(181,255,50,0.25)] border border-[#B5FF32] whitespace-nowrap"
          >
            ENTER THE TRENCHES
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F1F1E9] hover:text-[#B5FF32] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#222222] bg-[#0c0c0c]/98 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono-degen text-sm">
            <a
              href="#machine"
              onClick={(e) => handleScrollTo(e, '#machine')}
              className="text-[#F1F1E9] hover:text-[#B5FF32] py-2 border-b border-[#1c1c1c] transition-colors"
            >
              01. THE MACHINE
            </a>
            <a
              href="#damage"
              onClick={(e) => handleScrollTo(e, '#damage')}
              className="text-[#F1F1E9] hover:text-[#B5FF32] py-2 border-b border-[#1c1c1c] transition-colors"
            >
              02. THE DAMAGE
            </a>
            <a
              href="#timeline"
              onClick={(e) => handleScrollTo(e, '#timeline')}
              className="text-[#F1F1E9] hover:text-[#B5FF32] py-2 border-b border-[#1c1c1c] transition-colors"
            >
              03. THE TIMELINE
            </a>
            <a
              href="#manifesto"
              onClick={(e) => handleScrollTo(e, '#manifesto')}
              className="text-[#F1F1E9] hover:text-[#B5FF32] py-2 border-b border-[#1c1c1c] transition-colors"
            >
              04. THE MANIFESTO
            </a>
            <a
              href="#confessions"
              onClick={(e) => handleScrollTo(e, '#confessions')}
              className="text-[#F1F1E9] hover:text-[#B5FF32] py-2 border-b border-[#1c1c1c] transition-colors"
            >
              05. CONFESSIONS
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#confessions"
              onClick={(e) => handleScrollTo(e, '#confessions')}
              className="w-full inline-flex items-center justify-center py-3 font-mono-degen text-xs font-bold text-[#080808] bg-[#B5FF32] hover:bg-[#c6ff59] tracking-wider transition-colors"
            >
              ENTER THE TRENCHES
            </a>
          </div>

          <p className="text-[11px] font-mono-degen text-[#666666] pt-2">
            {SITE_CONFIG.disclaimerShort}
          </p>
        </div>
      )}
    </header>
  );
};
