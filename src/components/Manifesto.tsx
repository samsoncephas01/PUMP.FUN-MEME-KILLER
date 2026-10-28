import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

const PRINCIPLES = [
  "CULTURE BEFORE CANDLES.",
  "COMMUNITY BEFORE TEMPORARY HYPE.",
  "QUESTION THE HYPE.",
  "DON'T CONFUSE ATTENTION WITH VALUE.",
  "DON'T MISTAKE A LAUNCH FOR A MOVEMENT.",
  "NO TOKEN IS ENTITLED TO YOUR MONEY.",
];

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-[#0B0E0B] border-b border-[#181D18] relative overflow-hidden">
      
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#B5FF32]/[0.025] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Label & Main Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase">
              04 // THE MANIFESTO
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F1F1E9] tracking-tight leading-[1.08] mb-6">
            WE DON'T<br />
            <span className="text-[#B5FF32]">HATE MEMES.</span>
          </h2>
        </div>

        {/* The Core Supporting Manifesto Broadsheet */}
        <div className="border border-[#181D18] bg-[#0E120E] p-8 sm:p-14 mb-16">
          <div className="max-w-3xl space-y-6 text-base sm:text-lg font-editorial text-[#c4cab8] leading-relaxed">
            
            <p className="font-display text-xl sm:text-2xl font-bold text-[#F1F1E9] border-b border-[#181D18] pb-6 leading-snug">
              We believe memes can create culture, community, and shared identity. Our criticism is directed at the machine that treats every new launch as disposable attention and every community as temporary exit liquidity.
            </p>

            <p className="text-[#B5FF32] font-mono-tech text-base sm:text-lg font-semibold py-1">
              The problem isn't that memes exist. The problem is a system that can reward launching faster than building.
            </p>

            <p className="text-[#858A82]">
              We are not pretending the old days were immaculate. Speculation has always been intertwined with decentralized networks. But when attention becomes the only product and velocity replaces vision, internet subculture is hollowed out into a five-minute casino.
            </p>

            <p className="text-xs font-mono-tech text-[#656C62] border-t border-[#181D18] pt-6">
              We do not promise profits. We do not promise safety. We ask you to think before you chase.
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between border-b border-[#181D18] pb-3 text-xs font-mono-tech text-[#858A82]">
            <span>FOUNDATIONAL PRINCIPLES</span>
            <span>06 AXIOMS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="p-5 bg-[#080A08] border border-[#181D18] hover:border-[#2C352C] transition-colors flex items-start gap-4 group"
              >
                <span className="font-mono-tech text-xs text-[#B5FF32] font-semibold pt-0.5">
                  0{index + 1}
                </span>
                <p className="font-display text-sm sm:text-base font-bold text-[#F1F1E9] group-hover:text-white tracking-wide">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Monumental Callout */}
        <div className="text-center py-12 px-6 bg-[#080A08] border border-[#B5FF32]/30 shadow-[0_0_30px_rgba(181,255,50,0.06)]">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1F1E9] tracking-tight leading-tight">
            “{SITE_CONFIG.coreThesis}”
          </p>
        </div>

      </div>
    </section>
  );
};
