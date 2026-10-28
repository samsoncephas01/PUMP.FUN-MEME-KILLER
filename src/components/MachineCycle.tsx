import React, { useState } from 'react';
import { PlusCircle, Radio, Activity, TrendingDown, Ghost, RotateCcw, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface MachineStep {
  id: string;
  order: string;
  name: string;
  tagline: string;
  detail: string;
  trenchReality: string;
  icon: React.ElementType;
  tone: 'neutral' | 'accent' | 'warning';
}

const STEPS: MachineStep[] = [
  {
    id: 'create',
    order: '01',
    name: 'CREATE',
    tagline: 'Frictionless launch with zero commitment.',
    detail: 'Anyone can spin up a token in seconds. No code required, no product roadmap, no accountability. The barrier to entry has collapsed to zero.',
    trenchReality: 'Thousands of contracts generated daily by automated bots and anonymous deployers.',
    icon: PlusCircle,
    tone: 'neutral',
  },
  {
    id: 'promote',
    order: '02',
    name: 'PROMOTE',
    tagline: 'Attention is weaponized as fuel.',
    detail: 'Algorithmic feeds, social raids, coordinated replies, and speculative momentum create artificial urgency. The meme is designed to provoke an instant visceral reaction.',
    trenchReality: 'Narratives last 15 minutes. If a ticker fails to trend immediately, it is discarded for another.',
    icon: Radio,
    tone: 'accent',
  },
  {
    id: 'fomo',
    order: '03',
    name: 'FOMO',
    tagline: 'Traders rush in to avoid missing the move.',
    detail: 'As green candles tick upward on steep curves, critical thinking evaporates. The fear of being left on the sidelines pulls in retail liquidity at peak velocity.',
    trenchReality: 'Participants convince themselves this launch is different, mistaking velocity for durable value.',
    icon: Activity,
    tone: 'accent',
  },
  {
    id: 'sell-off',
    order: '04',
    name: 'SELL-OFF',
    tagline: 'Early entrants extract the liquidity.',
    detail: 'Snipers, deployer wallets, and fast-finger rotators exit into incoming bids. Because the bonding curve is steep, small clusters of sells trigger rapid downward spirals.',
    trenchReality: 'Order books thin out instantly; retail buyers are left holding illiquid bags at steep losses.',
    icon: TrendingDown,
    tone: 'warning',
  },
  {
    id: 'abandon',
    order: '05',
    name: 'ABANDON',
    tagline: 'The crowd moves on; the community dissolves.',
    detail: 'When the volume evaporates, the chat falls silent. The promises of long-term community building reveal themselves to have been temporary exit wrappers.',
    trenchReality: 'The social channels turn ghostlike or toxic within hours of the liquidity drying up.',
    icon: Ghost,
    tone: 'warning',
  },
  {
    id: 'repeat',
    order: '06',
    name: 'REPEAT',
    tagline: 'The factory resets with a new joke.',
    detail: 'Capital and eyes rotate into the next freshly minted contract. The machine survives not on sustainable value, but on the perpetual renewal of speculative churn.',
    trenchReality: 'The same actors deploy dozens of tokens per week, waiting for one to catch sufficient momentum.',
    icon: RotateCcw,
    tone: 'accent',
  },
];

export const MachineCycle: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = STEPS[selectedStepIndex];

  return (
    <section id="machine" className="py-20 sm:py-28 bg-[#080A08] border-b border-[#181D18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase">
              01 // THE MECHANISM
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            THE FACTORY<br />
            <span className="text-[#B5FF32]">NEVER CLOSES.</span>
          </h2>

          <p className="text-base sm:text-lg font-editorial text-[#858A82] leading-relaxed">
            What happens when frictionless token creation meets an attention economy? Tokens compete for increasingly short-lived moments in the spotlight, turning digital culture into a disposable financial treadmill.
          </p>
        </div>

        {/* Bespoke Interactive Diagram: CREATE → PROMOTE → FOMO → SELL-OFF → ABANDON → REPEAT */}
        <div className="border border-[#181D18] bg-[#0D100D] p-6 sm:p-10 mb-8">
          
          <div className="flex items-center justify-between border-b border-[#181D18] pb-4 mb-8">
            <span className="font-mono-tech text-xs text-[#858A82] uppercase tracking-wider">
              LIFECYCLE ARCHITECTURE
            </span>
            <span className="font-mono-tech text-xs text-[#B5FF32]">
              PHASE {activeStep.order} OF 06 · {activeStep.name}
            </span>
          </div>

          {/* 6-Stage Diagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {STEPS.map((step, idx) => {
              const isSelected = idx === selectedStepIndex;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-4 border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#B5FF32] bg-[#141A14] shadow-[0_0_15px_rgba(181,255,50,0.15)]'
                      : 'border-[#181D18] bg-[#0A0D0A] hover:border-[#2C352C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono-tech text-xs font-semibold ${
                        isSelected ? 'text-[#B5FF32]' : 'text-[#656C62]'
                      }`}
                    >
                      {step.order}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isSelected
                          ? 'text-[#B5FF32]'
                          : step.tone === 'warning'
                          ? 'text-[#FF3535]/70'
                          : 'text-[#656C62]'
                      }`}
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-display text-sm font-bold tracking-wide mb-1 ${
                        isSelected ? 'text-[#F1F1E9]' : 'text-[#858A82] group-hover:text-[#F1F1E9]'
                      }`}
                    >
                      {step.name}
                    </h3>
                    <p className="text-[10px] font-editorial text-[#656C62] line-clamp-2">
                      {step.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#141814] flex items-center justify-between text-[9px] font-mono-tech text-[#4A524A]">
                    <span>{isSelected ? 'INSPECTING' : 'SELECT'}</span>
                    <span>→</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Card */}
          <div className="bg-[#090B09] border border-[#181D18] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 border flex items-center justify-center shrink-0 ${
                      activeStep.tone === 'warning'
                        ? 'border-[#FF3535]/40 bg-[#1A0D0D] text-[#FF3535]'
                        : 'border-[#B5FF32]/40 bg-[#121A0F] text-[#B5FF32]'
                    }`}
                  >
                    <activeStep.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#656C62] tracking-widest uppercase block">
                      STAGE ANALYSIS
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#F1F1E9]">
                      STAGE {activeStep.order} — {activeStep.name}
                    </h4>
                  </div>
                </div>

                <p className="font-editorial text-base text-[#F1F1E9] leading-relaxed">
                  {activeStep.detail}
                </p>

                <div className="p-3.5 bg-[#0E120E] border-l-2 border-[#B5FF32] text-xs font-mono-tech text-[#858A82]">
                  <span className="text-[#B5FF32] font-semibold block mb-1">TRENCH PHENOMENON:</span>
                  {activeStep.trenchReality}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedStepIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length)}
                  className="px-3 py-2 bg-[#111411] hover:bg-[#181D18] border border-[#1f261f] text-xs font-mono-tech text-[#858A82] hover:text-[#F1F1E9] transition-colors cursor-pointer"
                >
                  PREV
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStepIndex((prev) => (prev + 1) % STEPS.length)}
                  className="px-4 py-2 bg-[#B5FF32] hover:bg-[#c6ff59] border border-[#B5FF32] text-xs font-mono-tech font-bold text-[#080A08] transition-colors cursor-pointer"
                >
                  NEXT STAGE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Framing & Integrity Notice */}
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#656C62]">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#656C62]" />
          <span>
            This diagram illustrates market dynamics observed across rapid launchpad environments, not a claim that every launch follows the exact same trajectory.
          </span>
        </div>

      </div>
    </section>
  );
};
