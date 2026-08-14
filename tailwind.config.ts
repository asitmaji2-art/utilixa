import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0265d6',
          700: '#0044ff', // Passport Blue preset accent
          900: '#0f172a',
        },
        neon: {
          blue: '#00f0ff',
          purple: '#7000ff',
          pink: '#ff007f',
          cyan: '#00ffd2',
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'laser-scan': 'laserScan 2.5s ease-in-out infinite alternate',
        'orb-slow': 'orbFloat 25s ease-in-out infinite alternate',
        'orb-slow-reverse': 'orbFloatReverse 30s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 15px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(112, 0, 255, 0.4), inset 0 0 25px rgba(112, 0, 255, 0.2)' },
        },
        laserScan: {
          '0%': { top: '0%', opacity: '0.8' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0.8' },
        },
        orbFloat: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(60px, -40px, 0) scale(1.15)' },
          '100%': { transform: 'translate3d(-40px, 50px, 0) scale(0.95)' },
        },
        orbFloatReverse: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(-70px, 45px, 0) scale(1.2)' },
          '100%': { transform: 'translate3d(50px, -60px, 0) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
