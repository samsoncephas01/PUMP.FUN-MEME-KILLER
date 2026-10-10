import React from 'react';
import { Scroll, CheckSquare, Sparkles } from 'lucide-react';

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
    <section id="manifesto" className="py-24 sm:py-32 bg-[#060606] border-b border-[#1c1c1c] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B5FF32]/[0.025] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Label & Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase px-3 py-1 bg-[#101708] border border-[#B5FF32]/30">
              04. THE MANIFESTO
            </span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            WE MISS WHEN MEMES<br />
            <span className="text-[#B5FF32]">WERE JUST MEMES.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9e9e94] leading-relaxed">
            A statement of intent for those tired of treating every joke as a five-minute exit strategy.
          </p>
        </div>

        {/* The 6 Core Principles Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="font-mono-degen text-xs text-[#777777] uppercase tracking-[0.2em]">
              CORE PRINCIPLES OF RESISTANCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="p-6 bg-[#0c0c0c] border border-[#222222] hover:border-[#B5FF32]/80 transition-colors duration-200 flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-none border border-[#333333] group-hover:border-[#B5FF32] flex items-center justify-center font-mono-degen text-xs font-bold text-[#B5FF32] shrink-0 bg-[#080808]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-syne text-lg sm:text-xl font-extrabold text-[#F1F1E9] group-hover:text-white tracking-wide">
                    {principle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manifesto Prose Layout */}
        <div className="bg-[#0b0b0b] border border-[#222222] p-8 sm:p-14 mb-20 relative">
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-[#d3d3c7] leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-syne font-bold text-[#F1F1E9] border-b border-[#222222] pb-6">
              We are not pretending the old days were perfect. Speculation has always existed, and permissionless launches have opened the door for creativity that previously struggled to find an audience.
            </p>

            <p className="text-[#B5FF32] font-mono-degen text-lg font-semibold py-2">
              But accessibility alone does not guarantee healthy culture.
            </p>

            <p>
              When attention becomes the only goal, the meme risks becoming a disposable wrapper around a financial gamble.
            </p>

            <p>
              This website is a challenge to that culture. A question about the incentives we reward. A reminder that communities, creativity, humour, and critical thinking matter beyond the chart.
            </p>

            <p className="text-sm font-mono-degen text-[#aaaaaa] border-t border-[#222222] pt-6">
              We do not promise profits. We do not promise safety. We ask you to think before you chase.
            </p>
          </div>
        </div>

        {/* Large Animated Closing Statement */}
        <div className="text-center py-12 px-6 bg-gradient-to-b from-[#0f140a] to-[#080808] border border-[#B5FF32]/40 shadow-[0_0_40px_rgba(181,255,50,0.1)]">
          <p className="font-syne text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight">
            STOP CHASING EVERY TICKER.<br />
            <span className="text-[#B5FF32] underline decoration-[#B5FF32]/60 underline-offset-8">
              START ASKING WHO BENEFITS.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
