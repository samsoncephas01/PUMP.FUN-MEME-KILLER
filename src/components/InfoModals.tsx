import React from 'react';
import { X, ShieldAlert, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'disclaimer' | 'privacy' | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0E120E] border border-[#1f261f] shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#181D18] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#B5FF32]/60 bg-[#121A0F] flex items-center justify-center text-[#B5FF32]">
              {type === 'disclaimer' ? <ShieldAlert className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <span className="font-mono-tech text-[10px] text-[#B5FF32] tracking-widest uppercase block">
                LEGAL & EDITORIAL
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#F1F1E9]">
                {type === 'disclaimer' ? 'EDITORIAL DISCLAIMER' : 'DATA & PRIVACY POLICY'}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#858A82] hover:text-[#F1F1E9] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm font-editorial text-[#858A82] leading-relaxed">
          {type === 'disclaimer' ? (
            <>
              <p className="text-[#F1F1E9] font-medium leading-relaxed">
                {SITE_CONFIG.disclaimerFull}
              </p>
              <div className="p-3 bg-[#080A08] border-l-2 border-[#B5FF32] text-xs font-mono-tech text-[#656C62]">
                This site operates under fair use principles for cultural commentary, critique, education, and satire. All trademarks mentioned belong to their respective holders.
              </div>
            </>
          ) : (
            <>
              <p className="text-[#F1F1E9]">
                {SITE_CONFIG.privacyNote}
              </p>
              <div className="space-y-2 pt-2 border-t border-[#181D18]">
                <h4 className="font-bold text-[#B5FF32] uppercase text-xs font-mono-tech">
                  DATA HANDLING SPECIFICATION:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#858A82]">
                  <li>Zero tracking or advertising cookies deployed.</li>
                  <li>Zero wallet connections or signature prompts.</li>
                  <li>Submissions in this prototype are kept exclusively within your local browser session storage.</li>
                  <li>No telemetry is collected or sent to third-party ad networks.</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Footer Button */}
        <div className="pt-6 mt-6 border-t border-[#181D18] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#111411] hover:bg-[#181D18] border border-[#1f261f] text-xs font-mono-tech text-[#F1F1E9] transition-colors cursor-pointer"
          >
            ACKNOWLEDGE & CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
