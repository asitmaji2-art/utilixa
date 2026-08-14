'use client';

import React, { useState } from 'react';
import { Upload, Download, RefreshCw, RefreshCwIcon } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { formatBytes } from '@/lib/utils';

export default function FormatConverterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedSize, setConvertedSize] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      convertFormat(selected, targetFormat);
    }
  };

  const convertFormat = (srcFile: File, fmt: 'png' | 'jpeg' | 'webp') => {
    setIsProcessing(true);
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(srcFile);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        if (fmt === 'jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              setConvertedSize(blob.size);
              setConvertedUrl(URL.createObjectURL(blob));
            }
            setIsProcessing(false);
          },
          `image/${fmt}`,
          0.92
        );
      }
    };
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <label className="relative flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10">
          <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <RefreshCwIcon className="w-8 h-8 animate-spin" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Upload Image to Convert</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center max-w-sm">
            Convert PNG, JPG, or WebP formats in seconds with 100% lossy/lossless quality.
          </p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-500/30">
            Select Photo
          </span>
        </label>
      ) : (
        <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto text-center">
          <h4 className="font-bold text-slate-800 dark:text-slate-200">{file.name}</h4>
          <p className="text-xs text-slate-500 font-mono">Original: {formatBytes(file.size)}</p>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Target Format</label>
            <div className="grid grid-cols-3 gap-2">
              {(['png', 'jpeg', 'webp'] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => {
                    setTargetFormat(fmt);
                    convertFormat(file, fmt);
                  }}
                  className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                    targetFormat === fmt
                      ? 'bg-cyan-500 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          {convertedUrl && (
            <div className="pt-4 space-y-3">
              <span className="text-xs font-bold text-emerald-500">Converted Size: {formatBytes(convertedSize)}</span>
              <MagneticButton
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = convertedUrl;
                  a.download = `converted_${file.name.substring(0, file.name.lastIndexOf('.'))}.${targetFormat === 'jpeg' ? 'jpg' : targetFormat}`;
                  a.click();
                }}
                variant="glow"
                className="w-full"
              >
                <Download className="w-4 h-4" />
                <span>Download Converted File</span>
              </MagneticButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
