'use client';

import React, { useEffect, useState } from 'react';
import { AdUnitProps } from '@/types';

export default function AdUnit({ slotId, format = 'auto', className = '', label = 'Advertisement' }: AdUnitProps) {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Attempt AdSense push if window.adsbygoogle is available
    try {
      if (typeof window !== 'undefined') {
        ((window as unknown as { adsbygoogle: Array<unknown> }).adsbygoogle = (window as unknown as { adsbygoogle: Array<unknown> }).adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch (err) {
      // Script load caught silently
    }
  }, []);

  const getContainerStyle = () => {
    switch (format) {
      case 'leaderboard':
        return 'min-h-[90px] max-w-[728px] mx-auto';
      case 'rectangle':
        return 'min-h-[250px] w-[300px] mx-auto';
      case 'fluid':
        return 'min-h-[120px] w-full';
      default:
        return 'min-h-[100px] w-full';
    }
  };

  return (
    <div className={`my-6 text-center overflow-hidden transition-all duration-300 ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 font-semibold">
        {label}
      </div>

      {/* Pre-allocated Zero CLS Container Slot */}
      <div className={`relative glass-panel rounded-xl flex items-center justify-center p-2 border border-slate-200/80 dark:border-slate-800/80 ${getContainerStyle()}`}>
        {/* Placeholder Ambient Neon Glow Skeleton when ad is uninitialized */}
        {!adLoaded && (
          <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 flex flex-col items-center justify-center gap-2 p-4 text-xs text-slate-400 dark:text-slate-500 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse flex items-center justify-center">
              <span className="text-[11px] font-bold text-cyan-400">ADS</span>
            </div>
            <span>AdSense Responsive Unit (#{slotId})</span>
          </div>
        )}

        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with real publisher ID when active
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
