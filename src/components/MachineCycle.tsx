import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronRight, AlertCircle, ArrowRight, Activity, Flame, ShieldAlert, FastForward, Trash2 } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  trenchDetail: string;
  icon: React.ElementType;
  toneColor: string;
}

const STAGES: Stage[] = [
  {
    number: "01",
    title: "DEPLOY",
    subtitle: "Another token enters the factory.",
    description: "Minted in seconds with zero friction. No roadmap, no community, no product. Just an image, a ticker, and an algorithmic curve waiting for attention.",
    trenchDetail: "The deployment threshold is reduced to zero. With automated scripts and instant bonding curves, dozens of tokens hit the feed every minute.",
    icon: FastForward,
    toneColor: "#B5FF32",
  },
  {
    number: "02",
    title: "HYPE",
    subtitle: "The timeline catches fire. Attention becomes fuel.",
    description: "Replies, retweets, telegram raids, and influencer callouts ignite the momentum. The meme is engineered to trigger immediate speculative interest.",
    trenchDetail: "Attention is transformed into liquid collateral. The quicker a narrative spreads on the timeline, the faster green candles attract onlookers.",
    icon: Flame,
    toneColor: "#B5FF32",
  },
  {
    number: "03",
    title: "FOMO",
    subtitle: "Traders rush in because nobody wants to miss the next big move.",
    description: "Fear of missing out overrides critical analysis. The velocity of the ascent creates the psychological illusion of endless upward momentum.",
    trenchDetail: "Participants convince themselves this one is 'different'. The conversation shifts from humorous memes to market cap targets and potential multipliers.",
    icon: Activity,
    toneColor: "#B5FF32",
  },
  {
    number: "04",
    title: "EXIT",
    subtitle: "Early participants sell. Liquidity and sentiment can change rapidly.",
    description: "Insiders, snipers, and rapid exiters take profits as liquidity peaks. The chart reverses faster than it climbed, catching late entrants off guard.",
    trenchDetail: "Order books on speculative curves are unforgiving. A small cluster of large sales can trigger a catastrophic cascading downward wick.",
    icon: ShieldAlert,
    toneColor: "#FF3535",
  },
  {
    number: "05",
    title: "ABANDONMENT",
    subtitle: "Attention moves on. Some communities disappear. Another launch takes their place.",
    description: "The Telegram room goes silent or turns bitter. The developers rotate to a new ticker. Capital and eyes migrate to the next freshly deployed launch.",
    trenchDetail: "The meme has served its financial purpose. The holders become bagholders, and the machine resets to step 01 with a fresh joke.",
    icon: Trash2,
    toneColor: "#999999",
  },
];

