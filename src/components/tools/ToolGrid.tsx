'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ImageIcon,
  Scissors,
  Calculator,
  Calendar,
  FileText,
  Palette,
  RefreshCw,
  QrCode,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';
import { ALL_TOOLS } from '@/lib/constants';
import { ToolCategory, ToolItem } from '@/types';
import TiltCard from '@/components/ui/TiltCard';

interface ToolGridProps {
  activeCategory: ToolCategory;
  onCategoryChange: (cat: ToolCategory) => void;
  onSelectTool: (toolId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function ToolGrid({
  activeCategory,
  onCategoryChange,
  onSelectTool,
  searchQuery,
  onSearchChange,
}: ToolGridProps) {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'ImageIcon':
        return <ImageIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'ScissorsIcon':
        return <Scissors className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'CalculatorIcon':
        return <Calculator className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'CalendarIcon':
        return <Calendar className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'FileTextIcon':
        return <FileText className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'PaletteIcon':
        return <Palette className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'RefreshCwIcon':
        return <RefreshCw className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform animate-float" />;
      case 'QrCodeIcon':
        return <QrCode className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform animate-float" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categories: Array<{ id: ToolCategory; label: string }> = [
    { id: 'all', label: 'All Tools' },
    { id: 'image', label: 'Image Tools' },
    { id: 'finance', label: 'Finance' },
    { id: 'utility', label: 'Utilities' },
    { id: 'pdf', label: 'PDF Tools' },
  ];

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Filter Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search tools (e.g. 50KB, EMI, PDF)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-inner"
          />
        </div>
      </div>

      {/* Framer Motion Smooth Filter Layout Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TiltCard
                onClick={() => onSelectTool(tool.id)}
                className="h-full p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-inner">
                      {getToolIcon(tool.icon)}
                    </div>
                    {tool.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-[10px] font-extrabold uppercase tracking-wider border border-cyan-500/20">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {tool.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex items-center justify-between text-xs font-bold text-cyan-500 group-hover:text-cyan-400">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
