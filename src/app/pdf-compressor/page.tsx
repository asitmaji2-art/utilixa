import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import PdfCompressorTool from '@/components/tools/PdfCompressorTool';

export const metadata: Metadata = {
  title: 'Free Online PDF Compressor & Size Reducer | Utilixa',
  description:
    'Compress PDF documents to target KB (100KB, 200KB, 500KB) online for free. Fast browser-based PDF optimizer for emails, application portals, and uploads.',
  keywords: [
    'pdf compressor',
    'compress pdf to 200kb',
    'reduce pdf file size',
    'pdf optimizer',
    'compress pdf online free',
    'pdf size reducer to 100kb',
    'shrink pdf file'
  ],
  alternates: {
    canonical: 'https://utilixa.in/pdf-compressor',
  },
  openGraph: {
    title: 'Free Online PDF Compressor & Size Reducer | Utilixa',
    description: 'Compress PDF file size to target KB directly in your browser with 100% data privacy.',
    url: 'https://utilixa.in/pdf-compressor',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function PdfCompressorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Online PDF Compressor & File Size Reducer',
        'url': 'https://utilixa.in/pdf-compressor',
        'applicationCategory': 'UtilitiesApplication',
        'operatingSystem': 'All',
        'description':
          'Compress PDF documents directly in your web browser. Set custom KB size targets (100KB, 200KB, 500KB) for job portal uploads, government forms, and email attachments while preserving visual quality.',
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
            'name': 'Will PDF compression blur or corrupt document text?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'No, vector fonts and text elements remain crisp and readable. Compression primarily optimizes high-resolution embedded images and metadata structure inside the PDF.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is there any document page limit or watermark added?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'No! Utilixa is 100% free with zero watermarks, zero page limits, and zero registration requirements.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Are my confidential PDF documents safe?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes. PDF processing is executed locally inside your device browser memory. Files are never uploaded or saved on any external servers.',
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
                <span>PDF Compressor & Optimizer</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  Target KB
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Compress PDF documents directly in your web browser. Set custom KB size targets (100KB, 200KB, 500KB) for job portal uploads, government forms, and email attachments while preserving visual quality.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <PdfCompressorTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Compress PDF Document Files Online
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Select PDF File</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Choose or drag and drop any PDF document file into the compressor dropzone.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Set Compression Preset</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Choose target file size options (200KB, 500KB) or compression ratio controls.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Download Reduced PDF</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Click Compress PDF to optimize document size and save your reduced PDF instantly.
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
                Will PDF compression blur or corrupt document text?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                No, vector fonts and text elements remain crisp and readable. Compression primarily optimizes high-resolution embedded images and metadata structure inside the PDF.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Is there any document page limit or watermark added?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                No! Utilixa is 100% free with zero watermarks, zero page limits, and zero registration requirements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Are my confidential PDF documents safe?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes. PDF processing is executed locally inside your device browser memory. Files are never uploaded or saved on any external servers.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      <MobileNav activeCategory="pdf" />
    </div>
  );
}
