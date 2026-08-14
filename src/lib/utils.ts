import { EmiResult, AgeResult } from '@/types';

/**
 * Format currency in Indian Rupees (₹) format (e.g. ₹12,34,567)
 */
export function formatINR(amount: number): string {
  const rounded = Math.round(amount);
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(rounded);
}

/**
 * Format bytes into human readable KB / MB
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Calculate financial loan EMI with monthly breakdown
 */
export function calculateEMI(principal: number, annualRate: number, tenureYears: number): EmiResult {
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let monthlyEmi = 0;
  if (monthlyRate === 0) {
    monthlyEmi = principal / totalMonths;
  } else {
    monthlyEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalPayable = monthlyEmi * totalMonths;
  const totalInterest = totalPayable - principal;

  const schedule: EmiResult['schedule'] = [];
  let currentBalance = principal;

  for (let m = 1; m <= Math.min(totalMonths, 360); m++) {
    const interestForMonth = currentBalance * monthlyRate;
    const principalForMonth = monthlyEmi - interestForMonth;
    currentBalance = Math.max(0, currentBalance - principalForMonth);

    schedule.push({
      month: m,
      principalPaid: Math.round(principalForMonth),
      interestPaid: Math.round(interestForMonth),
      remainingBalance: Math.round(currentBalance)
    });
  }

  return {
    monthlyEmi: Math.round(monthlyEmi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
    principalRatio: Math.round((principal / totalPayable) * 100),
    interestRatio: Math.round((totalInterest / totalPayable) * 100),
    schedule
  };
}

/**
 * Exact Age Calculator Math
 */
export function calculateExactAge(birthDateStr: string): AgeResult | null {
  if (!birthDateStr) return null;
  const birth = new Date(birthDateStr);
  const now = new Date();

  if (isNaN(birth.getTime()) || birth > now) return null;

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now.getTime() - birth.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMs / (1000 * 60));

  // Next Birthday Calculation
  let nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBday < now) {
    nextBday.setFullYear(now.getFullYear() + 1);
  }
  const nextBirthdayDays = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekBorn = daysOfWeek[birth.getDay()];

  // Zodiac Sign Calculation
  const m = birth.getMonth() + 1;
  const d = birth.getDate();
  let zodiacSign = 'Unknown';

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) zodiacSign = 'Aries ♈';
  else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) zodiacSign = 'Taurus ♉';
  else if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) zodiacSign = 'Gemini ♊';
  else if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) zodiacSign = 'Cancer ♋';
  else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) zodiacSign = 'Leo ♌';
  else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) zodiacSign = 'Virgo ♍';
  else if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) zodiacSign = 'Libra ♎';
  else if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) zodiacSign = 'Scorpio ♏';
  else if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) zodiacSign = 'Sagittarius ♐';
  else if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) zodiacSign = 'Capricorn ♑';
  else if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) zodiacSign = 'Aquarius ♒';
  else if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) zodiacSign = 'Pisces ♓';

  return {
    years,
    months,
    days,
    totalDays,
    totalHours,
    totalMinutes,
    nextBirthdayDays,
    dayOfWeekBorn,
    zodiacSign
  };
}

/**
 * Client-Side Image Compression with Target KB Iteration & Background Color Support
 */
export async function compressImageToTarget(
  file: File,
  targetKB?: number,
  qualityPreset: number = 0.8,
  format: 'jpeg' | 'png' | 'webp' = 'jpeg',
  bgColor?: string,
  onProgress?: (pct: number) => void
): Promise<{ blob: Blob; width: number; height: number; size: number; dataUrl: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);

    img.onload = async () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Could not get canvas context');

      // Apply solid background color if specified (e.g. White or Passport Blue)
      if (bgColor && bgColor !== 'transparent') {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.drawImage(img, 0, 0, width, height);

      let currentQuality = qualityPreset;
      let blob: Blob | null = null;
      let attempts = 0;
      const targetBytes = targetKB ? targetKB * 1024 : 0;

      // Iterative canvas export to meet exact Target KB requirement
      const mimeType = `image/${format}`;

      if (onProgress) onProgress(20);

      if (targetBytes > 0) {
        let minQ = 0.05;
        let maxQ = 0.98;
        let bestBlob: Blob | null = null;

        for (let i = 0; i < 7; i++) {
          attempts++;
          const testQ = (minQ + maxQ) / 2;
          const currentBlob = await new Promise<Blob>((res) => canvas.toBlob((b) => res(b!), mimeType, testQ));

          if (onProgress) onProgress(20 + Math.round((i / 7) * 70));

          if (currentBlob.size <= targetBytes) {
            bestBlob = currentBlob;
            minQ = testQ; // try to get higher quality if possible
          } else {
            maxQ = testQ; // reduce quality to hit target size
          }

          // Scale down canvas dimensions if quality alone isn't enough
          if (maxQ < 0.15 && (width > 600 || height > 600)) {
            width = Math.round(width * 0.85);
            height = Math.round(height * 0.85);
            canvas.width = width;
            canvas.height = height;
            if (bgColor && bgColor !== 'transparent') {
              ctx.fillStyle = bgColor;
              ctx.fillRect(0, 0, width, height);
            }
            ctx.drawImage(img, 0, 0, width, height);
            minQ = 0.1;
            maxQ = 0.9;
          }
        }
        blob = bestBlob || await new Promise<Blob>((res) => canvas.toBlob((b) => res(b!), mimeType, 0.1));
      } else {
        blob = await new Promise<Blob>((res) => canvas.toBlob((b) => res(b!), mimeType, currentQuality));
      }

      if (onProgress) onProgress(100);

      const dataUrl = URL.createObjectURL(blob);
      resolve({
        blob,
        width,
        height,
        size: blob.size,
        dataUrl
      });
    };
  });
}
