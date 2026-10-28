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
  const [crtScanlinesEnabled, setCrtScanlinesEnabled] = useState(false);

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
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen bg-[#080A08] text-[#F1F1E9] relative selection:bg-[#B5FF32] selection:text-[#080A08]">
      {/* Optional CRT Scanlines Layer */}
      {crtScanlinesEnabled && (
        <div className="scanlines fixed inset-0 z-40 pointer-events-none opacity-40" />
      )}

      {/* Desktop Custom Reticle Cursor */}
      <CustomCursor />

      {/* Slim Fixed Navigation Bar */}
      <Navigation />

      {/* Main Editorial Flow */}
      <main id="root-content" className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Section 01: The Machine — "THE FACTORY NEVER CLOSES." */}
        <MachineCycle />

        {/* Section 02: The Damage — "EVERY LAUNCH HAS A HUMAN SIDE." */}
        <DamageCards />

        {/* Section 03: The Timeline — "THE CYCLE, REPEATED." */}
        <Timeline />

        {/* Section 04: The Manifesto — "WE DON'T HATE MEMES." */}
        <Manifesto />

        {/* Section 05: Confessions — "EVERYONE HAS A STORY." */}
        <ConfessionWall />

        {/* Final Section: The Call — "STOP CHASING THE NEXT LAUNCH." */}
        <CommunityCall
          onOpenConfessionModal={() => setIsConfessionModalOpen(true)}
        />
      </main>

      {/* Footer */}
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

      {/* Subtle CRT Scanline Toggle Control */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setCrtScanlinesEnabled(!crtScanlinesEnabled)}
          className="px-2.5 py-1.5 bg-[#0D100D]/90 hover:bg-[#141A14] border border-[#181D18] text-[10px] font-mono-tech text-[#858A82] hover:text-[#B5FF32] transition-colors flex items-center gap-1.5 backdrop-blur-sm cursor-pointer shadow-md"
          title="Toggle CRT Scanline Aesthetics"
        >
          {crtScanlinesEnabled ? (
            <>
              <Tv className="w-3 h-3 text-[#B5FF32]" />
              <span>CRT: ON</span>
            </>
          ) : (
            <>
              <MonitorX className="w-3 h-3" />
              <span>CRT: OFF</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
