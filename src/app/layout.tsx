import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Pavol Hejný | AI Workshop Specialist - Transform Your Business with AI",
  description: "Professional AI integration workshops for companies. Learn to implement AI into your workflow with expert guidance from Pavol Hejný. Custom training sessions, practical AI solutions, and business transformation.",
  keywords: ["AI workshops", "artificial intelligence training", "business AI integration", "corporate AI consulting", "machine learning workshops", "AI workflow optimization"],
  authors: [{ name: "Pavol Hejný" }],
  creator: "Pavol Hejný",
  publisher: "Pavol Hejný",
  robots: "index, follow",
  openGraph: {
    title: "Pavol Hejný | AI Workshop Specialist",
    description: "Transform your business with professional AI integration workshops. Expert training for companies ready to embrace artificial intelligence.",
    url: "https://www.hejny.org",
    siteName: "Pavol Hejný - AI Workshops",
    type: "website",
    images: [
      {
        url: "https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/social-images/scontent-lga3-1.xx.fbcdn.net/78/78b62041a759f07e57da163985ee20d21e1bef612a031f3243066c0ece166d53.jpg",
        width: 1200,
        height: 630,
        alt: "Pavol Hejný - AI Workshop Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavol Hejný | AI Workshop Specialist",
    description: "Transform your business with professional AI integration workshops",
    images: ["https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/social-images/scontent-lga3-1.xx.fbcdn.net/78/78b62041a759f07e57da163985ee20d21e1bef612a031f3243066c0ece166d53.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.hejny.org" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
