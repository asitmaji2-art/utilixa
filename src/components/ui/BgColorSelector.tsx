'use client';

import React, { useState } from 'react';
import { Check, Pipette } from 'lucide-react';
import { PASSPORT_COLOR_PRESETS } from '@/lib/constants';

interface BgColorSelectorProps {
  selectedColor: string;
  onChange: (color: string) => void;
  className?: string;
}

export default function BgColorSelector({ selectedColor, onChange, className = '' }: BgColorSelectorProps) {
  const [customHex, setCustomHex] = useState('#0044ff');

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomHex(val);
    onChange(val);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-between">
        <span>Background Color Preset</span>
        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">{selectedColor}</span>
      </label>

      <div className="flex flex-wrap items-center gap-2">
        {PASSPORT_COLOR_PRESETS.map((preset) => {
          const isSelected = selectedColor.toLowerCase() === preset.value.toLowerCase();
          return (
            <button
              key={preset.name}
              type="button"
              onClick={() => onChange(preset.value)}
              className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md ring-2 ring-cyan-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className={`w-4 h-4 rounded-full shadow-inner flex items-center justify-center ${preset.previewBg}`}>
                {isSelected && <Check className={`w-3 h-3 ${preset.value === '#ffffff' || preset.value === 'transparent' ? 'text-slate-900' : 'text-white'}`} />}
              </span>
              <span>{preset.name}</span>
            </button>
          );
        })}

        {/* Custom Color Input Picker */}
        <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold border border-slate-300 dark:border-slate-700">
          <Pipette className="w-3.5 h-3.5 text-cyan-500" />
          <span>Custom</span>
          <input
            type="color"
            value={customHex}
            onChange={handleCustomChange}
            className="w-6 h-6 rounded-md cursor-pointer border-0 bg-transparent p-0"
          />
        </div>
      </div>
    </div>
  );
}
