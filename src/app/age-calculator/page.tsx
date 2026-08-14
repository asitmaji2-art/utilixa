import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import AgeCalculatorTool from '@/components/tools/AgeCalculatorTool';

export const metadata: Metadata = {
  title: 'Exact Age & Birthday Calculator | Utilixa',
  description:
    'Calculate your exact age in years, months, days, hours, and minutes. Includes next birthday countdown timer, day of birth, and western Zodiac sign detector.',
  keywords: [
    'age calculator',
    'calculate exact age',
    'how old am i',
    'birthday countdown',
    'zodiac sign detector',
    'age in days hours minutes',
    'online age tool'
  ],
  alternates: {
    canonical: 'https://utilixa.in/age-calculator',
  },
  openGraph: {
    title: 'Exact Age & Birthday Calculator | Utilixa',
    description: 'Determine your precise age in years, months, days, total hours, next birthday timer, and Zodiac sign.',
    url: 'https://utilixa.in/age-calculator',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function AgeCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Exact Age & Birthday Calculator',
        'url': 'https://utilixa.in/age-calculator',
        'applicationCategory': 'UtilitiesApplication',
        'operatingSystem': 'All',
        'description':
          'Determine your exact age down to years, months, days, hours, and minutes. Calculates total days lived, next birthday countdown timer, day of the week born, and western Zodiac sign.',
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
            'name': 'How accurate is this exact age calculator?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Our calculator accounts for leap years, varying month lengths (28, 30, or 31 days), and precise calendar boundaries to ensure 100% mathematical accuracy.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does it show my next birthday countdown and Zodiac sign?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes! It reveals how many days remain until your next birthday and automatically detects your western Zodiac sign (e.g., Aries, Leo, Scorpio).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I calculate my age on a specific future or past date?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Yes, simply pick any future or historical date in the target date picker to calculate your age at that exact point in time.',
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
                <span>Exact Age & Birthday Calculator</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  Zodiac & Days
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Determine your exact age down to years, months, days, hours, and minutes. Calculates total days lived, next birthday countdown timer, day of the week born, and western Zodiac sign.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <AgeCalculatorTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Calculate Your Exact Age & Birthday Timer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Select Date of Birth</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Use the date picker input to select your exact birth date (Day, Month, Year).
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Set Target Date (Optional)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Leave as today's date or select any specific past/future date to calculate age at that moment.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">View Full Metrics</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Instantly view years, months, days, total hours lived, next birthday countdown, and astrological Zodiac sign.
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
                How accurate is this exact age calculator?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Our calculator accounts for leap years, varying month lengths (28, 30, or 31 days), and precise calendar boundaries to ensure 100% mathematical accuracy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Does it show my next birthday countdown and Zodiac sign?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes! It reveals how many days remain until your next birthday and automatically detects your western Zodiac sign (e.g., Aries, Leo, Scorpio).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Can I calculate my age on a specific future or past date?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes, simply pick any future or historical date in the target date picker to calculate your age at that exact point in time.
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
