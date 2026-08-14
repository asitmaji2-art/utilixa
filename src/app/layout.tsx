import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import FloatingOrbs from '@/components/layout/FloatingOrbs';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://utilixa.in'),
  title: {
    default: 'Utilixa - Free Client-Side Image, File & Financial Utility Tools',
    template: '%s | Utilixa',
  },
  description:
    'Utilixa (utilixa.in) is a free browser-based utility platform featuring custom KB Image Compressor, File Format Converter (JPG, PNG, WebP, CSV/JSON), Freeform Crop & Zoom, EMI Loan Calculator in ₹ (INR), Exact Age Calculator, and PDF Size Reducer with 100% client-side privacy.',
  keywords: [
    'utilixa',
    'utilixa.in',
    'image compressor to target kb',
    'file format converter',
    'csv to json converter',
    'freeform image crop',
    'emi calculator in rupees',
    'age calculator exact',
    'pdf size reducer',
    'free online tools'
  ],
  alternates: {
    canonical: 'https://utilixa.in',
  },
  openGraph: {
    title: 'Utilixa - Free Client-Side Utility Tools Suite (utilixa.in)',
    description: '100% private, browser-based utility tools with zero server uploads and 60 FPS hardware acceleration.',
    url: 'https://utilixa.in',
    siteName: 'Utilixa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utilixa - Free Client-Side Utility Tools',
    description: 'Compress images, convert file formats, crop & zoom photos, calculate loan EMIs in ₹ (INR), and optimize PDFs on utilixa.in.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Utilixa',
    url: 'https://utilixa.in',
    description: 'Free client-side web application suite for image compression, file format conversion, financial loan EMI calculation, and PDF optimization.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="iShCE_E71SbhsnMB0jnEp4yV4rY6xmZ0Gtwuc081I7Q" />

        {/* AdSense Script (Async, non-blocking) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-cyan-500 selection:text-white">
        <ThemeProvider>
          <FloatingOrbs />
          <div className="relative z-10 flex-grow flex flex-col justify-between">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
