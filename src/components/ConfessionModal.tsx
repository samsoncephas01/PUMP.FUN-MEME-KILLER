import React, { useState } from 'react';
import { X, Send, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export interface ConfessionItem {
  id: string;
  author: string;
  text: string;
  category: 'FOMO' | 'Early Exit' | 'Late Entry' | 'Rug Experience' | 'Community' | 'Other';
  timestamp: string;
  isDemoSubmission?: boolean;
}

interface ConfessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (confession: ConfessionItem) => void;
}

const CATEGORIES: ConfessionItem['category'][] = [
  'FOMO',
  'Early Exit',
  'Late Entry',
  'Rug Experience',
  'Community',
  'Other',
];

export const ConfessionModal: React.FC<ConfessionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState<ConfessionItem['category']>('FOMO');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const maxChars = SITE_CONFIG.confessionSettings.maxCharacters;
  const remaining = maxChars - text.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = text.trim();
    if (!trimmed) {
      setError('Confession text cannot be empty.');
      return;
    }
    if (trimmed.length < 8) {
      setError('Please provide at least 8 characters for your confession.');
      return;
    }
    if (trimmed.length > maxChars) {
      setError(`Maximum character limit is ${maxChars}.`);
      return;
    }

    const newConfession: ConfessionItem = {
      id: `local-${Date.now()}`,
      author: author.trim() ? author.trim() : 'Anonymous Trencher',
      text: trimmed,
      category,
      timestamp: 'Just now',
      isDemoSubmission: true,
    };

    onSubmit(newConfession);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setText('');
    setAuthor('');
    setCategory('FOMO');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-[#2e2e2e] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
          <div>
            <span className="font-mono-degen text-[11px] text-[#B5FF32] tracking-widest uppercase block">
              TRENCH CONFESSIONAL
            </span>
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#F1F1E9]">
              SUBMIT A CONFESSION
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#888888] hover:text-[#F1F1E9] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-none border border-[#B5FF32] bg-[#121c08] flex items-center justify-center text-[#B5FF32]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h4 className="font-syne text-xl font-bold text-[#F1F1E9]">
              CONFESSION RECORDED IN LOCAL SESSION
            </h4>

            <p className="text-sm font-mono-degen text-[#aaaaaa] leading-relaxed max-w-sm mx-auto">
              Your note has been added to your local browser view. Because no remote database or moderation backend is configured for this demo, your submission is not published publicly.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 bg-[#B5FF32] hover:bg-[#c4ff59] text-[#080808] font-mono-degen text-xs font-bold tracking-wider transition-colors cursor-pointer"
              >
                RETURN TO WALL
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Demo Notice Warning */}
            <div className="p-3 bg-[#141414] border border-[#2a2a2a] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#B5FF32] shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono-degen text-[#888888] leading-tight">
                <span className="text-[#F1F1E9] font-bold">DEMO MODE:</span> Submissions remain in your local browser session only. Never share wallet private keys, seed phrases, or sensitive personal data.
              </p>
            </div>

            {/* Anonymous Display Name (Optional) */}
            <div>
              <label className="block font-mono-degen text-xs text-[#888888] uppercase tracking-wider mb-1.5">
                Display Name <span className="text-[#555555]">(Optional)</span>
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. 3AM Sol Sniper / Anon Holder"
                maxLength={40}
                className="w-full px-3.5 py-2.5 bg-[#080808] border border-[#2a2a2a] focus:border-[#B5FF32] focus:outline-none font-mono-degen text-xs text-[#F1F1E9] placeholder-[#444444] transition-colors"
              />
            </div>

            {/* Category Selector */}
            <div>
              <label className="block font-mono-degen text-xs text-[#888888] uppercase tracking-wider mb-1.5">
                Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-2 text-center font-mono-degen text-[11px] font-medium border transition-colors cursor-pointer ${
                      category === cat
                        ? 'bg-[#152109] border-[#B5FF32] text-[#B5FF32]'
                        : 'bg-[#080808] border-[#222222] text-[#888888] hover:border-[#444444]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Confession Text Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-mono-degen text-xs text-[#888888] uppercase tracking-wider">
                  Your Confession <span className="text-[#FF3535]">*</span>
                </label>
                <span
                  className={`font-mono-degen text-[11px] ${
                    remaining < 20 ? 'text-[#FF3535]' : 'text-[#666666]'
                  }`}
                >
                  {remaining} chars left
                </span>
              </div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Share your experience with FOMO, late entries, dev exits, or holding bags..."
                rows={4}
                maxLength={maxChars}
                className="w-full p-3.5 bg-[#080808] border border-[#2a2a2a] focus:border-[#B5FF32] focus:outline-none font-mono-degen text-xs sm:text-sm text-[#F1F1E9] placeholder-[#444444] leading-relaxed transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-xs font-mono-degen text-[#FF3535]">
                {error}
              </p>
            )}

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#2a2a2a] font-mono-degen text-xs text-[#888888] hover:text-[#F1F1E9] transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#B5FF32] hover:bg-[#c4ff59] text-[#080808] font-mono-degen text-xs font-bold tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>CONFESS</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
