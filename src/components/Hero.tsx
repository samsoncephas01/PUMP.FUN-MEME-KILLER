import React from 'react';
import { ArrowDown, ArrowUpRight, Flame, Skull } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#080A08] border-b border-[#181D18]">
      
      {/* Background Cemetery Artwork with Controlled Scrim & Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/hero-cemetery.jpg"
          alt="Desolate digital cemetery of abandoned tokens"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 sm:opacity-45 transform scale-105 filter grayscale contrast-125"
        />
        {/* Multilayered Atmospheric Scrim for Pristine Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A08] via-[#080A08]/80 to-[#080A08]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080A08]/50 to-[#080A08]" />
      </div>

      {/* Hero Content Anchor */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-8 sm:py-16">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#111411]/90 border border-[#1f261f] text-[11px] font-mono-tech tracking-[0.2em] text-[#858A82]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF32]" />
            <span className="text-[#F1F1E9]">{SITE_CONFIG.eyebrow}</span>
          </div>
        </div>

        {/* Primary Headlines */}
        <div className="space-y-2 sm:space-y-3 mb-6 max-w-4xl">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F1F1E9] leading-[1.08]">
            {SITE_CONFIG.headlinePrimary}
          </h1>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#B5FF32] leading-[1.08]">
            {SITE_CONFIG.headlineSecondary}
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl font-editorial text-[#858A82] leading-relaxed mb-10">
          {SITE_CONFIG.heroSupporting}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
          <button
            type="button"
            onClick={() => handleScrollTo('confessions')}
            className="px-6 py-3.5 font-mono-tech text-xs sm:text-sm font-bold tracking-wider text-[#080A08] bg-[#B5FF32] hover:bg-[#c6ff59] active:translate-y-0.5 transition-all shadow-[0_0_20px_rgba(181,255,50,0.25)] border border-[#B5FF32] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>ENTER THE TRENCHES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('damage')}
            className="px-6 py-3.5 font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#F1F1E9] bg-[#111411]/90 hover:bg-[#181d18] hover:border-[#858A82] active:translate-y-0.5 transition-all border border-[#1f261f] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>EXAMINE THE DAMAGE</span>
            <ArrowDown className="w-4 h-4 text-[#858A82]" />
          </button>
        </div>
      </div>

      {/* Editorial Cycle Strip */}
      <div className="relative z-10 w-full border-t border-[#181D18] bg-[#0d100d]/90 backdrop-blur-sm py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech">
          <div className="flex items-center gap-2 text-[#858A82]">
            <span className="text-[#B5FF32] font-semibold">THE CYCLE:</span>
            <span className="tracking-widest text-[#F1F1E9]">{SITE_CONFIG.cycleShort}</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#656c62]">
            <span>ZERO ROADMAP</span>
            <span>·</span>
            <span>FRICTIONLESS DEPLOYMENT</span>
            <span>·</span>
            <span className="text-[#FF3535]/80">DISPOSABLE LIQUIDITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
