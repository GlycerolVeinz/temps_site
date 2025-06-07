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
  title : "Temporary Friends",
  description : "Temporary Friends band official website. Check out our music, upcoming shows, and social media links.",
  keywords : "Temporary Friends, band, music, shows, social media, streaming platforms",

  openGraph: {
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    url: "https://temporaryfriends.fun",
    siteName: "Temporary Friends",
    images: [
      {
        url: "https://temporaryfriends.fun/group_images/background.jpg",
        width: 1200,
        height: 630,
        alt: "Temporary Friends Band",
      },
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
    canonical: "https://temporaryfriends.fun"
  },
  
  category: "music",
  authors: [
    { name: "Temporary Friends" },
    { name: "GlycerolVeinz", url: "https://github.com/GlycerolVeinz" }
  ],
  creator: "GlycerolVeinz",
  publisher: "Temporary Friends",
  colorScheme: "dark",

  twitter : {
    card: "summary_large_image",
    title: "Temporary Friends",
    description: "Official website of Temporary Friends band. Discover our music, upcoming shows, and social media links.",
    creator: "@safrankou",
    images: [
      {
        url: "https://temporaryfriends.fun/group_images/background.jpg",
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
