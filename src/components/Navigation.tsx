import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = ['machine', 'damage', 'timeline', 'manifesto', 'confessions'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080A08]/92 backdrop-blur-md border-b border-[#181D18]'
          : 'bg-[#080A08]/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Left: Brand Mark & Editorial Wordmark */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#root-content')}
          className="group flex items-center gap-3 shrink-0 text-decoration-none"
        >
          {/* Custom fractured capsule mark */}
          <div className="w-7 h-7 rounded-sm border border-[#1f261f] bg-[#0d100d] flex items-center justify-center relative overflow-hidden group-hover:border-[#B5FF32]/60 transition-colors">
            <div className="w-2.5 h-4 rounded-full border border-[#B5FF32]/80 flex flex-col overflow-hidden rotate-45">
              <div className="w-full h-1/2 bg-[#00F0FF]/80" />
              <div className="w-full h-1/2 bg-[#B5FF32]" />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-display text-xs font-bold tracking-wider text-[#F1F1E9] group-hover:text-white transition-colors">
              PUMP.FUN
            </span>
            <span className="font-mono-tech text-[10px] tracking-widest text-[#858A82] group-hover:text-[#B5FF32] transition-colors">
              MEME KILLER
            </span>
          </div>
        </a>

        {/* Center: Refined Editorial Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono-tech tracking-wider">
          {SITE_CONFIG.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? 'text-[#B5FF32] font-semibold'
                    : 'text-[#858A82] hover:text-[#F1F1E9]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#B5FF32]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#confessions"
            onClick={(e) => handleScrollTo(e, '#confessions')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-tech font-semibold tracking-wider text-[#080A08] bg-[#B5FF32] hover:bg-[#c6ff59] active:translate-y-0.5 transition-all shadow-[0_0_15px_rgba(181,255,50,0.2)] border border-[#B5FF32] whitespace-nowrap"
          >
            <span>ENTER THE TRENCHES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#858A82] hover:text-[#F1F1E9] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#B5FF32]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1c221c] bg-[#080A08]/98 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono-tech text-xs">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-[#858A82] hover:text-[#B5FF32] py-2 border-b border-[#121612] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#3a443a]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#confessions"
              onClick={(e) => handleScrollTo(e, '#confessions')}
              className="w-full inline-flex items-center justify-center py-2.5 font-mono-tech text-xs font-bold text-[#080A08] bg-[#B5FF32] hover:bg-[#c6ff59] tracking-wider transition-colors"
            >
              ENTER THE TRENCHES
            </a>
          </div>

          <p className="text-[10px] font-mono-tech text-[#656c62] pt-2">
            {SITE_CONFIG.disclaimerShort}
          </p>
        </div>
      )}
    </header>
  );
};
