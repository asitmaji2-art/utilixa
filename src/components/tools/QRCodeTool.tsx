'use client';

import React, { useState } from 'react';
import { QrCode, Download, Copy, Check } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function QRCodeTool() {
  const [text, setText] = useState<string>('https://allinone-tools.vercel.app');
  const [fgColor, setFgColor] = useState<string>('#0044ff'); // Passport Blue QR default!

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}&color=${fgColor.replace('#', '')}`;

  return (
    <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto">
          <QrCode className="w-6 h-6 animate-bounce" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Custom QR Code Generator</h3>
        <p className="text-xs text-slate-500">Generate high-resolution QR codes for websites, Wi-Fi, or custom text.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">URL or Content Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">QR Code Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-10 h-10 rounded-xl cursor-pointer border-0 bg-transparent p-0"
            />
            <span className="text-xs font-mono font-bold uppercase text-cyan-500">{fgColor}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrUrl} alt="QR Code" className="w-48 h-48 rounded-xl shadow-xl border-4 border-white dark:border-slate-800" />
        <MagneticButton
          variant="glow"
          onClick={() => {
            const a = document.createElement('a');
            a.href = qrUrl;
            a.download = 'custom_qrcode.png';
            a.click();
          }}
          className="w-full"
        >
          <Download className="w-4 h-4" />
          <span>Download High-Res QR Image</span>
        </MagneticButton>
      </div>
    </div>
  );
}
