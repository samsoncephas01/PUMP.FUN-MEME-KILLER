import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Filter, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
import { ConfessionItem, ConfessionModal } from './ConfessionModal';
import { SITE_CONFIG } from '../config/siteConfig';

const INITIAL_SAMPLE_CONFESSIONS: ConfessionItem[] = [
  {
    id: 'sample-1',
    author: 'Anonymous Sol Veteran',
    text: 'I bought the top because the replies said 100x.',
    category: 'FOMO',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-2',
    author: 'Paper Hands Survivor',
    text: 'I sold the meme. It became the movement.',
    category: 'Early Exit',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-3',
    author: 'Ex-Telegram Mod',
    text: 'I thought the community was real. The chart told a different story.',
    category: 'Community',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-4',
    author: 'Trench Zombie #404',
    text: 'I chased five launches and forgot why I was here.',
    category: 'Late Entry',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-5',
    author: 'Lucky Trader',
    text: 'I made money and still learned nothing.',
    category: 'Other',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-6',
    author: 'Bonding Curve Witness',
    text: 'I watched the dev burn 90% of supply, buy back from an alt wallet, and dip right as the stream peaked.',
    category: 'Rug Experience',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-7',
    author: 'Night Shift Scroller',
    text: 'I woke up at 4 AM to check a red candle on a token named after a misspelled vegetable.',
    category: 'FOMO',
    timestamp: 'Illustrative Example',
  },
  {
    id: 'sample-8',
    author: 'Meme Archeologist',
    text: 'We spent weeks drawing original artwork. The token that copied an unedited screenshot did 20x our volume in 10 minutes.',
    category: 'Community',
    timestamp: 'Illustrative Example',
  },
];

export const ConfessionWall: React.FC = () => {
  const [confessions, setConfessions] = useState<ConfessionItem[]>(() => {
    // Check sessionStorage for previous demo submissions in this browser session
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
      // Keep demo submissions in session storage
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

  const categories = ['ALL', 'FOMO', 'EARLY EXIT', 'LATE ENTRY', 'RUG EXPERIENCE', 'COMMUNITY'];

  return (
    <section id="confessions" className="py-20 sm:py-28 bg-[#080808] border-b border-[#1c1c1c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase">
                05. TRENCH CONFESSIONS
              </span>
              <span className="text-[#333333]">/</span>
              <span className="font-mono-degen text-xs tracking-wider text-[#777777]">
                ANONYMOUS REFLECTIONS
              </span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight">
              EVERY DEGEN<br />
              HAS A <span className="text-[#B5FF32]">STORY.</span>
            </h2>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B5FF32] hover:bg-[#c4ff59] text-[#080808] font-mono-degen text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(181,255,50,0.25)] border border-[#B5FF32] cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>SUBMIT CONFESSION</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#1a1a1a]">
          <span className="text-xs font-mono-degen text-[#666666] flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3 h-3 text-[#B5FF32]" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 font-mono-degen text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#152009] text-[#B5FF32] border border-[#B5FF32]/60'
                  : 'bg-[#0f0f0f] text-[#888888] border border-[#222222] hover:text-[#F1F1E9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Confession Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredConfessions.map((item) => (
            <div
              key={item.id}
              className={`p-6 border transition-all duration-200 flex flex-col justify-between relative group ${
                item.isDemoSubmission
                  ? 'bg-[#131b0a] border-[#B5FF32] shadow-[0_0_20px_rgba(181,255,50,0.15)]'
                  : 'bg-[#0d0d0d] border-[#222222] hover:border-[#3a3a3a]'
              }`}
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono-degen text-[#777777] mb-3 pb-2 border-b border-[#1c1c1c]">
                  <span className="text-[#F1F1E9] font-medium truncate max-w-[150px]">
                    {item.author}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] uppercase font-bold ${
                      item.category === 'Rug Experience'
                        ? 'text-[#FF3535] bg-[#220909]'
                        : item.category === 'Early Exit'
                        ? 'text-[#FF9933] bg-[#221609]'
                        : 'text-[#B5FF32] bg-[#121c08]'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Confession Quote Text */}
                <p className="font-mono-degen text-sm sm:text-base text-[#F1F1E9] leading-relaxed mb-4 group-hover:text-white">
                  “{item.text}”
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-[10px] font-mono-degen text-[#555555]">
                <span>
                  {item.isDemoSubmission ? (
                    <span className="text-[#B5FF32] font-bold">● YOUR DEMO SUBMISSION</span>
                  ) : (
                    <span>ILLUSTRATIVE EXAMPLE</span>
                  )}
                </span>
                <span>{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Framing & Integrity Notice */}
        <div className="mt-8 p-4 bg-[#0a0a0a] border border-[#222222] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#777777] shrink-0 mt-0.5" />
          <p className="text-xs font-mono-degen text-[#777777] leading-relaxed">
            Illustrative sample confessions are simulated representations of common crypto market experiences. Visitor submissions in this preview build are stored locally in your session and will not be displayed to other visitors without a configured backend and moderation service.
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
