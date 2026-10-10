import React from 'react';
import { ArrowDown, AlertOctagon, Terminal } from 'lucide-react';
import { ConveyorBelt } from './ConveyorBelt';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-32 pb-8 overflow-hidden bg-[#080808]">
      {/* Subtle Terminal Code Matrix Rain in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] font-mono-degen text-[11px] leading-tight text-[#B5FF32] overflow-hidden select-none">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span>0xMINT_{((i * 137) % 999).toString(16)}</span>
              <span>deploy_init()</span>
              <span>curve_burn:99%</span>
              <span>liq_drain_tx</span>
              <span>fomo_surge.run</span>
              <span>exit_dump_ok</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex-1 flex flex-col justify-center py-6 sm:py-10">
        {/* Upper Label */}
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <span className="text-[11px] sm:text-xs font-mono-degen tracking-[0.25em] text-[#00F0FF] uppercase px-3 py-1 bg-[#091517] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            AN INDEPENDENT MEME CULTURE CRITIQUE
          </span>
        </div>

        {/* Main Multi-Line Headline */}
        <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F1F1E9] leading-[1.05] sm:leading-[1] mb-6 glitch-hover">
          THEY DIDN'T JUST<br />
          LAUNCH TOKENS.<br />
          THEY TURNED MEMES<br />
          INTO <span className="bg-gradient-to-r from-[#00F0FF] via-[#B5FF32] to-[#23E578] bg-clip-text text-transparent underline decoration-[#00F0FF]/60 underline-offset-8">AMMUNITION.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-normal text-[#c4c4bc] leading-relaxed mb-10">
          Welcome to the factory. Where every second brings another launch, every trending ticker starts another race, and every green candle becomes another reason to FOMO.
        </p>

        {/* Two Functional CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            type="button"
            onClick={() => handleScrollTo('machine')}
            className="w-full sm:w-auto px-7 py-3.5 font-mono-degen text-xs sm:text-sm font-bold tracking-wider text-[#080808] bg-[#B5FF32] hover:bg-[#c6ff59] active:translate-y-0.5 transition-all shadow-[0_0_25px_rgba(181,255,50,0.3)] border border-[#B5FF32] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPOSE THE MACHINE</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('manifesto')}
            className="w-full sm:w-auto px-7 py-3.5 font-mono-degen text-xs sm:text-sm font-bold tracking-wider text-[#F1F1E9] bg-[#141414] hover:bg-[#1f1f1f] hover:border-[#F1F1E9] active:translate-y-0.5 transition-all border border-[#333333] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-[#B5FF32]" />
            <span>READ THE MANIFESTO</span>
          </button>
        </div>
      </div>

      {/* Industrial Conveyor Belt */}
      <div className="w-full relative z-20 my-2">
        <ConveyorBelt />
      </div>

      {/* Seamless Moving Ticker */}
      <div className="w-full bg-[#0a0a0a] border-y border-[#1c1c1c] py-2.5 overflow-hidden relative z-20">
        <div className="flex w-max animate-ticker font-mono-degen text-xs sm:text-sm font-bold tracking-widest text-[#999999]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-[#F1F1E9] hover:text-[#B5FF32] transition-colors">DEPLOY</span>
              <span className="text-[#B5FF32] mx-3">→</span>
              <span className="text-[#F1F1E9] hover:text-[#B5FF32] transition-colors">HYPE</span>
              <span className="text-[#B5FF32] mx-3">→</span>
              <span className="text-[#F1F1E9] hover:text-[#B5FF32] transition-colors">FOMO</span>
              <span className="text-[#FF3535] mx-3">→</span>
              <span className="text-[#FF3535] hover:text-white transition-colors">DUMP</span>
              <span className="text-[#666666] mx-3">→</span>
              <span className="text-[#c4c4bc] hover:text-[#B5FF32] transition-colors">REPEAT</span>
              <span className="text-[#B5FF32] mx-5 font-black">///</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hero Callout */}
      <div className="pt-6 pb-2 text-center relative z-20">
        <p className="font-mono-degen text-xs sm:text-sm font-semibold tracking-widest text-[#777777] uppercase">
          THE MEME IS DEAD. <span className="text-[#B5FF32]">LONG LIVE THE MEME.</span>
        </p>
      </div>
    </section>
  );
};
