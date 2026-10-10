import React from 'react';
import { Skull, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenModal: (type: 'disclaimer' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] py-14 sm:py-20 text-[#888888] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-[#181818]">
          {/* Brand & Closing Quote */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-[#B5FF32]/60 flex items-center justify-center bg-[#0d0d0d] text-[#B5FF32]">
                <Skull className="w-4 h-4 text-[#B5FF32]" />
              </div>
              <span className="font-syne text-base font-extrabold tracking-wider text-[#F1F1E9]">
                PUMP.FUN — MEME KILLER
              </span>
            </div>

            <p className="font-mono-degen text-xs sm:text-sm text-[#B5FF32] font-semibold tracking-wider uppercase">
              “{SITE_CONFIG.closingQuote}”
            </p>

            <p className="text-xs text-[#666666] leading-relaxed">
              An independent, satirical, anti-establishment critique exploring the friction-free token launch machine and speculative dynamics in Solana meme coin culture.
            </p>
          </div>

          {/* Navigation & Informational Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div>
              <span className="font-mono-degen text-xs font-bold text-[#F1F1E9] uppercase tracking-wider block mb-3">
                SECTIONS
              </span>
              <ul className="space-y-2 text-xs font-mono-degen">
                <li>
                  <a
                    href="#machine"
                    onClick={(e) => handleScrollTo(e, '#machine')}
                    className="hover:text-[#B5FF32] transition-colors"
                  >
                    The Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#damage"
                    onClick={(e) => handleScrollTo(e, '#damage')}
                    className="hover:text-[#B5FF32] transition-colors"
                  >
                    The Damage
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                    onClick={(e) => handleScrollTo(e, '#timeline')}
                    className="hover:text-[#B5FF32] transition-colors"
                  >
                    The Timeline
                  </a>
                </li>
                <li>
                  <a
                    href="#manifesto"
                    onClick={(e) => handleScrollTo(e, '#manifesto')}
                    className="hover:text-[#B5FF32] transition-colors"
                  >
                    The Manifesto
                  </a>
                </li>
                <li>
                  <a
                    href="#confessions"
                    onClick={(e) => handleScrollTo(e, '#confessions')}
                    className="hover:text-[#B5FF32] transition-colors"
                  >
                    Confessions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono-degen text-xs font-bold text-[#F1F1E9] uppercase tracking-wider block mb-3">
                LEGAL & ETHICS
              </span>
              <ul className="space-y-2 text-xs font-mono-degen">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenModal('disclaimer')}
                    className="hover:text-[#B5FF32] transition-colors cursor-pointer text-left"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenModal('privacy')}
                    className="hover:text-[#B5FF32] transition-colors cursor-pointer text-left"
                  >
                    Privacy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mandatory Full Disclaimer Paragraph */}
        <div className="pt-8 space-y-4">
          <div className="p-4 bg-[#090909] border border-[#1e1e1e]">
            <p className="text-[11px] font-mono-degen text-[#666666] leading-relaxed">
              <span className="text-[#888888] font-bold">DISCLAIMER: </span>
              {SITE_CONFIG.disclaimerFull}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-degen text-[#555555] pt-2">
            <span>© {new Date().getFullYear()} PUMP.FUN — MEME KILLER. ALL RIGHTS RESERVED.</span>
            <span className="mt-2 sm:mt-0 text-[#444444]">
              PARODIC CULTURAL COMMENTARY · NOT FINANCIAL ADVICE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
