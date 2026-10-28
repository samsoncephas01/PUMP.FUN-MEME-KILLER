import React from 'react';
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
    <footer className="bg-[#080A08] border-t border-[#181D18] py-14 sm:py-20 text-[#858A82] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-[#141814]">
          
          {/* Brand & Closing Quote */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm border border-[#1f261f] bg-[#0d100d] flex items-center justify-center">
                <div className="w-2.5 h-4 rounded-full border border-[#B5FF32]/80 flex flex-col overflow-hidden rotate-45">
                  <div className="w-full h-1/2 bg-[#00F0FF]/80" />
                  <div className="w-full h-1/2 bg-[#B5FF32]" />
                </div>
              </div>
              <span className="font-display text-sm font-bold tracking-wider text-[#F1F1E9]">
                PUMP.FUN — MEME KILLER
              </span>
            </div>

            <p className="font-mono-tech text-xs sm:text-sm text-[#B5FF32] font-semibold tracking-wider uppercase">
              “{SITE_CONFIG.closingQuote}”
            </p>

            <p className="text-xs font-editorial text-[#656C62] leading-relaxed">
              An independent, satirical cultural critique exploring frictionless launchpads, speculative hyper-vigilance, and the disposable attention economy in Solana meme coin culture.
            </p>
          </div>

          {/* Navigation & Informational Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div>
              <span className="font-mono-tech text-xs font-semibold text-[#F1F1E9] uppercase tracking-wider block mb-3">
                SECTIONS
              </span>
              <ul className="space-y-2 text-xs font-mono-tech">
                {SITE_CONFIG.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="hover:text-[#B5FF32] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono-tech text-xs font-semibold text-[#F1F1E9] uppercase tracking-wider block mb-3">
                LEGAL & ETHICS
              </span>
              <ul className="space-y-2 text-xs font-mono-tech">
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
                    Privacy Notice
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mandatory Full Disclaimer Paragraph */}
        <div className="pt-8 space-y-4">
          <div className="p-4 bg-[#0B0E0B] border border-[#141814]">
            <p className="text-[11px] font-mono-tech text-[#656C62] leading-relaxed">
              <span className="text-[#858A82] font-bold">DISCLAIMER: </span>
              {SITE_CONFIG.disclaimerFull}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#4A524A] pt-2">
            <span>© {new Date().getFullYear()} PUMP.FUN: MEME KILLER. ALL RIGHTS RESERVED.</span>
            <span className="mt-2 sm:mt-0 text-[#656C62]">
              INDEPENDENT CULTURAL CRITIQUE · NOT FINANCIAL ADVICE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
