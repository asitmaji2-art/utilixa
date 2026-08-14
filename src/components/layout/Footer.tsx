'use client';

import React from 'react';
import { ShieldCheck, Zap, Lock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full glass-panel border-t border-slate-200/80 dark:border-slate-800/80 mt-20 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust & Guarantee Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-200/80 dark:border-slate-800/80 text-center sm:text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">100% Client-Side Privacy</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Your files never leave your browser. Zero server uploads.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">60 FPS Hardware Accelerated</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Built with Framer Motion & Tailwind GPU transforms.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Free Forever & No Limits</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Instant processing with zero subscriptions or watermarks.</p>
            </div>
          </div>
        </div>

        {/* Tools Index Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-3">Image Utilities</h5>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>Image Compressor (Target KB)</li>
              <li>Freeform Crop, Zoom & Rotate</li>
              <li>Format Converter (WebP/PNG/JPG)</li>
              <li>Color Palette Extractor</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-purple-500 mb-3">Finance & Math</h5>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>EMI Calculator in ₹ (INR)</li>
              <li>Loan Repayment Schedule</li>
              <li>Principal vs Interest Breakdown</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-3">Data & PDF Utilities</h5>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>CSV to JSON / JSON to CSV</li>
              <li>PDF Compressor to Target KB</li>
              <li>Exact Age & Birthday Calculator</li>
              <li>Custom Color QR Code Generator</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-3">Legal & Info</h5>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>Privacy Policy & Cookies</li>
              <li>Terms of Service</li>
              <li>AdSense Disclaimer</li>
              <li>Contact Support</li>
            </ul>
          </div>
        </div>

        {/* AdSense Legal Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 text-center mb-6">
          <strong>Disclaimer:</strong> Utilixa (utilixa.in) is an independent web utility software suite running locally in your browser memory. Uploaded photos and data files remain strictly private on your device and are never transmitted to remote servers.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Utilixa (utilixa.in). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for Maximum Speed & SEO Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
