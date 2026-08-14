'use client';

import React from 'react';

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 gpu-layer">
      {/* Primary Glow Orb 1 */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-[100px] animate-orb-slow"
        style={{ willChange: 'transform' }}
      />
      {/* Primary Glow Orb 2 */}
      <div 
        className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-blue-500/20 blur-[120px] animate-orb-slow-reverse"
        style={{ willChange: 'transform' }}
      />
      {/* Primary Glow Orb 3 */}
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-t from-blue-600/15 via-cyan-400/10 to-indigo-600/15 blur-[110px] animate-orb-slow"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
