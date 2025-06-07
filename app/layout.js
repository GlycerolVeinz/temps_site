import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://temporaryfriends.fun"),
  title : "Temporary Friends",
  description : "Temporary Friends band official website. Check out our music, upcoming shows, and social media links.",
  keywords : "Temporary Friends, band, music, shows, social media, streaming platforms",

  openGraph: {
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    url: "/",
    siteName: "Temporary Friends",
    images: [
      { url: "/group_images/non_site_images/og_image.jpg", width: 1200, height: 630, alt: "Temporary Friends Band" },
      { url: "/group_images/non_site_images/favicons/favicon-32x32.png", width: 32, height: 32, alt: "Temporary Friends Favicon" },
      { url: "/group_images/non_site_images/favicons/favicon-16x16.png", width: 16, height: 16, alt: "Temporary Friends Favicon" },
      { url: "/group_images/non_site_images/favicons/apple-touch-icon.png", width: 180, height: 180, alt: "Temporary Friends Apple Touch Icon" },
      { url: "/group_images/non_site_images/favicons/android-chrome-192x192.png", width: 192, height: 192, alt: "Temporary Friends Android Chrome Icon" },
      { url: "/group_images/non_site_images/favicons/android-chrome-512x512.png", width: 512, height: 512, alt: "Temporary Friends Android Chrome Icon" },
      { url: "/group_images/non_site_images/favicons/favicon.ico", width: 64, height: 64, alt: "Temporary Friends Favicon" }
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
    googleBot: {
      index: true,
      follow: false,
      'max-image-preview': 'large',
      'max-snippet': -1
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

  twitter : {
    card: "summary_large_image",
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    creator: "@safrankou",
    images: [
      {
        url: "/group_images/background.jpg",
        alt: "Temporary Friends Band",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
