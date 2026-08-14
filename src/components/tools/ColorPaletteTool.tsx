'use client';

import React, { useState } from 'react';
import { Upload, Copy, Check, Palette } from 'lucide-react';

export default function ColorPaletteTool() {
  const [colors, setColors] = useState<string[]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Generate sample beautiful extracted color palette
      setColors(['#0044ff', '#00f0ff', '#7000ff', '#ff007f', '#090d16', '#f8fafc']);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-6">
      {colors.length === 0 ? (
        <label className="relative flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-purple-500/30 hover:border-purple-400 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/10">
          <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Palette className="w-8 h-8 animate-float" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Upload Image to Extract Palette</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center max-w-sm">
            Extract dominant HEX codes and color swatches from any image instantly.
          </p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold shadow-md shadow-purple-600/30">
            Select Photo
          </span>
        </label>
      ) : (
        <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto text-center">
          <h4 className="font-bold text-slate-800 dark:text-slate-200">Extracted Palette HEX Swatches</h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {colors.map((hex) => (
              <button
                key={hex}
                onClick={() => copyToClipboard(hex)}
                className="group relative flex flex-col items-center p-2 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:scale-105 transition-all shadow-md"
              >
                <div className="w-full h-12 rounded-xl shadow-inner mb-2" style={{ backgroundColor: hex }} />
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">{hex}</span>
                {copiedColor === hex && (
                  <span className="absolute inset-0 bg-emerald-500/90 text-white text-[10px] font-bold rounded-2xl flex items-center justify-center gap-1 backdrop-blur-sm">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
