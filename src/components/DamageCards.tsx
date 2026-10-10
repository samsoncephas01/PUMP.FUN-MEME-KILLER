import React from 'react';
import { Users2, Eye, Skull, Radio, AlertTriangle } from 'lucide-react';

interface DamageCard {
  id: string;
  number: string;
  title: string;
  quote: string;
  analysis: string;
  icon: React.ElementType;
  tag: string;
}

const CARDS: DamageCard[] = [
  {
    id: 'disposable-communities',
    number: '01',
    title: 'DISPOSABLE COMMUNITIES',
    quote: 'Communities can be built around temporary hype rather than lasting shared interests. When the chart cools, the conversation can disappear with it.',
    analysis: 'Telegram groups that swell to 5,000 members in two hours can evaporate by dawn. When financial return is the sole glue holding individuals together, the death of momentum invariably brings the death of fellowship.',
    icon: Users2,
    tag: 'FRAGMENTATION',
  },
  {
    id: 'permanent-fomo',
    number: '02',
    title: 'PERMANENT FOMO',
    quote: 'Every new launch competes for attention. Traders feel pressured to watch everything, chase every narrative, and fear being the only person who missed the move.',
    analysis: 'Attention spans shrink down to five-minute intervals. The psychological toll of 24/7 hyper-vigilance converts internet users from participants in a fun digital subculture into exhausted screen-glued watchers.',
    icon: Eye,
    tag: 'HYPER-VIGILANCE',
  },
  {
    id: 'exit-liquidity',
    number: '03',
    title: 'EXIT LIQUIDITY',
    quote: 'When buyers enter without understanding the risks, they may end up holding assets that early sellers have already exited.',
    analysis: 'The speed of automated launches favors those with the fastest access, snipers, and automated alerts. Retail enthusiasm arriving at peak euphoria often provides the final exit volume for earlier traders.',
    icon: Skull,
    tag: 'ASYMMETRY',
  },
  {
    id: 'culture-lost',
    number: '04',
    title: 'CULTURE LOST IN THE NOISE',
    quote: 'When every joke becomes a ticker and every trend becomes a launch, the creative culture behind memes risks becoming secondary to speculation.',
    analysis: 'Internet memes used to thrive as open-source cultural satire, art, and humor. When every viral tweet or absurdity is instantly monetized and tokenized, the humor is overshadowed by market sentiment.',
    icon: Radio,
    tag: 'COMMODIFICATION',
  },
];

export const DamageCards: React.FC = () => {
  return (
    <section id="damage" className="py-20 sm:py-28 bg-[#090909] border-b border-[#1c1c1c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase">
              02. THE CULTURE
            </span>
            <span className="text-[#333333]">/</span>
            <span className="font-mono-degen text-xs tracking-wider text-[#777777]">
              CULTURAL IMPACT
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            WHAT HAPPENS WHEN<br />
            <span className="text-[#FF3535]">EVERYTHING</span> BECOMES A LAUNCH?
          </h2>

          <p className="max-w-3xl text-base sm:text-lg text-[#b8b8b0] leading-relaxed">
            The friction-free token mill changed more than just the chart. It reshaped how internet communities form, how people spend their attention, and what happens to the art of the meme.
          </p>
        </div>

        {/* 4 Brutalist Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-[#0e0e0e] border border-[#222222] hover:border-[#B5FF32]/70 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-4 -right-2 font-syne text-8xl sm:text-9xl font-black text-[#161616] group-hover:text-[#1c2414] transition-colors pointer-events-none select-none">
                  {card.number}
                </span>

                <div className="relative z-10 space-y-4">
                  {/* Top Bar on Card */}
                  <div className="flex items-center justify-between border-b border-[#1c1c1c] pb-3">
                    <span className="font-mono-degen text-[11px] font-bold text-[#B5FF32] tracking-widest">
                      CARD {card.number} · {card.tag}
                    </span>
                    <Icon className="w-4 h-4 text-[#777777] group-hover:text-[#B5FF32] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-[#F1F1E9] group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Primary Quote */}
                  <p className="font-mono-degen text-sm sm:text-base text-[#e2e2d8] leading-relaxed border-l-2 border-[#B5FF32] pl-3 py-1 bg-[#131510]/50">
                    “{card.quote}”
                  </p>

                  {/* Editorial Analysis */}
                  <p className="text-xs sm:text-sm text-[#9e9e94] leading-relaxed pt-2">
                    {card.analysis}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 mt-6 border-t border-[#181818] flex items-center justify-between text-[11px] font-mono-degen text-[#555555]">
                  <span>PUMP.FUN CRITIQUE</span>
                  <span className="text-[#888888] group-hover:text-[#B5FF32] transition-colors">
                    REF 02-{card.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Disclaimer Notice */}
        <div className="mt-10 p-4 bg-[#0d0d0d] border border-[#222222] flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
          <p className="text-xs font-mono-degen text-[#888888] leading-relaxed">
            Note: This critique does not claim that every token launch is a scam, nor that speculative platforms intentionally harm every participant. It is an exploration of collective market psychology, structural incentives, and cultural shifts in decentralized spaces.
          </p>
        </div>

      </div>
    </section>
  );
};
