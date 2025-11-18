import "./globals.css";

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

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],

  applicationName: "Temporary Friends",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Temporary Friends",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better mobile and app experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Apple-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Temporary Friends" />
        
        {/* Microsoft/Windows specific */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional favicon links for maximum compatibility */}
        <link rel="icon" type="image/x-icon" href="/group_images/non_site_images/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/group_images/non_site_images/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/group_images/non_site_images/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/group_images/non_site_images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/group_images/non_site_images/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/group_images/non_site_images/favicons/android-chrome-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}