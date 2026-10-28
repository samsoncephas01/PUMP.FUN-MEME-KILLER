import React, { useState } from 'react';
import { Sparkles, Radio, Zap, ArrowDownRight, Skull, Info } from 'lucide-react';

interface LifecyclePhase {
  id: string;
  stageNum: string;
  timeframe: string;
  name: string;
  headline: string;
  narrative: string;
  indicators: string[];
  icon: React.ElementType;
}

const PHASES: LifecyclePhase[] = [
  {
    id: 'the-spark',
    stageNum: '01',
    timeframe: 'MINUTE 00',
    name: 'THE SPARK',
    headline: 'A viral joke becomes a contract.',
    narrative: 'A trending tweet, an absurd animal photo, or a breaking news event is scraped and deployed onto a bonding curve in less than 30 seconds. No community exists yet—only an address and an algorithm.',
    indicators: ['Instant automated minting', 'Zero initial holders', 'Speculative seeding'],
    icon: Sparkles,
  },
  {
    id: 'the-feed',
    stageNum: '02',
    timeframe: 'MINUTE 15',
    name: 'THE FEED',
    headline: 'Attention is channeled into volume.',
    narrative: 'The timeline catches wind. Snipers, bot accounts, and raiding circles coordinate replies. The sudden uptick in transaction velocity triggers trending tracker notifications across degen channels.',
    indicators: ['Surge in automated mentions', 'Steep initial curve ascent', 'Raids on social feeds'],
    icon: Radio,
  },
  {
    id: 'the-crest',
    stageNum: '03',
    timeframe: 'HOUR 01',
    name: 'THE CREST',
    headline: 'Peak FOMO and maximal conviction.',
    narrative: 'Euphoria reaches its apex. Traders who hesitated earlier now rush in, convinced this token has graduated into a durable cultural movement. The chat fills with price targets and collective excitement.',
    indicators: ['Retail volume arrives', 'Voice rooms peak with attendees', 'Urgent FOMO messaging'],
    icon: Zap,
  },
  {
    id: 'the-reversal',
    stageNum: '04',
    timeframe: 'HOUR 03',
    name: 'THE REVERSAL',
    headline: 'Liquidity extracts faster than it entered.',
    narrative: 'Deployers, sniper wallets, and rapid profit-takers exit simultaneously. Because bonding curve mechanics are inherently steep, a few concentrated sells produce catastrophic downward candles.',
    indicators: ['Abrupt liquidity contraction', 'Panic selling cascades', 'Chat shifts from hype to fear'],
    icon: ArrowDownRight,
  },
  {
    id: 'the-graveyard',
    stageNum: '05',
    timeframe: 'DAY 01',
    name: 'THE GRAVEYARD',
    headline: 'Attention migrates to the next ticker.',
    narrative: 'The Telegram group goes quiet. The deployer has already minted two newer contracts. The holders become bagholders, and another meme joins the thousands buried in the digital cemetery.',
    indicators: ['Volume drops to zero', 'Social channels abandoned', 'Capital resets on a new contract'],
    icon: Skull,
  },
];

export const Timeline: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(2); // default to The Crest
  const activePhase = PHASES[activePhaseIndex];

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#080A08] border-b border-[#181D18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase">
              03 // THE TIMELINE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            THE CYCLE,<br />
            <span className="text-[#B5FF32]">REPEATED.</span>
          </h2>

          <p className="text-base sm:text-lg font-editorial text-[#858A82] leading-relaxed">
            From the initial spark of an internet joke to the silent cemetery of abandoned contracts, observe how the modern launch cycle compresses cultural lifespan into hours.
          </p>
        </div>

        {/* Phase Navigator Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {PHASES.map((phase, idx) => {
            const isSelected = idx === activePhaseIndex;
            const Icon = phase.icon;

            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#B5FF32] bg-[#141A14] shadow-[0_0_15px_rgba(181,255,50,0.12)]'
                    : 'border-[#181D18] bg-[#0D100D] hover:border-[#2C352C]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono-tech mb-3">
                    <span className={isSelected ? 'text-[#B5FF32]' : 'text-[#656C62]'}>
                      STAGE {phase.stageNum}
                    </span>
                    <span className="text-[#858A82]">{phase.timeframe}</span>
                  </div>

                  <h3 className={`font-display text-sm font-bold tracking-wide mb-1 ${
                    isSelected ? 'text-[#F1F1E9]' : 'text-[#858A82] group-hover:text-[#F1F1E9]'
                  }`}>
                    {phase.name}
                  </h3>

                  <p className="text-[11px] font-editorial text-[#656C62] line-clamp-1">
                    {phase.headline}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#141814] flex items-center justify-between text-[9px] font-mono-tech">
                  <span className={isSelected ? 'text-[#B5FF32]' : 'text-[#4A524A]'}>
                    {isSelected ? 'ACTIVE VIEW' : 'EXPAND'}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B5FF32]' : 'text-[#4A524A]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="bg-[#0D100D] border border-[#181D18] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-6 border-b border-[#181D18] mb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono-tech text-[#858A82] mb-1">
                <span className="text-[#B5FF32] font-semibold">PHASE {activePhase.stageNum}</span>
                <span>·</span>
                <span>ESTIMATED DURATION: {activePhase.timeframe}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F1F1E9]">
                {activePhase.name} — “{activePhase.headline}”
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => setActivePhaseIndex((prev) => (prev - 1 + PHASES.length) % PHASES.length)}
                className="px-3 py-1.5 bg-[#111411] hover:bg-[#181D18] border border-[#1f261f] text-xs font-mono-tech text-[#858A82] hover:text-[#F1F1E9] transition-colors cursor-pointer"
              >
                ← PREV
              </button>
              <button
                type="button"
                onClick={() => setActivePhaseIndex((prev) => (prev + 1) % PHASES.length)}
                className="px-3.5 py-1.5 bg-[#B5FF32] hover:bg-[#c6ff59] border border-[#B5FF32] text-xs font-mono-tech font-bold text-[#080A08] transition-colors cursor-pointer"
              >
                NEXT →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <span className="font-mono-tech text-xs text-[#858A82] uppercase tracking-wider block">
                NARRATIVE BREAKDOWN
              </span>
              <p className="font-editorial text-base sm:text-lg text-[#F1F1E9] leading-relaxed">
                {activePhase.narrative}
              </p>
            </div>

            <div className="bg-[#090B09] border border-[#181D18] p-5 space-y-3">
              <span className="font-mono-tech text-xs text-[#B5FF32] uppercase tracking-wider block">
                OBSERVABLE MARKERS
              </span>
              <ul className="space-y-2 text-xs font-mono-tech text-[#858A82]">
                {activePhase.indicators.map((ind, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#B5FF32] rounded-full" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Clear Framing Disclaimer */}
        <div className="mt-6 flex items-center gap-2 text-xs font-mono-tech text-[#656C62]">
          <Info className="w-3.5 h-3.5 shrink-0 text-[#656C62]" />
          <span>
            This timeline presents an illustrative model of meme token market compression, not a claim that every token follows the same trajectory.
          </span>
        </div>

      </div>
    </section>
  );
};
