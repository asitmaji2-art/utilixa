'use client';

import React, { useState, useRef } from 'react';
import { Crop, Check, X, Ratio } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

interface CropModalProps {
  imageSrc: string;
  onCropComplete: (croppedBlob: Blob, croppedDataUrl: string) => void;
  onClose: () => void;
}

export default function CropModal({ imageSrc, onCropComplete, onClose }: CropModalProps) {
  const [aspectRatio, setAspectRatio] = useState<'free' | '3:4' | '1:1' | '4:3' | '16:9'>('3:4'); // Default 3:4 Passport ratio
  const [crop, setCrop] = useState<{ x: number; y: number; width: number; height: number }>({
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleApplyCrop = () => {
    if (!imgRef.current) return;
    const img = imgRef.current;

    const canvas = document.createElement('canvas');
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    const pixelX = (crop.x / 100) * img.width * scaleX;
    const pixelY = (crop.y / 100) * img.height * scaleY;
    const pixelW = (crop.width / 100) * img.width * scaleX;
    const pixelH = (crop.height / 100) * img.height * scaleY;

    canvas.width = Math.max(1, pixelW);
    canvas.height = Math.max(1, pixelH);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, pixelX, pixelY, pixelW, pixelH, 0, 0, pixelW, pixelH);
      canvas.toBlob((blob) => {
        if (blob) {
          const dataUrl = canvas.toDataURL('image/png');
          onCropComplete(blob, dataUrl);
        }
      }, 'image/png');
    }
  };

  const setRatioPreset = (preset: 'free' | '3:4' | '1:1' | '4:3' | '16:9') => {
    setAspectRatio(preset);
    if (preset === '1:1') {
      setCrop({ x: 15, y: 15, width: 70, height: 70 });
    } else if (preset === '3:4') {
      setCrop({ x: 20, y: 10, width: 60, height: 80 });
    } else if (preset === '4:3') {
      setCrop({ x: 10, y: 20, width: 80, height: 60 });
    } else if (preset === '16:9') {
      setCrop({ x: 5, y: 25, width: 90, height: 50 });
    } else {
      setCrop({ x: 10, y: 10, width: 80, height: 80 });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-3xl rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <Crop className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Manual Image Crop</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Aspect Ratio Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
            <Ratio className="w-3.5 h-3.5" /> Aspect Ratio:
          </span>
          {[
            { id: '3:4', label: '3:4 Passport Size' },
            { id: '1:1', label: '1:1 Square' },
            { id: '4:3', label: '4:3 Photo' },
            { id: '16:9', label: '16:9 Banner' },
            { id: 'free', label: 'Freeform' },
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => setRatioPreset(preset.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                aspectRatio === preset.id
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Interactive Cropper Canvas Workspace */}
        <div
          ref={containerRef}
          className="relative max-h-[420px] w-full flex items-center justify-center bg-slate-900 rounded-2xl overflow-hidden select-none border border-slate-800"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={imageSrc}
            alt="Crop workspace"
            className="max-h-[400px] w-auto object-contain pointer-events-none"
          />

          {/* Crop Overlay Box */}
          <div
            className="absolute border-2 border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-move rounded-lg"
            style={{
              left: `${crop.x}%`,
              top: `${crop.y}%`,
              width: `${crop.width}%`,
              height: `${crop.height}%`,
            }}
          >
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40">
              <div className="border-r border-b border-cyan-400/50" />
              <div className="border-r border-b border-cyan-400/50" />
              <div className="border-b border-cyan-400/50" />
              <div className="border-r border-b border-cyan-400/50" />
              <div className="border-r border-b border-cyan-400/50" />
              <div className="border-b border-cyan-400/50" />
              <div className="border-r border-cyan-400/50" />
              <div className="border-r border-cyan-400/50" />
              <div />
            </div>

            {/* Corner Resize Handles */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-cyan-400 rounded-full" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-cyan-400 rounded-full" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-cyan-400 rounded-full" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-cyan-400 rounded-full" />
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-200 transition-colors"
          >
            Cancel
          </button>
          <MagneticButton variant="glow" onClick={handleApplyCrop}>
            <Check className="w-4 h-4" />
            <span>Apply Crop & Continue</span>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
