import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import ImageCropZoomTool from '@/components/tools/ImageCropZoomTool';

export const metadata: Metadata = {
  title: 'Freeform Image Crop, Zoom & Rotate Tool | Utilixa',
  description:
    'Crop photos with freeform drag handles, zoom in/out, rotate 90°, and flip horizontally or vertically. Aspect ratio presets for passport, square, and banner photos.',
  keywords: [
    'crop image freeform',
    'image zoom editor',
    'rotate photo online',
    'flip image horizontal',
    'passport photo cropper',
    'freeform photo crop tool'
  ],
  alternates: {
    canonical: 'https://utilixa.in/image-crop-zoom',
  },
  openGraph: {
    title: 'Freeform Image Crop, Zoom & Rotate Tool | Utilixa',
    description: 'Crop, zoom, rotate, and flip photos online with freeform handles and passport ratio presets.',
    url: 'https://utilixa.in/image-crop-zoom',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function ImageCropZoomPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Freeform Image Crop, Zoom & Rotate Tool',
        'url': 'https://utilixa.in/image-crop-zoom',
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'All',
        'description':
          'Interactive browser-based photo editor. Drag unconstrained freeform crop handles, pick aspect ratios (1:1, 3:4 Passport, 16:9), adjust zoom slider, rotate 90°, and flip images.',
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
            'name': 'Can I crop photos for passport and visa applications?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes! Utilize the 3:4 Passport / Visa preset ratio or 1:1 square ratio to accurately crop photos according to official document requirements.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does cropping or zooming degrade original image quality?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Utilixa renders canvas output at high hardware pixel density, ensuring cropped images remain sharp and clear.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I rotate or mirror my image before cropping?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes, full 90-degree clockwise rotation and horizontal/vertical flip controls are fully integrated into the editor.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 w-full space-y-10">
        <AdUnit slotId="1000000001" format="leaderboard" label="Sponsored Header Banner" />

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
                <span>Freeform Crop, Zoom & Rotate Tool</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  Freeform Crop
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Interactive browser-based photo editor. Drag unconstrained freeform crop handles, pick aspect ratios (1:1, 3:4 Passport, 16:9), adjust zoom slider, rotate 90°, and flip images horizontally or vertically.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <ImageCropZoomTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Crop, Zoom, and Edit Images Online
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Upload Photo</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Select or drag and drop any image file into the interactive crop workspace.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Adjust Crop & Orientations</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Drag corner handles freely or select 3:4 passport / 1:1 presets. Use zoom, rotate, and flip buttons.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Export High-Res Image</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Click Export Cropped Image to download your edited photo directly to your device.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Can I crop photos for passport and visa applications?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes! Utilize the 3:4 Passport / Visa preset ratio or 1:1 square ratio to accurately crop photos according to official document requirements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Does cropping or zooming degrade original image quality?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Utilixa renders canvas output at high hardware pixel density, ensuring cropped images remain sharp and clear.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Can I rotate or mirror my image before cropping?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes, full 90-degree clockwise rotation and horizontal/vertical flip controls are fully integrated into the editor.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      <MobileNav activeCategory="image" />
    </div>
  );
}
