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
  title: "SEDEC - Construction Modulaire Bois",
  description: "L'excellence en construction modulaire bois. Solutions architecturales durables et innovantes.",
  keywords: "location vacances, airbnb, logement, voyage, séjour, hébergement",
  authors: [{ name: "StayNest" }],
  creator: "StayNest",
  publisher: "StayNest",
  openGraph: {
    title: "StayNest - Trouvez votre refuge parfait",
    description: "Découvrez des logements uniques et vivez des expériences inoubliables partout dans le monde.",
    url: "https://staynest.com",
    siteName: "StayNest",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayNest - Trouvez votre refuge parfait",
    description: "Découvrez des logements uniques et vivez des expériences inoubliables partout dans le monde.",
    creator: "@staynest",
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
