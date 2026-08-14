import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import FileConverterTool from '@/components/tools/FileConverterTool';

export const metadata: Metadata = {
  title: 'Free Advanced File Format Converter (Images & CSV/JSON) | Utilixa',
  description:
    'Convert JPG, PNG, WebP, GIF, SVG, BMP image files and CSV/JSON data format online. 100% free client-side converter with lossy/lossless quality controls.',
  keywords: [
    'file converter',
    'convert png to jpg',
    'csv to json converter',
    'json to csv',
    'image format converter',
    'webp to png',
    'convert csv to json online'
  ],
  alternates: {
    canonical: 'https://utilixa.in/file-converter',
  },
  openGraph: {
    title: 'Free Advanced File Format Converter (Images & CSV/JSON) | Utilixa',
    description: 'Convert JPG, PNG, WebP, GIF, SVG, BMP images & CSV/JSON data files seamlessly in your browser.',
    url: 'https://utilixa.in/file-converter',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function FileConverterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Advanced File & Data Format Converter',
        'url': 'https://utilixa.in/file-converter',
        'applicationCategory': 'UtilitiesApplication',
        'operatingSystem': 'All',
        'description':
          'Convert between JPG, PNG, WebP, GIF, SVG, BMP image formats, or transform tabular CSV data to JSON and vice versa with 100% lossy/lossless quality controls.',
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
            'name': 'What file formats can I convert using Utilixa?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'You can convert between major image formats including PNG, JPG, WebP, GIF, SVG, and BMP. For web developers and data analysts, we also support instant two-way CSV to JSON and JSON to CSV conversions.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Are my files uploaded to any external server?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'No, conversion runs 100% inside your web browser’s memory using JavaScript APIs. Your documents and photos never leave your device.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is there any restriction on file conversion size?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Since conversion uses your local browser memory, you can convert files as large as your device hardware permits without queue times or server throttles.',
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
                <span>Advanced File Format Converter</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  Multi-Format
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Convert between JPG, PNG, WebP, GIF, SVG, BMP image formats, or transform tabular CSV data to JSON and vice versa. Full quality adjustment controls with zero server upload.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <FileConverterTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Convert Files & Data Formats Online
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Select Your Source File</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Drag and drop your image (PNG, JPG, WebP) or data document (CSV, JSON) into the dropzone.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Choose Target Format</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Select your desired target file format (JPG, PNG, WebP, GIF, SVG, CSV, JSON) and adjust quality settings.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Instant Download</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Click Convert to process instantly and download your freshly converted file.
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
                What file formats can I convert using Utilixa?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                You can convert between major image formats including PNG, JPG, WebP, GIF, SVG, and BMP. For web developers and data analysts, we also support instant two-way CSV to JSON and JSON to CSV conversions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Are my files uploaded to any external server?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                No, conversion runs 100% inside your web browser’s memory using JavaScript APIs. Your documents and photos never leave your device.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Is there any restriction on file conversion size?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Since conversion uses your local browser memory, you can convert files as large as your device hardware permits without queue times or server throttles.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      <MobileNav activeCategory="utility" />
    </div>
  );
}
