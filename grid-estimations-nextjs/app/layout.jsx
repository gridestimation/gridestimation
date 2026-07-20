import './globals.css';

const siteUrl = 'https://gridestimations.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Grid Estimation - Precision Solar Estimation for Professionals',
    template: '%s | Grid Estimations'
  },
  description: 'Professional solar estimation services for installation companies, EPCs, and project developers. Fast, accurate layout designs, shading analysis, and energy yield reports.',
  keywords: ['solar estimation', 'solar design', 'solar layout', 'shading analysis', 'energy yield reports', 'solar EPC', 'NABCEP certified'],
  authors: [{ name: 'Grid Estimations' }],
  creator: 'Grid Estimations',
  publisher: 'Grid Estimations',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Grid Estimations',
    title: 'Grid Estimations - Professional Solar Estimation Services',
    description: 'Certified solar professionals delivering accurate estimates, layout designs, and energy yield reports in 24-48 hours.',
    images: [{ url: '/Logo Only (1).png', width: 1200, height: 630, alt: 'Grid Estimations' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid Estimations - Professional Solar Estimation Services',
    description: 'Certified solar professionals delivering accurate estimates, layout designs, and energy yield reports in 24-48 hours.',
    images: ['/Logo Only (1).png']
  },
  verification: { google: 'googlea7de16dd70b9c2d0' },
  icons: { icon: '/Logo Only (1).png', apple: '/Logo Only (1).png' }
};

export default function RootLayout({ children }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={`${basePath}/assets/legacy-app.css`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
