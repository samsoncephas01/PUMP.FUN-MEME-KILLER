import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Skull, AlertTriangle, Disc, Bomb, RefreshCw, Cpu } from 'lucide-react';

interface ConveyorToken {
  id: string;
  name: string;
  symbol: string;
  icon: React.ElementType;
  color: string;
  isPill?: boolean;
  stage: 'mint' | 'pump' | 'dump' | 'void';
}

const SAMPLE_TOKENS: ConveyorToken[] = [
  { id: '1', name: 'CYAN CAPSULE', symbol: '$PILL', icon: Zap, color: '#00F0FF', isPill: true, stage: 'pump' },
  { id: '2', name: 'BAGHOLDER', symbol: '$BAG', icon: AlertTriangle, color: '#FF3535', stage: 'dump' },
  { id: '3', name: 'TIMELINE BURN', symbol: '$BURN', icon: Flame, color: '#B5FF32', stage: 'pump' },
  { id: '4', name: 'DEV EXIT', symbol: '$EXIT', icon: Skull, color: '#FF3535', stage: 'void' },
  { id: '5', name: 'SPLIT DOSE', symbol: '$DOSE', icon: Disc, color: '#00F0FF', isPill: true, stage: 'mint' },
  { id: '6', name: 'TRENCH FEVER', symbol: '$TRENCH', icon: Bomb, color: '#FF3535', stage: 'dump' },
  { id: '7', name: 'SPEEDRUN TO ZERO', symbol: '$ZERO', icon: RefreshCw, color: '#B5FF32', stage: 'mint' },
  { id: '8', name: 'CYBER MASCOT', symbol: '$MASCOT', icon: Cpu, color: '#FF3535', stage: 'void' },
];

export const ConveyorBelt: React.FC = () => {
  const gradientId = useId();

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8 border-y border-[#1a1a1a] bg-[#050505]">
      {/* Conveyor Overhead Industrial Girders and Warning Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-repeating-linear-gradient(45deg,#B5FF32,#B5FF32_10px,#080808_10px,#080808_20px) opacity-40 z-10" />

      {/* Background track status watermark label */}
      <div className="absolute top-2 left-4 text-[10px] font-mono-degen text-[#444444] tracking-widest uppercase flex items-center gap-2">
        <span>ASSEMBLY LINE // CONTINUOUS TOKEN STREAM</span>
        <span className="text-[#B5FF32] animate-pulse">● FEEDING THE MACHINE</span>
      </div>

      <div className="relative flex items-center min-h-[140px] sm:min-h-[160px] pt-4">
        {/* Left Feed Zone Scrim */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Right Exit / Disintegration Zone Scrim & Laser Scanner */}
        <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none flex items-center justify-end pr-4">
          {/* Laser Scanner Line */}
          <div className="w-[2px] h-full bg-[#FF3535] shadow-[0_0_12px_#FF3535] relative">
            <span className="absolute top-1/2 -left-20 -translate-y-1/2 text-[9px] font-mono-degen text-[#FF3535] tracking-widest rotate-90">
              DISINTEGRATOR
            </span>
          </div>
        </div>

        {/* Endless Moving Belt with Generic Satirical Tokens */}
        <div className="flex w-max animate-ticker">
          {[...SAMPLE_TOKENS, ...SAMPLE_TOKENS, ...SAMPLE_TOKENS].map((token, index) => {
            const Icon = token.icon;
            const isRed = token.color === '#FF3535';

            return (
              <div
                key={`${token.id}-${index}`}
                className="flex flex-col items-center justify-center mx-3 sm:mx-5 w-32 sm:w-40 p-3 bg-[#0d0d0d] border border-[#222222] hover:border-[#B5FF32]/60 transition-all duration-200 group shrink-0 relative"
              >
                {/* Stage Tag */}
                <div className="w-full flex items-center justify-between text-[9px] font-mono-degen text-[#777777] mb-2 border-b border-[#1a1a1a] pb-1">
                  <span className="uppercase">{token.stage}</span>
                  <span className={isRed ? 'text-[#FF3535]' : token.isPill ? 'text-[#00F0FF]' : 'text-[#B5FF32]'}>
                    {token.symbol}
                  </span>
                </div>

                {/* Token Coin / Pill Silhouette */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${token.isPill ? 'rounded-2xl' : 'rounded-full'} border-2 flex items-center justify-center relative mb-2 transition-transform group-hover:scale-105 ${
                    isRed
                      ? 'border-[#FF3535]/50 bg-[#1a0808] text-[#FF3535] shadow-[0_0_10px_rgba(255,53,53,0.2)]'
                      : token.isPill
                      ? 'border-[#00F0FF]/60 bg-gradient-to-br from-[#00F0FF]/15 to-[#B5FF32]/15 text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'border-[#B5FF32]/50 bg-[#0d1406] text-[#B5FF32] shadow-[0_0_10px_rgba(181,255,50,0.2)]'
                  }`}
                >
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                  {/* Subtle inner rotating notch */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-current opacity-30 animate-spin" style={{ animationDuration: '8s' }} />
                </div>

                {/* Token Name */}
                <span className="text-[11px] font-mono-degen font-semibold text-[#F1F1E9] tracking-wider truncate max-w-full group-hover:text-[#B5FF32] transition-colors">
                  {token.name}
                </span>

                {/* Industrial Mounting Pegs */}
                <div className="absolute -bottom-1.5 left-2 w-1.5 h-1.5 bg-[#333333] border border-[#111111]" />
                <div className="absolute -bottom-1.5 right-2 w-1.5 h-1.5 bg-[#333333] border border-[#111111]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Industrial Tread Belting Bottom Graphic */}
      <div className="w-full h-3 bg-[#0a0a0a] border-t border-[#1f1f1f] flex items-center justify-between px-2 overflow-hidden opacity-60">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-2 h-1.5 bg-[#1c1c1c] shrink-0 mx-1" />
        ))}
      </div>
    </div>
  );
};
