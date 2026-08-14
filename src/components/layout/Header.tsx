'use client';

import React from 'react';
import Link from 'next/link';
import { Sun, Moon, Wrench, Search } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import MagneticButton from '@/components/ui/MagneticButton';

interface HeaderProps {
  onSearchClick?: () => void;
  onHomeClick?: () => void;
  toolCount?: number;
}

export default function Header({ onSearchClick, onHomeClick, toolCount = 8 }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo wrapped in Next.js Link for Home Navigation */}
        <Link
          href="/"
          onClick={() => {
            if (onHomeClick) onHomeClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300 neon-border">
            <Wrench className="w-6 h-6 animate-float" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-gradient">Utilixa</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                utilixa.in
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Free Client-Side Utility Suite ({toolCount}+ Tools)
            </p>
          </div>
        </Link>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          {onSearchClick && (
            <button
              onClick={onSearchClick}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Search className="w-4 h-4 text-cyan-500" />
              <span>Search Tools...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 rounded border border-slate-300 dark:border-slate-700 font-mono">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Theme Switcher Toggle (300ms Smooth Transition) */}
          <MagneticButton
            variant="secondary"
            onClick={toggleTheme}
            className="!p-2.5 !rounded-xl text-amber-500 dark:text-cyan-400"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-90 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 text-slate-700" />
            )}
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
