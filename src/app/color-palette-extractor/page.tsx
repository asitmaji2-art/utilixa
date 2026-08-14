import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import ColorPaletteTool from '@/components/tools/ColorPaletteTool';

export const metadata: Metadata = {
  title: 'Image Color Palette Extractor & Hex Code Generator | Utilixa',
  description:
    'Extract dominant color palettes, HEX codes, and RGB values from any image or photo instantly. 1-click copy color palette generator for UI designers and artists.',
  keywords: [
    'color palette extractor',
    'image hex picker',
    'extract colors from photo',
    'image palette generator',
    'hex code generator',
    'extract rgb values from image'
  ],
  alternates: {
    canonical: 'https://utilixa.in/color-palette-extractor',
  },
  openGraph: {
    title: 'Image Color Palette Extractor & Hex Code Generator | Utilixa',
    description: 'Upload any image to extract dominant color palettes, HEX codes, and RGB values with 1-click copy.',
    url: 'https://utilixa.in/color-palette-extractor',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function ColorPaletteExtractorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Image Color Palette Extractor',
        'url': 'https://utilixa.in/color-palette-extractor',
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'All',
        'description':
          'Upload any photo or digital artwork to automatically extract dominant color palettes, complementary HEX codes, and RGB values with instant 1-click clipboard copying.',
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
            'name': 'How many dominant colors are extracted per photo?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'The extractor analyzes key color tones and produces primary dominant shades as well as complementary secondary accent swatches.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What color code formats are generated?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'You get standard 6-digit HEX codes (e.g. #0044FF) and RGB values compatible with TailwindCSS, Figma, Adobe XD, and web stylesheets.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is my uploaded graphic kept private?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes, pixel analysis takes place directly inside your web browser’s Canvas element without sending data to any external server.',
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
                <span>Image Color Palette Extractor</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  HEX & RGB
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Upload any photo or digital artwork to automatically extract dominant color palettes, complementary HEX codes, and RGB values with instant 1-click clipboard copying.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <ColorPaletteTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Extract Color Palettes from Images
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Upload Any Image</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Select or drop your photo (PNG, JPG, WebP, GIF) into the palette extractor workspace.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Automatic Color Sampling</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                The algorithm analyzes pixel frequencies and generates a beautifully categorized color palette.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">1-Click Copy Codes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Click any color swatch or HEX code to instantly copy it to your clipboard for CSS/Figma.
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
                How many dominant colors are extracted per photo?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                The extractor analyzes key color tones and produces primary dominant shades as well as complementary secondary accent swatches.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                What color code formats are generated?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                You get standard 6-digit HEX codes (e.g. #0044FF) and RGB values compatible with TailwindCSS, Figma, Adobe XD, and web stylesheets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Is my uploaded graphic kept private?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes, pixel analysis takes place directly inside your web browser’s Canvas element without sending data to any external server.
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
