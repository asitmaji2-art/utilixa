'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Wrench, Layers } from 'lucide-react';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import ToolGrid from '@/components/tools/ToolGrid';
import AdUnit from '@/components/ads/AdUnit';
import MagneticButton from '@/components/ui/MagneticButton';
import { ToolCategory } from '@/types';
import { ALL_TOOLS } from '@/lib/constants';

// Tool Components Import
import ImageCompressorTool from '@/components/tools/ImageCompressorTool';
import FileConverterTool from '@/components/tools/FileConverterTool';
import ImageCropZoomTool from '@/components/tools/ImageCropZoomTool';
import EmiCalculatorTool from '@/components/tools/EmiCalculatorTool';
import AgeCalculatorTool from '@/components/tools/AgeCalculatorTool';
import PdfCompressorTool from '@/components/tools/PdfCompressorTool';
import ColorPaletteTool from '@/components/tools/ColorPaletteTool';
import QRCodeTool from '@/components/tools/QRCodeTool';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeTool = ALL_TOOLS.find((t) => t.id === activeToolId);

  const renderActiveTool = () => {
    switch (activeToolId) {
      case 'image-compressor':
        return <ImageCompressorTool />;
      case 'file-converter':
        return <FileConverterTool />;
      case 'image-crop-zoom':
        return <ImageCropZoomTool />;
      case 'emi-calculator':
        return <EmiCalculatorTool />;
      case 'age-calculator':
        return <AgeCalculatorTool />;
      case 'pdf-compressor':
        return <PdfCompressorTool />;
      case 'color-palette':
        return <ColorPaletteTool />;
      case 'qr-generator':
        return <QRCodeTool />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header
        toolCount={ALL_TOOLS.length}
        onHomeClick={() => setActiveToolId(null)}
        onSearchClick={() => {
          setActiveToolId(null);
          const el = document.getElementById('tools-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 w-full space-y-12">
        {/* Zero CLS Top Leaderboard Ad Unit */}
        <AdUnit slotId="1000000001" format="leaderboard" label="Sponsored Header Banner" />

        {/* Active Tool View Drawer / Modal Container */}
        <AnimatePresence mode="wait">
          {activeToolId && activeTool ? (
            <motion.div
              key="activeToolView"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-8"
            >
              {/* Tool Header Navigation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-6">
                <div>
                  <button
                    onClick={() => setActiveToolId(null)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-cyan-400 mb-3 group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to All Tools</span>
                  </button>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-3">
                    <span>{activeTool.name}</span>
                    {activeTool.badge && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                        {activeTool.badge}
                      </span>
                    )}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
                    {activeTool.description}
                  </p>
                </div>

                <MagneticButton
                  variant="secondary"
                  onClick={() => setActiveToolId(null)}
                  className="!px-4 !py-2 text-xs"
                >
                  Close Tool
                </MagneticButton>
              </div>

              {/* Tool Content Render */}
              <div className="pt-2">{renderActiveTool()}</div>

              {/* Inline In-Content AdUnit Slot */}
              <AdUnit slotId="1000000002" format="rectangle" label="Sponsored Content Unit" />
            </motion.div>
          ) : (
            <>
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
                  onSelectTool={(id) => {
                    setActiveToolId(id);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </motion.section>

              {/* Bottom In-Feed Ad Unit */}
              <AdUnit slotId="1000000003" format="leaderboard" label="Sponsored Footer Unit" />
            </>
          )}
        </AnimatePresence>
      </main>

      {/* Sticky Bottom Nav Bar for Mobile UX */}
      <MobileNav activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
    </div>
  );
}
