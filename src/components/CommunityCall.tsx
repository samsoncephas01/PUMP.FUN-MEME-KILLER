import React, { useState } from 'react';
import { MessageSquarePlus, MessageCircle, ArrowUp, Info, AlertTriangle, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface CommunityCallProps {
  onOpenConfessionModal: () => void;
}

export const CommunityCall: React.FC<CommunityCallProps> = ({
  onOpenConfessionModal,
}) => {
  const [socialAlertOpen, setSocialAlertOpen] = useState(false);

  const handleFollowConversation = () => {
    // Honest handling of unconfigured social link
    if (!SITE_CONFIG.socials.twitter.configured) {
      setSocialAlertOpen(true);
    } else if (SITE_CONFIG.socials.twitter.url) {
      window.open(SITE_CONFIG.socials.twitter.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#1c1c1c] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Section Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="font-mono-degen text-xs tracking-widest text-[#B5FF32] uppercase px-3 py-1 bg-[#121c08] border border-[#B5FF32]/30">
            06. YOUR TURN
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F1E9] tracking-tight leading-tight mb-6">
          ARE YOU HERE FOR THE MEME —<br />
          <span className="text-[#FF3535]">OR JUST THE EXIT?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#b8b8b0] leading-relaxed mb-10">
          Share your story. Question the machine. Bring the culture back into the conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
          {/* 1. Share Confession */}
          <button
            type="button"
            onClick={onOpenConfessionModal}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#B5FF32] hover:bg-[#c4ff59] text-[#080808] font-mono-degen text-xs sm:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(181,255,50,0.25)] border border-[#B5FF32] flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>SHARE YOUR CONFESSION</span>
          </button>

          {/* 2. Follow Conversation (honest placeholder) */}
          <button
            type="button"
            onClick={handleFollowConversation}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#141414] hover:bg-[#202020] text-[#F1F1E9] border border-[#333333] hover:border-[#555555] font-mono-degen text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#B5FF32]" />
            <span>FOLLOW THE CONVERSATION</span>
          </button>

          {/* 3. Back to Top */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#101010] hover:bg-[#1a1a1a] text-[#888888] hover:text-[#F1F1E9] border border-[#222222] font-mono-degen text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>BACK TO THE TOP</span>
          </button>
        </div>

        {/* Honest social notice modal / banner */}
        {socialAlertOpen && (
          <div className="mt-6 max-w-lg mx-auto p-4 bg-[#141414] border border-[#333333] text-left relative animate-fade-in">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#B5FF32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono-degen text-xs font-bold text-[#F1F1E9] mb-1">
                    COMMUNITY LINK NOT CONFIGURED
                  </h4>
                  <p className="text-xs font-mono-degen text-[#888888] leading-relaxed">
                    Social channels are currently set to placeholder in <code className="text-[#B5FF32]">src/config/siteConfig.ts</code>. To link an official community space, update the configuration file with your verified handle.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSocialAlertOpen(false)}
                className="text-[#666666] hover:text-[#F1F1E9] p-1"
                aria-label="Dismiss message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
