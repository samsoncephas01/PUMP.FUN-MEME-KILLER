import React, { useState } from 'react';
import { MessageSquarePlus, Filter, AlertCircle } from 'lucide-react';
import { ConfessionItem, ConfessionModal } from './ConfessionModal';
import { SITE_CONFIG } from '../config/siteConfig';

const INITIAL_SAMPLE_CONFESSIONS: ConfessionItem[] = [
  {
    id: 'sample-1',
    author: 'Anon Sol Veteran',
    text: 'I bought the top because the replies said 100x. Five minutes later the dev sold 8% of the supply and muted the chat.',
    category: 'Top Buyer',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-2',
    author: 'Paper Hands Survivor',
    text: 'I sold my allocation for $40 profit to buy dinner. Two days later the meme reached an $80M market cap. I learned that in this market, discipline feels identical to regret.',
    category: 'Early Exit',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-3',
    author: 'Ex-Community Lead',
    text: 'I spent two weeks organizing daily Twitter spaces, creating memes, and onboarding newcomers. When volume drifted to the next ticker, the entire room vanished in under 24 hours.',
    category: 'Abandoned Community',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-4',
    author: '3AM Trench Scroller',
    text: 'I chased five launches back-to-back because I convinced myself I was one trade away from making back my losses. By 5 AM I couldn’t remember the names of the tokens I bought.',
    category: 'FOMO',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-5',
    author: 'Reformed Degen',
    text: 'I finally realized that trading on 15-minute bonding curves isn’t investing or culture—it’s musical chairs with liquidity. Walking away gave me back my focus.',
    category: 'Lesson Learned',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-6',
    author: 'Curve Witness',
    text: 'The deployer launched three tokens with nearly identical names from three fresh wallets in 40 minutes. They didn’t even change the description text in the contract metadata.',
    category: 'Rug Pull',
    timestamp: 'Illustrative Example',
  },
];

export const ConfessionWall: React.FC = () => {
  const [confessions, setConfessions] = useState<ConfessionItem[]>(() => {
    try {
      const stored = sessionStorage.getItem(SITE_CONFIG.confessionSettings.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        return [...parsed, ...INITIAL_SAMPLE_CONFESSIONS];
      }
    } catch {
      // Fallback
    }
    return INITIAL_SAMPLE_CONFESSIONS;
  });

  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewSubmission = (item: ConfessionItem) => {
    const updated = [item, ...confessions];
    setConfessions(updated);
    try {
      const userItems = updated.filter((c) => c.isDemoSubmission);
      sessionStorage.setItem(
        SITE_CONFIG.confessionSettings.storageKey,
        JSON.stringify(userItems)
      );
    } catch {
      // Ignore storage errors
    }
  };

  const filteredConfessions = confessions.filter((item) => {
    if (activeFilter === 'ALL') return true;
    return item.category.toUpperCase() === activeFilter.toUpperCase();
  });

  const categories = [
    'ALL',
    'FOMO',
    'EARLY EXIT',
    'TOP BUYER',
    'RUG PULL',
    'ABANDONED COMMUNITY',
    'LESSON LEARNED',
  ];

  return (
    <section id="confessions" className="py-20 sm:py-28 bg-[#080A08] border-b border-[#181D18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase">
                05 // COMMUNITY VOICES
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F1F1E9] tracking-tight leading-tight mb-4">
              EVERYONE HAS<br />
              <span className="text-[#B5FF32]">A STORY.</span>
            </h2>

            <p className="text-base sm:text-lg font-editorial text-[#858A82] leading-relaxed">
              Anonymous reflections from participants who lived through the hype, the charts, the sudden dumps, and the silence that followed.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#B5FF32] hover:bg-[#c6ff59] text-[#080A08] font-mono-tech text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(181,255,50,0.2)] border border-[#B5FF32] cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>SHARE YOUR STORY</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#181D18]">
          <span className="text-xs font-mono-tech text-[#656C62] flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3 h-3 text-[#B5FF32]" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 font-mono-tech text-xs whitespace-nowrap transition-colors cursor-pointer border ${
                activeFilter === cat
                  ? 'bg-[#141A14] text-[#B5FF32] border-[#B5FF32]/60'
                  : 'bg-[#0D100D] text-[#858A82] border-[#181D18] hover:text-[#F1F1E9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Confession Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filteredConfessions.map((item) => (
            <div
              key={item.id}
              className={`p-6 border transition-all duration-150 flex flex-col justify-between group ${
                item.isDemoSubmission
                  ? 'bg-[#121A0F] border-[#B5FF32] shadow-[0_0_20px_rgba(181,255,50,0.12)]'
                  : 'bg-[#0D100D] border-[#181D18] hover:border-[#2C352C]'
              }`}
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#656C62] mb-3 pb-2 border-b border-[#181D18]">
                  <span className="text-[#F1F1E9] font-medium truncate max-w-[140px]">
                    {item.author}
                  </span>
                  <span
                    className={`px-2 py-0.5 uppercase font-semibold ${
                      item.category === 'Rug Pull' || item.category === 'Top Buyer'
                        ? 'text-[#FF3535] bg-[#1A0D0D]'
                        : item.category === 'Early Exit'
                        ? 'text-[#FF9933] bg-[#1A140D]'
                        : 'text-[#B5FF32] bg-[#121A0F]'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Confession Quote Text */}
                <p className="font-editorial text-sm sm:text-base text-[#c4cab8] leading-relaxed mb-4 group-hover:text-[#F1F1E9] transition-colors">
                  “{item.text}”
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-[#141814] flex items-center justify-between text-[9px] font-mono-tech text-[#4A524A]">
                <span>
                  {item.isDemoSubmission ? (
                    <span className="text-[#B5FF32] font-semibold">● SESSION SUBMISSION</span>
                  ) : (
                    <span>ARCHIVE REFLECTION</span>
                  )}
                </span>
                <span>{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Framing & Integrity Notice */}
        <div className="p-4 bg-[#0B0E0B] border border-[#181D18] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#858A82] shrink-0 mt-0.5" />
          <p className="text-xs font-mono-tech text-[#656C62] leading-relaxed">
            Archive reflections are illustrative representations of real market experiences in decentralized launchpads. User submissions in this prototype environment remain in your local session. Public broadcast requires connecting a persistent database with a human moderation pipeline.
          </p>
        </div>

      </div>

      {/* Modal Form */}
      <ConfessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewSubmission}
      />
    </section>
  );
};
