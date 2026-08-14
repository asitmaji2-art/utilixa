'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, Flame, Gift, Compass } from 'lucide-react';
import { calculateExactAge } from '@/lib/utils';
import { AgeResult } from '@/types';

export default function AgeCalculatorTool() {
  const [dob, setDob] = useState<string>('2000-01-15');
  const [age, setAge] = useState<AgeResult | null>(null);
  const [liveSeconds, setLiveSeconds] = useState<number>(0);

  useEffect(() => {
    if (dob) {
      const res = calculateExactAge(dob);
      setAge(res);
      if (res) {
        setLiveSeconds(res.totalMinutes * 60);
      }
    }
  }, [dob]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Date Picker Input */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto space-y-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mx-auto">
          <Calendar className="w-6 h-6 animate-bounce" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">Select Date of Birth</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Enter your birth date to calculate exact age, Zodiac sign, next birthday countdown, and live seconds lived.
        </p>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full max-w-xs px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-bold text-center text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono shadow-inner"
        />
      </div>

      {/* Age Calculation Results Display */}
      {age && (
        <div className="space-y-6">
          {/* Main Years, Months, Days Big Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-6 rounded-3xl text-center border-t-4 border-pink-500 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-500">Years</span>
              <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.years}</h2>
              <span className="text-[10px] text-slate-400 font-medium">Full Years Old</span>
            </div>

            <div className="glass-panel p-6 rounded-3xl text-center border-t-4 border-purple-500 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-500">Months</span>
              <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.months}</h2>
              <span className="text-[10px] text-slate-400 font-medium">Extra Months</span>
            </div>

            <div className="glass-panel p-6 rounded-3xl text-center border-t-4 border-cyan-500 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500">Days</span>
              <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.days}</h2>
              <span className="text-[10px] text-slate-400 font-medium">Extra Days</span>
            </div>
          </div>

          {/* Special Cards: Next Birthday & Zodiac */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Next Birthday Countdown */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 shrink-0">
                <Gift className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Next Birthday</span>
                <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mt-0.5 font-mono">
                  {age.nextBirthdayDays} Days Left
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Born on a <strong className="text-slate-700 dark:text-slate-200">{age.dayOfWeekBorn}</strong>
                </p>
              </div>
            </div>

            {/* Zodiac Sign Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 shrink-0">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">Zodiac Sign</span>
                <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100 mt-0.5">
                  {age.zodiacSign}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Astrological Constellation Badge
                </p>
              </div>
            </div>
          </div>

          {/* Granular Total Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Total Days</span>
              <p className="text-base font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.totalDays.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Total Hours</span>
              <p className="text-base font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.totalHours.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Total Minutes</span>
              <p className="text-base font-black text-slate-800 dark:text-slate-100 mt-1 font-mono">{age.totalMinutes.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-center">
              <span className="text-[10px] text-pink-500 font-bold uppercase flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 animate-spin" /> Live Seconds
              </span>
              <p className="text-base font-black text-pink-600 dark:text-pink-400 mt-1 font-mono">{liveSeconds.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
