'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wrench, Layers } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import ToolGrid from '@/components/tools/ToolGrid';
import AdUnit from '@/components/ads/AdUnit';
import MagneticButton from '@/components/ui/MagneticButton';
import { ToolCategory } from '@/types';
import { ALL_TOOLS } from '@/lib/constants';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header
        toolCount={ALL_TOOLS.length}
        onSearchClick={() => {
          const el = document.getElementById('tools-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 w-full space-y-12">
        {/* Zero CLS Top Leaderboard Ad Unit */}
        <AdUnit slotId="1000000001" format="leaderboard" label="Sponsored Header Banner" />

        {/* Hero Banner with Scroll Reveal Animation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 sm:py-16 space-y-6 relative overflow-hidden"
        >
          {/* Hero Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 text-cyan-500 border border-cyan-500/20 text-xs font-bold shadow-lg shadow-cyan-500/5">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>100% Client-Side • Advanced Image & Data Converters • 60 FPS</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-tight">
            Supercharge Your Workflow with <span className="text-gradient">Smart Utility Tools</span>
          </h1>

          {/* Hero Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Compress images to exact target KB, convert between JPG, PNG, WebP, GIF, SVG, CSV & JSON, crop and zoom with unconstrained freeform handles, calculate loan EMIs in ₹ (INR), and optimize PDFs directly in your browser.
          </p>

          {/* Hero CTA Button */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <MagneticButton
              variant="glow"
              onClick={() => {
                const el = document.getElementById('tools-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="!px-8 !py-4 text-base"
            >
              <Wrench className="w-5 h-5" />
              <span>Explore All Utility Tools</span>
            </MagneticButton>
          </div>
        </motion.section>

        {/* Main Tool Grid Section with Scroll Reveal */}
        <motion.section
          id="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-6 h-6 text-cyan-500" /> Utility Tools Index
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Select a tool to launch instant client-side execution
              </p>
            </div>
          </div>

          <ToolGrid
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </motion.section>

        {/* Bottom In-Feed Ad Unit */}
        <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
      </main>

      {/* Sticky Bottom Nav Bar for Mobile UX */}
      <MobileNav activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
    </div>
  );
}
