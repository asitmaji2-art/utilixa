'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glow';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button'
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return 'bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-400/30';
      case 'secondary':
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20';
    }
  };

  return (
    <motion.button
      ref={btnRef}
      type={type}
      style={{ x, y }}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none gpu-layer ${getVariantStyles()} ${className}`}
    >
      {/* Soft Edge Glow Pulse */}
      {isHovered && variant === 'glow' && (
        <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-75 blur-md animate-pulse -z-10" />
      )}
      {children}
    </motion.button>
  );
}
