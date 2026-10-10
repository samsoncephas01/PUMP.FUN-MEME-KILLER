import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MachineCycle } from './components/MachineCycle';
import { DamageCards } from './components/DamageCards';
import { Timeline } from './components/Timeline';
import { Manifesto } from './components/Manifesto';
import { ConfessionWall } from './components/ConfessionWall';
import { ConfessionModal, ConfessionItem } from './components/ConfessionModal';
import { CommunityCall } from './components/CommunityCall';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModals';
import { CustomCursor } from './components/CustomCursor';
import { Tv, MonitorX } from 'lucide-react';
import { SITE_CONFIG } from './config/siteConfig';

export default function App() {
  const [modalType, setModalType] = useState<'disclaimer' | 'privacy' | null>(null);
  const [isConfessionModalOpen, setIsConfessionModalOpen] = useState(false);
  const [crtScanlinesEnabled, setCrtScanlinesEnabled] = useState(true);

  const handleGlobalConfessionSubmit = (item: ConfessionItem) => {
    try {
      const existingStr = sessionStorage.getItem(SITE_CONFIG.confessionSettings.storageKey);
      const existing = existingStr ? JSON.parse(existingStr) : [];
      sessionStorage.setItem(
        SITE_CONFIG.confessionSettings.storageKey,
        JSON.stringify([item, ...existing])
      );
    } catch {
      // Ignore session errors
    }
    // Automatically trigger reload or state sync by dispatching storage event
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F1F1E9] relative selection:bg-[#B5FF32] selection:text-[#080808]">
      {/* Optional CRT Scanlines Layer */}
      {crtScanlinesEnabled && (
        <div className="scanlines fixed inset-0 z-40 pointer-events-none opacity-60" />
      )}

      {/* Desktop Custom Reticle Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navigation />

      {/* Main Content Layout */}
      <main id="root-content" className="relative z-10">
        {/* Section B: Hero with Industrial Conveyor Belt */}
        <Hero />

        {/* Section C: The Machine (5-Stage Interactive Cycle) */}
        <MachineCycle />

        {/* Section D: The Damage (4 Brutalist Culture Cards) */}
        <DamageCards />

        {/* Section E: The Meme Killer Timeline (The Evolution) */}
        <Timeline />

        {/* Section F: The Manifesto (Principles & Statement) */}
        <Manifesto />

        {/* Section G: Trench Confessions Wall */}
        <ConfessionWall />

        {/* Section H: Community Call to Action */}
        <CommunityCall
          onOpenConfessionModal={() => setIsConfessionModalOpen(true)}
        />
      </main>

      {/* Section I: Footer */}
      <Footer onOpenModal={(type) => setModalType(type)} />

      {/* Global Modals */}
      <InfoModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />

      <ConfessionModal
        isOpen={isConfessionModalOpen}
        onClose={() => setIsConfessionModalOpen(false)}
        onSubmit={handleGlobalConfessionSubmit}
      />

      {/* CRT Scanline Toggle Floating Control */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setCrtScanlinesEnabled(!crtScanlinesEnabled)}
          className="px-2.5 py-1.5 bg-[#0f0f0f]/90 hover:bg-[#1a1a1a] border border-[#262626] text-[10px] font-mono-degen text-[#888888] hover:text-[#B5FF32] transition-colors flex items-center gap-1.5 backdrop-blur-sm cursor-pointer shadow-md"
          title="Toggle CRT Scanline Aesthetics"
        >
          {crtScanlinesEnabled ? (
            <>
              <Tv className="w-3 h-3 text-[#B5FF32]" />
              <span>CRT FX: ON</span>
            </>
          ) : (
            <>
              <MonitorX className="w-3 h-3" />
              <span>CRT FX: OFF</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
