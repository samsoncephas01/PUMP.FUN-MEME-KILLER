import React from 'react';
import { X, ShieldAlert, Lock, AlertTriangle } from 'lucide-react';
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
      <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-[#2e2e2e] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#B5FF32]/60 bg-[#121c08] flex items-center justify-center text-[#B5FF32]">
              {type === 'disclaimer' ? <ShieldAlert className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <span className="font-mono-degen text-[10px] text-[#B5FF32] tracking-widest uppercase block">
                LEGAL & EDITORIAL
              </span>
              <h3 className="font-syne text-lg sm:text-xl font-bold text-[#F1F1E9]">
                {type === 'disclaimer' ? 'EDITORIAL DISCLAIMER' : 'DATA & PRIVACY POLICY'}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#888888] hover:text-[#F1F1E9] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm font-mono-degen text-[#b5b5ab] leading-relaxed">
          {type === 'disclaimer' ? (
            <>
              <p className="text-[#F1F1E9] font-medium leading-relaxed">
                {SITE_CONFIG.disclaimerFull}
              </p>
              <div className="p-3 bg-[#151515] border-l-2 border-[#B5FF32] text-xs text-[#888888]">
                This site operates under fair use principles for commentary, education, cultural criticism, and satire. All trademarks mentioned belong to their respective holders.
              </div>
            </>
          ) : (
            <>
              <p className="text-[#F1F1E9]">
                {SITE_CONFIG.privacyNote}
              </p>
              <div className="space-y-2 pt-2 border-t border-[#222222]">
                <h4 className="font-bold text-[#B5FF32] uppercase text-xs">
                  ACTUAL DATA-HANDLING BEHAVIOR:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#999999]">
                  <li>No cookies for telemetry or advertising are placed.</li>
                  <li>No wallet connections or Web3 signatures are requested.</li>
                  <li>Confessions entered into the demo form are saved only in the visitor’s temporary browser session.</li>
                  <li>No telemetry is collected or sent to third-party ad networks.</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Footer Button */}
        <div className="pt-6 mt-6 border-t border-[#222222] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#141414] hover:bg-[#202020] border border-[#333333] text-xs font-mono-degen text-[#F1F1E9] transition-colors cursor-pointer"
          >
            ACKNOWLEDGE & CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
