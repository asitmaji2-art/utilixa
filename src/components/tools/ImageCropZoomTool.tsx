'use client';

import React, { useState } from 'react';
import { Upload, Download, Crop, RefreshCw, ZoomIn } from 'lucide-react';
import CropZoomModal from '@/components/ui/CropZoomModal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ImageCropZoomTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      const url = URL.createObjectURL(selected);
      setImageUrl(url);
      setCroppedUrl(url);
      setShowModal(true);
    }
  };

  const handleCropComplete = (croppedBlob: Blob, croppedDataUrl: string) => {
    setShowModal(false);
    setCroppedUrl(croppedDataUrl);
  };

  const handleDownload = () => {
    if (!croppedUrl || !file) return;
    const a = document.createElement('a');
    a.href = croppedUrl;
    const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    a.download = `${baseName}_cropped.png`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Interactive Crop Modal */}
      {showModal && imageUrl && (
        <CropZoomModal
          imageSrc={imageUrl}
          onCropComplete={handleCropComplete}
          onClose={() => setShowModal(false)}
        />
      )}

      {!file ? (
        <label className="relative flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10">
          <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Crop className="w-8 h-8 animate-bounce" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Upload Photo for Advanced Crop & Zoom</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center max-w-sm">
            Freeform drag handles, zoom in/out slider, 90° rotation, and horizontal/vertical flip.
          </p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-500/30">
            Select Photo
          </span>
        </label>
      ) : (
        <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <h4 className="font-bold text-slate-800 dark:text-slate-200">{file.name}</h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-1.5 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-md hover:bg-cyan-600 transition-colors flex items-center gap-1"
              >
                <Crop className="w-3.5 h-3.5" /> Edit / Crop Photo
              </button>
              <button
                onClick={() => {
                  setFile(null);
                  setImageUrl(null);
                  setCroppedUrl(null);
                }}
                className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          </div>

          {croppedUrl && (
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[400px] inline-block border border-slate-300 dark:border-slate-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={croppedUrl} alt="Cropped Preview" className="max-h-[400px] w-auto object-contain" />
              </div>

              <MagneticButton onClick={handleDownload} variant="glow" className="w-full">
                <Download className="w-4 h-4" />
                <span>Download Cropped Photo</span>
              </MagneticButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
