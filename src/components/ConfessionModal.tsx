import React, { useState } from 'react';
import { X, Send, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export interface ConfessionItem {
  id: string;
  author: string;
  text: string;
  category: 'FOMO' | 'Early Exit' | 'Top Buyer' | 'Rug Pull' | 'Abandoned Community' | 'Lesson Learned';
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
  'Top Buyer',
  'Rug Pull',
  'Abandoned Community',
  'Lesson Learned',
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
    if (trimmed.length < 10) {
      setError('Please provide at least 10 characters so your reflection is meaningful.');
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
      <div className="relative w-full max-w-lg bg-[#0E120E] border border-[#1f261f] shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#181D18] pb-4 mb-6">
          <div>
            <span className="font-mono-tech text-[10px] text-[#B5FF32] tracking-widest uppercase block">
              COMMUNITY CONFESSIONAL
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F1F1E9]">
              SHARE YOUR STORY
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#858A82] hover:text-[#F1F1E9] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-none border border-[#B5FF32] bg-[#121A0F] flex items-center justify-center text-[#B5FF32]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h4 className="font-display text-xl font-bold text-[#F1F1E9]">
              CONFESSION RECORDED LOCALLY
            </h4>

            <p className="text-xs font-mono-tech text-[#858A82] leading-relaxed max-w-sm mx-auto">
              Your reflection has been added to your local browser session. Because no external database or moderation queue is connected in this prototype, submissions are not transmitted to or published on a public server.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 bg-[#B5FF32] hover:bg-[#c6ff59] text-[#080A08] font-mono-tech text-xs font-bold tracking-wider transition-colors cursor-pointer"
              >
                RETURN TO WALL
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honest Prototype Disclosure */}
            <div className="p-3 bg-[#080A08] border border-[#181D18] flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#B5FF32] shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono-tech text-[#858A82] leading-tight">
                <span className="text-[#F1F1E9] font-bold">PROTOTYPE NOTICE:</span> Submissions remain in your local session. To connect a live database, a backend with moderation safeguards is required. Never submit private keys or personal identifiers.
              </p>
            </div>

            {/* Display Name (Optional) */}
            <div>
              <label className="block font-mono-tech text-xs text-[#858A82] uppercase tracking-wider mb-1.5">
                Display Name <span className="text-[#4A524A]">(Optional)</span>
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Anon Trencher / Sol Survivor"
                maxLength={40}
                className="w-full px-3.5 py-2.5 bg-[#080A08] border border-[#1f261f] focus:border-[#B5FF32] focus:outline-none font-mono-tech text-xs text-[#F1F1E9] placeholder-[#4A524A] transition-colors"
              />
            </div>

            {/* Category Selector */}
            <div>
              <label className="block font-mono-tech text-xs text-[#858A82] uppercase tracking-wider mb-1.5">
                Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-2 text-center font-mono-tech text-[10px] font-medium border transition-colors cursor-pointer truncate ${
                      category === cat
                        ? 'bg-[#141A14] border-[#B5FF32] text-[#B5FF32]'
                        : 'bg-[#080A08] border-[#181D18] text-[#858A82] hover:border-[#2C352C]'
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
                <label className="font-mono-tech text-xs text-[#858A82] uppercase tracking-wider">
                  Your Reflection <span className="text-[#FF3535]">*</span>
                </label>
                <span
                  className={`font-mono-tech text-[11px] ${
                    remaining < 20 ? 'text-[#FF3535]' : 'text-[#656C62]'
                  }`}
                >
                  {remaining} chars left
                </span>
              </div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Describe your experience with FOMO, selling too early, buying the peak, or what you learned in the trenches..."
                rows={4}
                maxLength={maxChars}
                className="w-full p-3.5 bg-[#080A08] border border-[#1f261f] focus:border-[#B5FF32] focus:outline-none font-editorial text-xs sm:text-sm text-[#F1F1E9] placeholder-[#4A524A] leading-relaxed transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-xs font-mono-tech text-[#FF3535]">
                {error}
              </p>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#111411] hover:bg-[#181D18] border border-[#1f261f] font-mono-tech text-xs text-[#858A82] hover:text-[#F1F1E9] transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#B5FF32] hover:bg-[#c6ff59] text-[#080A08] font-mono-tech text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
