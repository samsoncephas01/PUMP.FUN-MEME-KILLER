import React from 'react';
import { Users, Eye, TrendingDown, Radio, AlertTriangle } from 'lucide-react';

interface DamageChapter {
  id: string;
  num: string;
  label: string;
  title: string;
  thesis: string;
  narrative: string;
  icon: React.ElementType;
}

const CHAPTERS: DamageChapter[] = [
  {
    id: 'disposable-tribe',
    num: '01',
    label: 'SOCIAL FRAGMENTATION',
    title: 'THE DISPOSABLE TRIBE',
    thesis: 'When a ticker is the only shared interest, community lasts only as long as the green candle.',
    narrative: 'Telegram groups surge to 4,000 members in minutes, fueled by collective euphoria. But when momentum wanes, the fellowship fractures into mutual recrimination and silence. True digital subcultures require patience and shared lore—both are scorched by rapid deployment cycles.',
    icon: Users,
  },
  {
    id: 'chronic-vigilance',
    num: '02',
    label: 'PSYCHOLOGICAL TOLL',
    title: 'CHRONIC HYPER-VIGILANCE',
    thesis: 'Traders feel compelled to monitor feeds 24/7, terrified that looking away means missing the move.',
    narrative: 'With dozens of launches competing for attention every hour, the fear of missing out ceases to be an occasional emotion—it becomes a permanent neurological state. Participants convert from curious internet citizens into exhausted watchers of rapid charts.',
    icon: Eye,
  },
  {
    id: 'asymmetric-exit',
    num: '03',
    label: 'LIQUIDITY EXTRACTION',
    title: 'THE ASYMMETRIC EXIT',
    thesis: 'Unsuspecting buyers frequently absorb the final exit volume of earlier actors.',
    narrative: 'Speed advantages, automated sniping scripts, and private wallet clusters allow early entrants to capture the majority of bonding curve expansions. Late entrants arriving on social hype unknowingly serve as the final liquid counterparties.',
    icon: TrendingDown,
  },
  {
    id: 'erosion-of-culture',
    num: '04',
    label: 'CULTURAL COST',
    title: 'CULTURE STRIPPED FOR PARTS',
    thesis: 'When every viral joke is immediately financialized, the humor is overshadowed by market sentiment.',
    narrative: 'Internet memes once functioned as open-source satire, shared absurdity, and collective creative expression. When each meme is rushed to market as a tradable contract, the joke is reduced to a five-minute vehicle for extraction.',
    icon: Radio,
  },
];

export const DamageCards: React.FC = () => {
  return (
    <section id="damage" className="py-20 sm:py-28 bg-[#0B0E0B] border-b border-[#181D18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase">
              02 // HUMAN IMPACT
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F1F1E9] tracking-tight leading-tight mb-6">
            EVERY LAUNCH HAS<br />
            <span className="text-[#FF3535]">A HUMAN SIDE.</span>
          </h2>

          <p className="text-base sm:text-lg font-editorial text-[#858A82] leading-relaxed">
            Beyond the rapid tickers and automated curves lies a tangible cultural consequence: broken trust, drained attention, and communities engineered to be discarded after the trade.
          </p>
        </div>

        {/* Asymmetric 2x2 Editorial Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {CHAPTERS.map((ch) => {
            const Icon = ch.icon;

            return (
              <div
                key={ch.id}
                className="bg-[#0E120E] border border-[#181D18] hover:border-[#2C352C] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between border-b border-[#181D18] pb-3 mb-4 text-[10px] font-mono-tech">
                    <span className="text-[#B5FF32] font-semibold">{ch.num} · {ch.label}</span>
                    <Icon className="w-3.5 h-3.5 text-[#656C62] group-hover:text-[#B5FF32] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F1F1E9] group-hover:text-white transition-colors mb-3">
                    {ch.title}
                  </h3>

                  {/* Thesis Lead-in */}
                  <p className="font-editorial text-sm sm:text-base font-medium text-[#c8cebe] leading-snug mb-4 border-l-2 border-[#B5FF32] pl-3 py-0.5">
                    “{ch.thesis}”
                  </p>

                  {/* Narrative Body */}
                  <p className="font-editorial text-xs sm:text-sm text-[#858A82] leading-relaxed">
                    {ch.narrative}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 mt-6 border-t border-[#141814] flex items-center justify-between text-[10px] font-mono-tech text-[#4A524A]">
                  <span>MEME KILLER INVESTIGATION</span>
                  <span className="text-[#656C62] group-hover:text-[#F1F1E9] transition-colors">
                    EXP-02.{ch.num}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Disclosure */}
        <div className="p-4 bg-[#080A08] border border-[#181D18] flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#858A82] shrink-0 mt-0.5" />
          <p className="text-xs font-mono-tech text-[#656C62] leading-relaxed">
            Note: This analysis reflects observable market psychology and cultural trends across decentralized launch ecosystems. It does not claim that every participant loses money or that every token lacks genuine community passion.
          </p>
        </div>

      </div>
    </section>
  );
};
