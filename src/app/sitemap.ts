import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utilixa.in';

  const routes = [
    '',
    '/image-compressor',
    '/file-converter',
    '/image-crop-zoom',
    '/emi-calculator',
    '/age-calculator',
    '/pdf-compressor',
    '/color-palette-extractor',
    '/qr-barcode-generator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
