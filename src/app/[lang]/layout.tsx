import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "../globals.css";
import "../../../public/assets/css/animate.min.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/flaticon.css"
import "../../../public/assets/css/fontawesome-all.min.css"
import "../../../public/assets/css/magnific-popup.css"
import "../../../public/assets/css/odometer.css"
import "../../../public/assets/css/responsive.css"
import "../../../public/assets/css/slick.css"
import "../../../public/assets/css/spacing.css"
import "../../../public/assets/css/style.css"
import "../../../public/assets/css/swiper-bundle.min.css"
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEDEC - Construction Modulaire Bois & Charpente | Depuis 1948",
  description: "SEDEC, leader marocain en construction modulaire bois, charpente et pergolas depuis 1948. Solutions durables en villas bois, bâtiments modulaires et structures métalliques.",
  keywords: "construction bois Maroc, charpente bois, maison bois, villa bois, bâtiment modulaire, pergola, abri voiture, garde-corps, SEDEC, construction modulaire, ossature bois, lamellé-collé",
  authors: [{ name: "SEDEC" }],
  creator: "SEDEC",
  publisher: "SEDEC",
  metadataBase: new URL('https://sedec.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
    },
  },
  openGraph: {
    title: "SEDEC - Construction Modulaire Bois & Charpente | Expert depuis 1948",
    description: "Leader marocain en construction bois : villas, charpentes, pergolas et bâtiments modulaires. Expertise et qualité depuis 1948.",
    url: "https://sedec.ma",
    siteName: "SEDEC",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEDEC - Construction Modulaire Bois',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEDEC - Construction Modulaire Bois & Charpente",
    description: "Expert en construction bois au Maroc depuis 1948. Villas, charpentes, pergolas et bâtiments modulaires.",
    creator: "@sedecmaroc",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "construction",
  other: {
    "facebook-domain-verification": "your-facebook-domain-verification",
    "msvalidate.01": "your-bing-verification-code",
  }
};

// Define supported languages type
type SupportedLang = 'en' | 'fr';

// Helper function to validate language
function isValidLang(lang: string): lang is SupportedLang {
  return lang === 'en' || lang === 'fr';
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // Change to string here
}>) {
  const { lang } = await params;
  
  // Validate and fallback to default language if needed
  const validatedLang = isValidLang(lang) ? lang : 'fr';
  
  return (
    <html lang={validatedLang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased relative`}
      >
       
        <div className="overflow-x-hidden">{children}</div>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
  ];
}