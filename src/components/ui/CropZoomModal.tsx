'use client';

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Crop, Check, X, RotateCcw, RotateCw, ZoomIn, FlipHorizontal, FlipVertical } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

interface CropZoomModalProps {
  imageSrc: string;
  onCropComplete: (croppedBlob: Blob, croppedDataUrl: string) => void;
  onClose: () => void;
}

export default function CropZoomModal({ imageSrc, onCropComplete, onClose }: CropZoomModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState({ horizontal: false, vertical: false });
  const [aspect, setAspect] = useState<number | undefined>(3 / 4); // Default 3:4 Passport ratio
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropChange = (crop: { x: number; y: number }) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  const onCropCompleteCallback = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  const getCroppedImg = async (): Promise<{ blob: Blob; dataUrl: string } | null> => {
    if (!croppedAreaPixels) return null;
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return null;

    const rotRad = (rotation * Math.PI) / 180;
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);

    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement('canvas');
    const croppedCtx = croppedCanvas.getContext('2d');

    if (!croppedCtx) return null;

    croppedCanvas.width = croppedAreaPixels.width;
    croppedCanvas.height = croppedAreaPixels.height;

    croppedCtx.drawImage(
      canvas,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    return new Promise((resolve) => {
      croppedCanvas.toBlob((blob) => {
        if (blob) {
          const dataUrl = croppedCanvas.toDataURL('image/png');
          resolve({ blob, dataUrl });
        } else {
          resolve(null);
        }
      }, 'image/png');
    });
  };

  const rotateSize = (width: number, height: number, rotation: number) => {
    const rotRad = (rotation * Math.PI) / 180;
    return {
      width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
      height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    };
  };

  const handleApply = async () => {
    const res = await getCroppedImg();
    if (res) {
      onCropComplete(res.blob, res.dataUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-4xl rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <Crop className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Advanced Freeform Crop & Zoom Editor</h3>
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
            Aspect Ratio:
          </span>
          {[
            { label: 'Freeform', value: undefined },
            { label: '3:4 Passport', value: 3 / 4 },
            { label: '1:1 Square', value: 1 / 1 },
            { label: '4:3 Photo', value: 4 / 3 },
            { label: '16:9 Banner', value: 16 / 9 },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => setAspect(preset.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                aspect === preset.value
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Interactive Cropper Canvas Workspace */}
        <div className="relative h-[360px] w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspect}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropCompleteCallback}
            transform={[
              `translate(${crop.x}px, ${crop.y}px)`,
              `rotate(${rotation}deg)`,
              `scale(${flip.horizontal ? -1 : 1}, ${flip.vertical ? -1 : 1})`,
              `scale(${zoom})`,
            ].join(' ')}
          />
        </div>

        {/* Controls Toolbar: Zoom, Rotate, Flip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          {/* Zoom Slider */}
          <div className="space-y-1">
            <div className="flex justify-between font-bold">
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <ZoomIn className="w-3.5 h-3.5 text-cyan-500" /> Zoom Scale
              </span>
              <span className="font-mono text-cyan-500">{zoom.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          {/* Rotate Controls */}
          <div className="space-y-1">
            <span className="font-bold text-slate-700 dark:text-slate-300">Rotate Angle ({rotation}°)</span>
            <div className="flex gap-2">
              <button
                onClick={() => setRotation((prev) => (prev - 90) % 360)}
                className="flex-1 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center gap-1 font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5" /> -90°
              </button>
              <button
                onClick={() => setRotation((prev) => (prev + 90) % 360)}
                className="flex-1 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center gap-1 font-bold"
              >
                <RotateCw className="w-3.5 h-3.5" /> +90°
              </button>
            </div>
          </div>

          {/* Flip Controls */}
          <div className="space-y-1">
            <span className="font-bold text-slate-700 dark:text-slate-300">Flip Transform</span>
            <div className="flex gap-2">
              <button
                onClick={() => setFlip((prev) => ({ ...prev, horizontal: !prev.horizontal }))}
                className={`flex-1 py-1.5 rounded-xl flex items-center justify-center gap-1 font-bold transition-colors ${
                  flip.horizontal ? 'bg-cyan-500 text-white' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <FlipHorizontal className="w-3.5 h-3.5" /> Horizontal
              </button>
              <button
                onClick={() => setFlip((prev) => ({ ...prev, vertical: !prev.vertical }))}
                className={`flex-1 py-1.5 rounded-xl flex items-center justify-center gap-1 font-bold transition-colors ${
                  flip.vertical ? 'bg-cyan-500 text-white' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <FlipVertical className="w-3.5 h-3.5" /> Vertical
              </button>
            </div>
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
          <MagneticButton variant="glow" onClick={handleApply}>
            <Check className="w-4 h-4" />
            <span>Apply Crop & Zoom</span>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
