'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, PieChart, Table, IndianRupee, ArrowUpRight } from 'lucide-react';
import { calculateEMI, formatINR } from '@/lib/utils';
import MagneticButton from '@/components/ui/MagneticButton';

export default function EmiCalculatorTool() {
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // ₹10,00,000 default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years default
  const [showTable, setShowTable] = useState<boolean>(false);

  const emiResult = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <div className="space-y-8">
      {/* Top Input Sliders & Output Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100">Loan Parameters</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">All amounts formatted in Indian Rupees (₹ INR)</p>
            </div>
          </div>

          {/* 1. Loan Amount Slider & Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Loan Amount (₹)</label>
              <div className="flex items-center gap-1 font-mono font-extrabold text-cyan-600 dark:text-cyan-400 text-lg">
                <span>{formatINR(loanAmount)}</span>
              </div>
            </div>
            <input
              type="range"
              min={50000}
              max={20000000}
              step={50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>₹50,000</span>
              <span>₹1 Crore</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          {/* 2. Interest Rate Slider & Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Interest Rate (% p.a.)</label>
              <span className="font-mono font-extrabold text-purple-600 dark:text-purple-400 text-lg">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={24}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1%</span>
              <span>12%</span>
              <span>24%</span>
            </div>
          </div>

          {/* 3. Loan Tenure Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Tenure (Years)</label>
              <span className="font-mono font-extrabold text-pink-600 dark:text-pink-400 text-lg">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results & Visual Donut Chart Panel */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Monthly EMI Payable</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">
                {formatINR(emiResult.monthlyEmi)}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Principal Amount</span>
                <p className="text-sm font-black text-cyan-600 dark:text-cyan-400 mt-0.5">{formatINR(loanAmount)}</p>
              </div>

              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                <span className="text-[10px] text-purple-500 font-bold uppercase">Total Interest</span>
                <p className="text-sm font-black text-purple-600 dark:text-purple-400 mt-0.5">{formatINR(emiResult.totalInterest)}</p>
              </div>
            </div>

            {/* SVG Donut Visualizer */}
            <div className="flex items-center justify-around p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg width="112" height="112" className="rotate-[-90deg]">
                  <circle cx="56" cy="56" r="42" stroke="#0284c7" strokeWidth="16" fill="transparent" />
                  <circle
                    cx="56"
                    cy="56"
                    r="42"
                    stroke="#7000ff"
                    strokeWidth="16"
                    fill="transparent"
                    strokeDasharray={263.89}
                    strokeDashoffset={263.89 - (emiResult.interestRatio / 100) * 263.89}
                  />
                </svg>
                <span className="absolute text-xs font-black font-mono">{emiResult.principalRatio}%</span>
              </div>

              <div className="space-y-2 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-600 inline-block" />
                  <span className="text-slate-600 dark:text-slate-300">Principal ({emiResult.principalRatio}%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-600 inline-block" />
                  <span className="text-slate-600 dark:text-slate-300">Interest ({emiResult.interestRatio}%)</span>
                </div>
              </div>
            </div>
          </div>

          <MagneticButton
            variant="secondary"
            onClick={() => setShowTable(!showTable)}
            className="w-full mt-4"
          >
            <Table className="w-4 h-4 text-cyan-500" />
            <span>{showTable ? 'Hide Repayment Schedule' : 'View Full Month-by-Month Schedule'}</span>
          </MagneticButton>
        </div>
      </div>

      {/* Month-by-Month Repayment Schedule Table */}
      {showTable && (
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-4">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Table className="w-5 h-5 text-cyan-500" /> Repayment Schedule (First 36 Months)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3">Month</th>
                  <th className="p-3">Principal Paid</th>
                  <th className="p-3">Interest Paid</th>
                  <th className="p-3">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {emiResult.schedule.slice(0, 36).map((row) => (
                  <tr key={row.month} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                    <td className="p-3 font-bold text-cyan-500">Month {row.month}</td>
                    <td className="p-3 text-slate-700 dark:text-slate-300">{formatINR(row.principalPaid)}</td>
                    <td className="p-3 text-purple-600 dark:text-purple-400">{formatINR(row.interestPaid)}</td>
                    <td className="p-3 text-slate-500 dark:text-slate-400">{formatINR(row.remainingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
