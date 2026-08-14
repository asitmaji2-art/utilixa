'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ImageIcon, Calculator, Calendar, FileText } from 'lucide-react';
import { ToolCategory } from '@/types';
import { useRouter } from 'next/navigation';

interface MobileNavProps {
  activeCategory?: ToolCategory;
  onSelectCategory?: (cat: ToolCategory) => void;
}

export default function MobileNav({ activeCategory = 'all', onSelectCategory }: MobileNavProps) {
  const router = useRouter();

  const tabs: Array<{ id: ToolCategory; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'all', label: 'All Tools', icon: LayoutGrid },
    { id: 'image', label: 'Images', icon: ImageIcon },
    { id: 'finance', label: 'Finance', icon: Calculator },
    { id: 'utility', label: 'Utility', icon: Calendar },
    { id: 'pdf', label: 'PDF', icon: FileText },
  ];

  const handleSelect = (catId: ToolCategory) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      router.push(catId === 'all' ? '/' : `/?category=${catId}`);
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/80 shadow-2xl">
      <nav className="flex items-center justify-around relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`relative flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors ${
                isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Fluid Active Tab Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobileNavActivePill"
                  className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 z-10" />
              <span className="text-[10px] font-medium z-10">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
