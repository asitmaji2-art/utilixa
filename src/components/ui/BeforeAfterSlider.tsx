'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Original',
  afterLabel = 'Compressed',
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let pos = (x / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;
      setSliderPos(pos);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-video max-h-[500px] w-full cursor-ew-resize gpu-layer ${className}`}
    >
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-lg backdrop-blur-md flex items-center gap-1">
        <Sparkles className="w-3 h-3" /> {afterLabel}
      </div>

      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 text-xs font-bold shadow-lg backdrop-blur-md">
          {beforeLabel}
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-cyan-400 via-white to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-xl shadow-cyan-500/50 flex items-center justify-center text-cyan-400 transition-transform hover:scale-110 active:scale-95">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
