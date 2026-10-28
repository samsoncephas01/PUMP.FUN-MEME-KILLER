import React, { useState } from 'react';
import { MessageSquare, ArrowUp, Info, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface CommunityCallProps {
  onOpenConfessionModal: () => void;
}

export const CommunityCall: React.FC<CommunityCallProps> = ({
  onOpenConfessionModal,
}) => {
  const [socialNoticeOpen, setSocialNoticeOpen] = useState(false);

  const handleJoinConversation = () => {
    if (!SITE_CONFIG.socials.twitter.configured) {
      setSocialNoticeOpen(true);
    } else if (SITE_CONFIG.socials.twitter.url) {
      window.open(SITE_CONFIG.socials.twitter.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080A08] border-b border-[#181D18] relative overflow-hidden">
      
      {/* Background Echo of the Desolate Digital Landscape */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-20">
        <img
          src="/hero-cemetery.jpg"
          alt="Desolate digital relics"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A08] via-[#080A08]/90 to-[#080A08]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="font-mono-tech text-xs tracking-widest text-[#B5FF32] uppercase px-3 py-1 bg-[#121A0F] border border-[#1f261f]">
            FINAL // THE CALL
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F1F1E9] tracking-tight leading-[1.08] mb-6">
          STOP CHASING<br />
          <span className="text-[#FF3535]">THE NEXT LAUNCH.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl font-editorial text-[#858A82] leading-relaxed mb-10">
          Question the incentives. Examine the cycle. Remember the people behind the tickers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          {/* 1. Join Conversation */}
          <button
            type="button"
            onClick={handleJoinConversation}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#B5FF32] hover:bg-[#c6ff59] text-[#080A08] font-mono-tech text-xs sm:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(181,255,50,0.25)] border border-[#B5FF32] flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>JOIN THE CONVERSATION</span>
          </button>

          {/* 2. Share Your Story */}
          <button
            type="button"
            onClick={onOpenConfessionModal}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#111411] hover:bg-[#181D18] text-[#F1F1E9] border border-[#1f261f] hover:border-[#858A82] font-mono-tech text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>SHARE YOUR STORY</span>
          </button>

          {/* 3. Return to Top */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="w-full sm:w-auto px-5 py-3.5 bg-[#0D100D] hover:bg-[#141A14] text-[#858A82] hover:text-[#F1F1E9] border border-[#181D18] font-mono-tech text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Honest Configuration Notice if Social Channel is not set */}
        {socialNoticeOpen && (
          <div className="mt-6 max-w-lg mx-auto p-4 bg-[#0E120E] border border-[#1f261f] text-left relative animate-fade-in">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#B5FF32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono-tech text-xs font-bold text-[#F1F1E9] mb-1">
                    COMMUNITY CHANNEL UNLINKED
                  </h4>
                  <p className="text-xs font-mono-tech text-[#858A82] leading-relaxed">
                    Social links are presently set to placeholder in <code className="text-[#B5FF32]">src/config/siteConfig.ts</code>. To link a live community discourse, specify your verified handle in the configuration file.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSocialNoticeOpen(false)}
                className="text-[#656C62] hover:text-[#F1F1E9] p-1"
                aria-label="Dismiss message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Closing Monumental Narrative */}
        <div className="mt-14 pt-8 border-t border-[#141814]">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-[#656C62]">
            {SITE_CONFIG.coreThesis}
          </p>
        </div>

      </div>
    </section>
  );
};
