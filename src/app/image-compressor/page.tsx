import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck, Layers, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import ImageCompressorTool from '@/components/tools/ImageCompressorTool';

export const metadata: Metadata = {
  title: 'Free Online Image Compressor & Resizer (Target KB) | Utilixa',
  description:
    'Compress PNG, JPG, WebP images to exact target KB (20KB, 50KB, 100KB) online for free. 100% private client-side photo size reducer with zero quality loss.',
  keywords: [
    'image compressor',
    'compress image to 50kb',
    'photo resizer',
    'reduce photo size',
    'passport size photo',
    'compress image to 20kb',
    'image resizer online'
  ],
  alternates: {
    canonical: 'https://utilixa.in/image-compressor',
  },
  openGraph: {
    title: 'Free Online Image Compressor & Resizer (Target KB) | Utilixa',
    description: 'Compress PNG, JPG, WebP images to exact target KB (20KB, 50KB, 100KB) online for free with 100% client-side privacy.',
    url: 'https://utilixa.in/image-compressor',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function ImageCompressorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Online Image Compressor & Resizer',
        'url': 'https://utilixa.in/image-compressor',
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'All',
        'description':
          'Compress PNG, JPEG, WebP, and GIF images to an exact target file size (e.g., 20KB, 50KB, 100KB) for government forms, job portals, and passport applications with 100% browser-based privacy.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR',
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How does client-side image compression work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'All image compression processes take place inside your browser’s HTML5 canvas engine. Your images are never uploaded to any remote server or third-party cloud storage, guaranteeing 100% privacy and lightning-fast speeds.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I compress images to an exact target file size like 50KB or 20KB?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes! Enter your exact required file size in KB (such as 20 KB for official signature uploads or 50 KB for passport forms). Utilixa automatically calculates the exact quality threshold to match your specified size.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is my uploaded image data secure and private?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Absolutely. Because processing happens locally in your device memory, no third party—including Utilixa—can access or store your sensitive personal images.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Subpage Specific JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 w-full space-y-10">
        {/* Top Leaderboard Ad Slot */}
        <AdUnit slotId="1000000001" format="leaderboard" label="Sponsored Header Banner" />

        {/* Navigation & Header */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-cyan-400 mb-3 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to All Tools</span>
              </Link>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-800 dark:text-slate-100 flex flex-wrap items-center gap-3">
                <span>Image Compressor & Resizer</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  Custom KB Target
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Compress PNG, JPEG, WebP, and GIF images to an exact target file size (e.g., 20KB, 50KB, 100KB) for government forms, job portals, passport applications, and web speed optimization. 100% browser-based and secure.
              </p>
            </div>
          </div>

          {/* Interactive Tool Component */}
          <div className="pt-2">
            <ImageCompressorTool />
          </div>

          {/* In-Content Ad Slot */}
          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use Section for SEO */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Compress Images to Target KB Size
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Upload Image</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Drag and drop your photo (PNG, JPG, WebP) or click to choose from your device gallery.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Set Target KB or Quality</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Choose preset targets like 20KB, 50KB, 100KB, or type your custom desired KB size.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Preview & Download</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Inspect original vs compressed image side-by-side and click download to save instantly.
              </p>
            </div>
          </div>
        </section>

        {/* 3-Question FAQ Section for SEO */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <HelpCircle className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                How does client-side image compression work?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                All image compression processes take place inside your browser’s HTML5 canvas engine. Your images are never uploaded to any remote server or third-party cloud storage, guaranteeing 100% privacy and lightning-fast speeds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Can I compress images to an exact target file size like 50KB or 20KB?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes! Enter your exact required file size in KB (such as 20 KB for official signature uploads or 50 KB for passport forms). Utilixa automatically calculates the exact quality threshold to match your specified size.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Is my uploaded image data secure and private?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Absolutely. Because processing happens locally in your device memory, no third party—including Utilixa—can access or store your sensitive personal images.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Ad Slot */}
        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      <MobileNav activeCategory="image" />
    </div>
  );
}
