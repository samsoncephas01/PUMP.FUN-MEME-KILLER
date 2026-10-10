import React, { useState } from 'react';
import { History, Sparkles, Network, Coins, Crosshair, Zap, Info } from 'lucide-react';

interface Era {
  id: string;
  order: string;
  name: string;
  quote: string;
  context: string;
  phenomenon: string;
  icon: React.ElementType;
}

const ERAS: Era[] = [
  {
    id: 'original-meme',
    order: '01',
    name: 'THE ORIGINAL MEME',
    quote: 'People shared jokes because they were funny.',
    context: 'The era of forums, image boards, and message threads. Humor existed for its own sake. Nobody expected a meme to pay their rent or turn a 100x return.',
    phenomenon: 'Pure Cultural Capital — value was measured in laughter, upvotes, and organic virality.',
    icon: Sparkles,
  },
  {
    id: 'community-era',
    order: '02',
    name: 'THE COMMUNITY ERA',
    quote: 'Memes became identities, movements, and inside jokes.',
    context: 'Subcultures formed around shared symbols. Memes became tribal markers, rallying cries, and collective digital identities spanning months or years.',
    phenomenon: 'Sticky Alignment — belonging was emotional, durable, and built upon common lore.',
    icon: Network,
  },
  {
    id: 'tokenization-era',
    order: '03',
    name: 'THE TOKENIZATION ERA',
    quote: 'Internet culture became tradable.',
    context: 'Early meme coins proved that culture could possess direct market capitalization. For the first time, you could buy shares in an internet phenomenon.',
    phenomenon: 'Monetized Sentiment — financial stakes entered the meme equation, creating powerful incentives.',
    icon: Coins,
  },
  {
    id: 'attention-war',
    order: '04',
    name: 'THE ATTENTION WAR',
    quote: 'More launches competed for limited attention.',
    context: 'As launch tools multiplied, the supply of tickers exploded while the collective attention span stayed fixed. Memes became shorter, louder, and more extreme to get noticed.',
    phenomenon: 'Saturation — infinite new tickers fighting over finite liquidity and eyes.',
    icon: Crosshair,
  },
  {
    id: 'speedrun',
    order: '05',
    name: 'THE SPEEDRUN',
    quote: 'Faster cycles, stronger FOMO, and communities at risk of becoming disposable.',
    context: 'Instant bonding curves, automated scripts, and ten-minute lifecycles. Memes go from inception to peak to abandonment in hours, burning through community goodwill.',
    phenomenon: 'Industrialized Velocity — where launching replaces building, and the joke is consumed by the exit.',
    icon: Zap,
  },
];

export const Timeline: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<number>(4); // default to Speedrun

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#080808] border-b border-[#1c1c1c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase">
              03. THE EVOLUTION
            </span>
            <span className="text-[#333333]">/</span>
            <span className="font-mono-degen text-xs tracking-wider text-[#777777]">
              CULTURAL ARCHITECTURE
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            FROM INTERNET JOKE<br />
            TO <span className="text-[#B5FF32]">FINANCIAL SPEEDRUN.</span>
          </h2>

          <p className="max-w-3xl text-base sm:text-lg text-[#b8b8b0] leading-relaxed">
            How internet culture transitioned from shared peer-to-peer humor into an accelerated factory of financial instruments.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#1f1f1f] z-0" />

          {/* 5 Milestone Eras */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10 mb-10">
            {ERAS.map((era, index) => {
              const isSelected = selectedEra === index;
              const Icon = era.icon;

              return (
                <div
                  key={era.id}
                  onClick={() => setSelectedEra(index)}
                  className={`p-5 border text-left cursor-pointer transition-all duration-200 bg-[#0c0c0c] flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#B5FF32] bg-[#11190a] shadow-[0_0_20px_rgba(181,255,50,0.12)]'
                      : 'border-[#222222] hover:border-[#444444]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono-degen text-xs font-bold ${
                          isSelected ? 'text-[#B5FF32]' : 'text-[#666666]'
                        }`}
                      >
                        PHASE {era.order}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-[#B5FF32]' : 'text-[#555555] group-hover:text-[#F1F1E9]'
                        }`}
                      />
                    </div>

                    <h3
                      className={`font-syne text-sm sm:text-base font-extrabold tracking-wide mb-2 ${
                        isSelected ? 'text-[#F1F1E9]' : 'text-[#aaaaaa] group-hover:text-[#F1F1E9]'
                      }`}
                    >
                      {era.name}
                    </h3>

                    <p className="font-mono-degen text-xs text-[#888880] leading-snug line-clamp-2">
                      “{era.quote}”
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[10px] font-mono-degen">
                    <span className={isSelected ? 'text-[#B5FF32]' : 'text-[#555555]'}>
                      {isSelected ? 'ACTIVE VIEW' : 'CLICK TO EXPAND'}
                    </span>
                    <span className="text-[#444444]">→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Focus Box on Currently Selected Era */}
          <div className="bg-[#0e0e0e] border border-[#222222] p-6 sm:p-10 relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1c1c1c] mb-6">
              <div>
                <span className="font-mono-degen text-xs text-[#B5FF32] tracking-widest uppercase block mb-1">
                  HISTORICAL FOCUS · PHASE {ERAS[selectedEra].order}
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#F1F1E9]">
                  {ERAS[selectedEra].name}
                </h3>
              </div>

              <div className="px-4 py-2 bg-[#141414] border border-[#2a2a2a] font-mono-degen text-xs text-[#B5FF32] self-start lg:self-auto">
                {ERAS[selectedEra].phenomenon}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="font-mono-degen text-xs text-[#777777] uppercase tracking-wider block mb-2">
                  THE PREMISE:
                </span>
                <p className="font-syne text-lg sm:text-xl font-bold text-[#F1F1E9] leading-snug">
                  “{ERAS[selectedEra].quote}”
                </p>
              </div>

              <div>
                <span className="font-mono-degen text-xs text-[#777777] uppercase tracking-wider block mb-2">
                  CULTURAL DYNAMICS:
                </span>
                <p className="text-sm sm:text-base text-[#b8b8b0] leading-relaxed">
                  {ERAS[selectedEra].context}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Framing Clarification */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono-degen text-[#777777]">
          <Info className="w-3.5 h-3.5 text-[#666666] shrink-0" />
          <span>
            This timeline presents an interpretation of internet meme culture, not a verified historical chronology with exact dates.
          </span>
        </div>

      </div>
    </section>
  );
};
