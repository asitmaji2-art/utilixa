'use client';

import React, { useState } from 'react';
import { Upload, Download, RefreshCw, Sliders, Crop } from 'lucide-react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import ProgressRing from '@/components/ui/ProgressRing';
import MagneticButton from '@/components/ui/MagneticButton';
import CropZoomModal from '@/components/ui/CropZoomModal';
import { compressImageToTarget, formatBytes } from '@/lib/utils';

export default function ImageCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [targetKbInput, setTargetKbInput] = useState<string>('50');
  const [qualityPreset, setQualityPreset] = useState<number>(80);
  const [format, setFormat] = useState<'jpeg' | 'png' | 'webp'>('jpeg');
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [compressedDimensions, setCompressedDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [showCropModal, setShowCropModal] = useState<boolean>(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      const url = URL.createObjectURL(selected);
      setOriginalUrl(url);
      setCompressedUrl(null);
      runCompression(selected, targetKbInput, qualityPreset, format);
    }
  };

  const handleCropComplete = (croppedBlob: Blob, croppedDataUrl: string) => {
    setShowCropModal(false);
    setOriginalUrl(croppedDataUrl);
    const croppedFile = new File([croppedBlob], file?.name || 'cropped.png', { type: 'image/png' });
    setFile(croppedFile);
    runCompression(croppedFile, targetKbInput, qualityPreset, format);
  };

  const runCompression = async (
    sourceFile: File,
    targetKbStr: string,
    quality: number,
    fmt: 'jpeg' | 'png' | 'webp'
  ) => {
    setIsCompressing(true);
    setProgress(10);
    try {
      const targetKb = parseFloat(targetKbStr) || undefined;
      const res = await compressImageToTarget(
        sourceFile,
        targetKb,
        quality / 100,
        fmt,
        undefined,
        (pct) => setProgress(pct)
      );
      setCompressedUrl(res.dataUrl);
      setCompressedSize(res.size);
      setCompressedDimensions({ width: res.width, height: res.height });
    } catch (err) {
      console.error(err);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleCompressClick = () => {
    if (file) {
      runCompression(file, targetKbInput, qualityPreset, format);
    }
  };

  const handleDownload = () => {
    if (!compressedUrl || !file) return;
    const a = document.createElement('a');
    a.href = compressedUrl;
    const ext = format === 'jpeg' ? 'jpg' : format;
    const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    a.download = `${baseName}_compressed_${targetKbInput || qualityPreset}KB.${ext}`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Interactive Advanced Freeform Crop & Zoom Modal */}
      {showCropModal && originalUrl && (
        <CropZoomModal
          imageSrc={originalUrl}
          onCropComplete={handleCropComplete}
          onClose={() => setShowCropModal(false)}
        />
      )}

      {/* Upload Zone */}
      {!file ? (
        <label className="relative flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10">
          <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Upload className="w-8 h-8 animate-bounce" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Upload Image to Compress</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center max-w-sm">
            Drag & drop PNG, JPG, or WebP. Set exact target KB (20KB, 50KB, 100KB) for job portals & passports.
          </p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-500/30">
            Select Photo
          </span>
        </label>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Compression Controls Panel */}
          <div className="glass-panel p-6 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-500" />
                <h4 className="font-bold text-slate-800 dark:text-slate-200">Compression Settings</h4>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  setOriginalUrl(null);
                  setCompressedUrl(null);
                }}
                className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Change Photo
              </button>
            </div>

            {/* Manual Freeform Crop & Zoom Trigger */}
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Crop & Zoom Editor</span>
              <button
                onClick={() => setShowCropModal(true)}
                className="px-3 py-1.5 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-md hover:bg-cyan-600 transition-colors flex items-center gap-1"
              >
                <Crop className="w-3.5 h-3.5" /> Crop / Zoom
              </button>
            </div>

            {/* Target KB Presets + Custom Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>Target File Size (KB)</span>
                <span className="text-cyan-500 font-mono font-bold">{targetKbInput ? `${targetKbInput} KB` : 'Auto Quality'}</span>
              </label>

              <div className="grid grid-cols-4 gap-2">
                {['20', '50', '100', '200'].map((kb) => (
                  <button
                    key={kb}
                    type="button"
                    onClick={() => {
                      setTargetKbInput(kb);
                      runCompression(file, kb, qualityPreset, format);
                    }}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      targetKbInput === kb
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {kb} KB
                  </button>
                ))}
              </div>

              <div className="relative mt-2">
                <input
                  type="number"
                  placeholder="Enter custom target KB (e.g. 75)"
                  value={targetKbInput}
                  onChange={(e) => setTargetKbInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-slate-100"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold font-mono">KB</span>
              </div>
            </div>

            {/* Quality Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Quality Level</span>
                <span className="text-cyan-500 font-mono">{qualityPreset}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={qualityPreset}
                onChange={(e) => setQualityPreset(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Output Format Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Output Format</label>
              <div className="grid grid-cols-3 gap-2">
                {(['jpeg', 'png', 'webp'] as const).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => {
                      setFormat(fmt);
                      runCompression(file, targetKbInput, qualityPreset, fmt);
                    }}
                    className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                      format === fmt
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply & Download Actions */}
            <div className="pt-2 space-y-3">
              <MagneticButton
                variant="glow"
                onClick={handleCompressClick}
                disabled={isCompressing}
                className="w-full"
              >
                <RefreshCw className={`w-4 h-4 ${isCompressing ? 'animate-spin' : ''}`} />
                <span>Re-Compress Now</span>
              </MagneticButton>

              {compressedUrl && (
                <MagneticButton
                  onClick={handleDownload}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Compressed Image</span>
                </MagneticButton>
              )}
            </div>
          </div>

          {/* Interactive Preview & Metrics Panel */}
          <div className="lg:col-span-2 space-y-6">
            {isCompressing ? (
              <div className="glass-panel p-12 rounded-3xl min-h-[400px] flex items-center justify-center">
                <ProgressRing progress={progress} label="Iterating canvas to reach target KB..." />
              </div>
            ) : originalUrl && compressedUrl ? (
              <div className="space-y-4">
                <BeforeAfterSlider
                  beforeImage={originalUrl}
                  afterImage={compressedUrl}
                  beforeLabel={`Original (${formatBytes(file.size)})`}
                  afterLabel={`Target Output (${formatBytes(compressedSize)})`}
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Original Size</span>
                    <p className="text-sm font-black text-slate-700 dark:text-slate-200 mt-0.5">{formatBytes(file.size)}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Compressed</span>
                    <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{formatBytes(compressedSize)}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                    <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider">Reduction</span>
                    <p className="text-sm font-black text-cyan-600 dark:text-cyan-400 mt-0.5">
                      -{Math.round(((file.size - compressedSize) / file.size) * 100)}%
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <span className="text-[10px] text-purple-500 font-bold uppercase tracking-wider">Dimensions</span>
                    <p className="text-sm font-black text-purple-600 dark:text-purple-400 mt-0.5">
                      {compressedDimensions.width}x{compressedDimensions.height}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