export const MachineCycle: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle through the 5 stages if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStage = STAGES[activeStageIndex];

  return (
    <section id="machine" className="py-20 sm:py-28 bg-[#080808] border-b border-[#1c1c1c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label & Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase">
              01. THE MECHANISM
            </span>
            <span className="text-[#333333]">/</span>
            <span className="font-mono-degen text-xs tracking-wider text-[#777777]">
              INDUSTRIALIZED SPECULATION
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            WELCOME TO THE<br />
            <span className="text-[#B5FF32]">MEME-KILLING MACHINE.</span>
          </h2>

          <p className="max-w-3xl text-base sm:text-lg text-[#b8b8b0] leading-relaxed">
            What happens when launching becomes easier than building, attention becomes the product, and every new ticker competes for the same pool of speculative capital?
          </p>
        </div>

        {/* Interactive Cycle Container */}
        <div className="bg-[#0d0d0d] border border-[#222222] p-6 sm:p-10 relative overflow-hidden">
          {/* Header Controls for Cycle Loop */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1f1f1f] mb-8">
            <div className="flex items-center gap-2 font-mono-degen text-xs text-[#888888]">
              <span className="text-[#B5FF32]">STAGE {activeStage.number} OF 05</span>
              <span>—</span>
              <span className="text-[#F1F1E9] uppercase tracking-wider">{activeStage.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] hover:bg-[#1f1f1f] border border-[#333333] text-xs font-mono-degen text-[#F1F1E9] transition-colors cursor-pointer"
                title={isPlaying ? "Pause auto-loop" : "Resume auto-loop"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#B5FF32]" />
                    <span>PAUSE CYCLE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#B5FF32]" />
                    <span>PLAY CYCLE</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5-Stage Interactive Stage Nodes Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => {
                    setActiveStageIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`text-left p-3.5 sm:p-4 border transition-all cursor-pointer relative group ${
                    isActive
                      ? 'border-[#B5FF32] bg-[#141d08] shadow-[0_0_15px_rgba(181,255,50,0.15)]'
                      : isPast
                      ? 'border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#444444]'
                      : 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono-degen text-xs font-bold ${
                        isActive
                          ? 'text-[#B5FF32]'
                          : stage.toneColor === '#FF3535'
                          ? 'text-[#FF3535]'
                          : 'text-[#666666]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#B5FF32] animate-ping" />
                    )}
                  </div>
                  <h3
                    className={`font-syne text-xs sm:text-sm font-bold tracking-wider mb-1 truncate ${
                      isActive ? 'text-[#F1F1E9]' : 'text-[#888888] group-hover:text-[#F1F1E9]'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-[10px] text-[#666666] line-clamp-1 hidden sm:block">
                    {stage.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="bg-[#090909] border border-[#222222] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 border flex items-center justify-center shrink-0 ${
                      activeStage.toneColor === '#FF3535'
                        ? 'border-[#FF3535]/50 bg-[#210909] text-[#FF3535]'
                        : 'border-[#B5FF32]/50 bg-[#121c08] text-[#B5FF32]'
                    }`}
                  >
                    <activeStage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono-degen text-[11px] text-[#888888] tracking-widest uppercase">
                      STAGE {activeStage.number} BREAKDOWN
                    </span>
                    <h4 className="font-syne text-xl sm:text-2xl font-bold text-[#F1F1E9]">
                      STAGE {activeStage.number} — {activeStage.title}
                    </h4>
                  </div>
                </div>

                <p className="font-mono-degen text-base text-[#B5FF32] font-medium leading-snug">
                  “{activeStage.subtitle}”
                </p>

                <p className="text-sm sm:text-base text-[#d1d1c7] leading-relaxed">
                  {activeStage.description}
                </p>

                <div className="p-3.5 bg-[#121212] border-l-2 border-[#B5FF32] text-xs font-mono-degen text-[#a8a89e] leading-relaxed">
                  <span className="text-[#B5FF32] font-bold block mb-1">TRENCH REALITY:</span>
                  {activeStage.trenchDetail}
                </div>
              </div>

              {/* Step Navigation buttons */}
              <div className="flex sm:flex-col items-center gap-2 shrink-0 pt-4 md:pt-0">
                <button
                  type="button"
                  onClick={() => {
                    setActiveStageIndex((prev) => (prev - 1 + STAGES.length) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3 py-2 bg-[#141414] hover:bg-[#202020] border border-[#333333] text-xs font-mono-degen text-[#F1F1E9] transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  ← PREV STAGE
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="px-3 py-2 bg-[#B5FF32] hover:bg-[#c4ff59] text-[#080808] border border-[#B5FF32] text-xs font-mono-degen font-bold transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bold Statement After Stages */}
        <div className="mt-14 sm:mt-16 text-center border-y border-[#222222] py-10 sm:py-14 bg-[#0a0a0a]">
          <p className="font-syne text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight">
            “THE MACHINE DOESN'T NEED YOU TO BELIEVE.<br />
            <span className="text-[#B5FF32]">IT NEEDS YOU TO CHASE.”</span>
          </p>
        </div>

        {/* Mandatory Conceptual Illustration Caption */}
        <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-mono-degen text-[#777777]">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#666666]" />
          <span>
            This cycle is a conceptual illustration of speculative market dynamics, not a claim that every token or launch follows the same pattern.
          </span>
        </div>

      </div>
    </section>
  );
};
