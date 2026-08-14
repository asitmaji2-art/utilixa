import { ToolItem } from '@/types';

export const ALL_TOOLS: ToolItem[] = [
  {
    id: 'image-compressor',
    name: 'Image Compressor & Resizer',
    shortDesc: 'Compress PNG, JPEG, WebP to exact custom target KB with Before/After preview',
    description: 'Ultra-fast client-side image compression. Target exact file sizes (20KB, 50KB, 100KB, custom KB) for job applications, passports, and web optimization.',
    category: 'image',
    icon: 'ImageIcon',
    popular: true,
    badge: 'Custom KB',
    seoKeywords: ['image compressor', 'compress image to 50kb', 'photo resizer', 'reduce photo size', 'passport size photo'],
    route: '/image-compressor'
  },
  {
    id: 'file-converter',
    name: 'Advanced File Format Converter',
    shortDesc: 'Convert JPG, PNG, WebP, GIF, SVG, BMP & CSV/JSON data seamlessly',
    description: 'Multi-format file & data converter with 100% lossy/lossless quality controls and CSV-to-JSON / JSON-to-CSV transformation.',
    category: 'utility',
    icon: 'RefreshCwIcon',
    popular: true,
    badge: 'Multi-Format',
    seoKeywords: ['file converter', 'convert png to jpg', 'csv to json converter', 'json to csv', 'image format converter'],
    route: '/file-converter'
  },
  {
    id: 'image-crop-zoom',
    name: 'Freeform Crop, Zoom & Rotate Tool',
    shortDesc: 'Freeform drag cropping, zoom slider, 90° rotation, and horizontal/vertical flip',
    description: 'Advanced interactive image editor with unconstrained freeform crop, ratio presets (3:4 Passport, 1:1, 16:9), zoom, rotation, and flip controls.',
    category: 'image',
    icon: 'ScissorsIcon',
    popular: true,
    badge: 'Freeform Crop',
    seoKeywords: ['crop image freeform', 'image zoom editor', 'rotate photo online', 'flip image horizontal'],
    route: '/image-crop-zoom'
  },
  {
    id: 'emi-calculator',
    name: 'Financial EMI Loan Calculator',
    shortDesc: 'Calculate monthly loan EMI in ₹ (INR) with donut breakdown & schedule table',
    description: 'Calculate home loan, personal loan, or car loan EMI with interactive sliders in Indian Rupees (₹). Get total interest payable & principal breakdown.',
    category: 'finance',
    icon: 'CalculatorIcon',
    popular: true,
    badge: '₹ INR Format',
    seoKeywords: ['emi calculator', 'loan emi calculator in rupees', 'home loan emi', 'car loan emi calculator'],
    route: '/emi-calculator'
  },
  {
    id: 'age-calculator',
    name: 'Exact Age & Birthday Calculator',
    shortDesc: 'Calculate exact age in years, months, days, total hours & next birthday timer',
    description: 'Determine your precise age in years, months, days, hours, and minutes. Includes next birthday countdown and Zodiac sign detection.',
    category: 'utility',
    icon: 'CalendarIcon',
    popular: true,
    badge: 'Zodiac & Days',
    seoKeywords: ['age calculator', 'calculate exact age', 'how old am i', 'birthday countdown'],
    route: '/age-calculator'
  },
  {
    id: 'pdf-compressor',
    name: 'PDF Compressor & Optimizer',
    shortDesc: 'Compress PDF documents to custom target KB while maintaining sharpness',
    description: 'Reduce PDF file sizes directly in browser. Set custom KB targets for email attachments, online forms, and document submissions.',
    category: 'pdf',
    icon: 'FileTextIcon',
    popular: true,
    badge: 'Target KB',
    seoKeywords: ['pdf compressor', 'compress pdf to 200kb', 'reduce pdf file size', 'pdf optimizer'],
    route: '/pdf-compressor'
  },
  {
    id: 'color-palette',
    name: 'Image Color Palette Extractor',
    shortDesc: 'Extract dominant color palettes & hex codes from any image instantly',
    description: 'Upload any image to extract beautiful color palettes, complementary HEX codes, RGB values, and copy hex codes with 1-click.',
    category: 'image',
    icon: 'PaletteIcon',
    popular: false,
    seoKeywords: ['color palette extractor', 'image hex picker', 'extract colors from photo'],
    route: '/color-palette-extractor'
  },
  {
    id: 'qr-generator',
    name: 'Custom QR Code & Barcode Generator',
    shortDesc: 'Generate custom QR codes with custom colors, logos, and high-res vector output',
    description: 'Create customizable QR codes for URLs, Wi-Fi, text, emails, and vCards with instant SVG / PNG high-res download.',
    category: 'utility',
    icon: 'QrCodeIcon',
    popular: false,
    seoKeywords: ['qr code generator', 'make qr code', 'custom color qr code'],
    route: '/qr-barcode-generator'
  }
];

export const PASSPORT_COLOR_PRESETS = [
  { name: 'Transparent', value: 'transparent', previewBg: 'bg-transparent border border-dashed border-gray-400' },
  { name: 'Passport Blue', value: '#0044ff', previewBg: 'bg-[#0044ff]' },
  { name: 'Pure White', value: '#ffffff', previewBg: 'bg-white border border-gray-300' },
  { name: 'Light Blue', value: '#e0f2fe', previewBg: 'bg-sky-100' },
  { name: 'Off White', value: '#f8fafc', previewBg: 'bg-slate-50 border border-gray-200' },
  { name: 'Dark Navy', value: '#0f172a', previewBg: 'bg-slate-900' },
];
