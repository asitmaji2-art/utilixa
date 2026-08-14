'use client';

import React from 'react';

interface LaserScannerProps {
  active: boolean;
  className?: string;
}

export default function LaserScanner({ active, className = '' }: LaserScannerProps) {
  if (!active) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-30 ${className}`}>
      {/* Darkened Scanning Mask */}
      <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[1px]" />

      {/* Moving Laser Beam */}
      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff,0_0_40px_#00f0ff] animate-laser-scan">
        <div className="absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none" />
      </div>

      {/* Scanning Target Grid Lines FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff0d_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff0d_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
