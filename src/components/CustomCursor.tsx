import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover and fine pointer (desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateDevice = () => setIsDesktop(mediaQuery.matches);
    updateDevice();
    mediaQuery.addEventListener('change', updateDevice);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const computed = window.getComputedStyle(target);
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          computed.cursor === 'pointer';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', updateDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer reticle / crosshair */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 border transition-all duration-75 pointer-events-none ${
          isPointer
            ? 'w-8 h-8 border-[#B5FF32] rotate-45 bg-[#B5FF32]/10 scale-110'
            : 'w-5 h-5 border-[#B5FF32]/60 rounded-full'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Center pinpoint */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#B5FF32] rounded-full pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
