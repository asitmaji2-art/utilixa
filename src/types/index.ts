export type ToolCategory = 'all' | 'image' | 'finance' | 'utility' | 'pdf' | 'developer';

export interface ToolItem {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  category: ToolCategory;
  icon: string;
  badge?: string;
  popular?: boolean;
  seoKeywords: string[];
}

export type Theme = 'dark' | 'light';

export interface AdUnitProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'leaderboard' | 'rectangle';
  className?: string;
  label?: string;
}

export interface ImageProcessingOptions {
  targetKB?: number;
  quality: number;
  format: 'jpeg' | 'png' | 'webp';
  maxWidth?: number;
  maxHeight?: number;
  bgColor?: string;
}

export interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
  principalRatio: number;
  interestRatio: number;
  schedule: Array<{
    month: number;
    principalPaid: number;
    interestPaid: number;
    remainingBalance: number;
  }>;
}

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  nextBirthdayDays: number;
  dayOfWeekBorn: string;
  zodiacSign: string;
}
