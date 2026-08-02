import localFont from 'next/font/local';
import "./globals.css";

const tempsFont = localFont({
  src: '../public/fonts/temps_font.woff2',
  display: 'swap',
  variable: '--font-temps',
});

const tempsFontRegular = localFont({
  src: '../public/fonts/temps_font_regular.woff2',
  display: 'swap',
  variable: '--font-temps-regular',
});

export const metadata = {
  metadataBase: new URL("https://temporaryfriends.fun"),
  title: "Temporary Friends",
  description: "Temporary Friends band official website. Check out our music, upcoming shows, and social media links.",
  keywords: "Temporary Friends, band, music, shows, social media, streaming platforms",

  icons: {
    
    icon: [
      { url: "/group_images/non_site_images/favicons/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/group_images/non_site_images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/group_images/non_site_images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/group_images/non_site_images/favicons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/group_images/non_site_images/favicons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],

    apple: [
      { url: "/group_images/non_site_images/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    
    shortcut: "/group_images/non_site_images/favicons/favicon.ico",
  },

  openGraph: {
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    url: "/",
    siteName: "Temporary Friends",
    images: [
      { 
        url: "/group_images/non_site_images/og_image.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Temporary Friends Band",
        type: "image/jpeg"
      }
    ],
    locale: "en_GB",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    },
  },

  alternates: {
    canonical: "/"
  },
  
  category: "music",
  authors: [
    { name: "Temporary Friends" },
    { name: "GlycerolVeinz", url: "https://github.com/GlycerolVeinz" }
  ],
  creator: "GlycerolVeinz",
  publisher: "Temporary Friends",

  twitter: {
    card: "summary_large_image",
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    site: "@safrankou", // Added site handle
    creator: "@safrankou",
    images: ["/group_images/non_site_images/og_image.jpg"], // Use the same OG image for consistency
  },

  manifest: "/manifest.json",

  applicationName: "Temporary Friends",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Temporary Friends",
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f17',
};

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tempsFont.variable} ${tempsFontRegular.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}