import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import AdUnit from '@/components/ads/AdUnit';
import EmiCalculatorTool from '@/components/tools/EmiCalculatorTool';

export const metadata: Metadata = {
  title: 'Financial EMI Loan Calculator in ₹ (INR) | Utilixa',
  description:
    'Calculate monthly EMI for home loans, car loans, and personal loans in Indian Rupees (₹). Interactive interest breakdown charts and complete monthly repayment schedules.',
  keywords: [
    'emi calculator',
    'loan emi calculator in rupees',
    'home loan emi',
    'car loan emi calculator',
    'personal loan emi',
    'loan repayment schedule',
    'calculate emi online'
  ],
  alternates: {
    canonical: 'https://utilixa.in/emi-calculator',
  },
  openGraph: {
    title: 'Financial EMI Loan Calculator in ₹ (INR) | Utilixa',
    description: 'Calculate loan EMI, interest payable, and monthly repayment schedules in Indian Rupees (₹).',
    url: 'https://utilixa.in/emi-calculator',
    siteName: 'Utilixa',
    type: 'website',
  },
};

export default function EmiCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
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
                <span>Financial EMI Loan Calculator</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                  ₹ INR Format
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl font-medium leading-relaxed">
                Calculate home loan, personal loan, or car loan monthly EMIs formatted in Indian Rupees (₹). Features interactive loan sliders, principal vs interest donut charts, and complete amortized monthly schedule tables.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <EmiCalculatorTool />
          </div>

          <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
        </div>

        {/* How to Use */}
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <FileCheck className="w-6 h-6 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              How to Calculate Loan EMI & Interest Breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Enter Principal Amount</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Set your total loan amount in ₹ (INR) using the text box or quick slider handles.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Set Interest Rate & Tenure</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Adjust annual interest rate percentage (%) and loan repayment duration in years or months.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 font-black flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Analyze EMI & Schedule</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Instantly view monthly EMI, total interest, principal ratio donut, and month-by-month payment schedule.
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
                What mathematical formula is used to calculate EMI?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                {'Utilixa uses the standard banking EMI formula: E = P × r × (1+r)^n / ((1+r)^n - 1), where P is Principal Loan Amount, r is Monthly Interest Rate, and n is total monthly tenure.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                Can I use this for home, car, and personal loans in India?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                Yes! This financial calculator supports home loans, car loans, personal loans, education loans, and mortgage calculations formatted in Indian currency system (₹ Lakhs & Crores).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                How does the monthly repayment schedule table work?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                The schedule table displays a month-by-month amortization breakdown showing exact principal paid, interest paid, and remaining loan balance for every single payment period.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      <MobileNav activeCategory="finance" />
    </div>
  );
}
