/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, ReactNode } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";
import Header6 from "./Header6";
import Header7 from "./Header7";
import PageHead from "./PageHead";
import WhatsappShare from "../whatsappShare";
import { QuickAccessButton } from "../quik";

interface LayoutProps {
  headerStyle?: number;
  headTitle?: string;
  breadcrumbTitle?: string;
  children: ReactNode;
  noFooter?: boolean;
}
interface CombinedButtonsProps {
  whatsappProps: any;
  reservationFormId: string;
}

const CombinedButtons: React.FC<CombinedButtonsProps> = ({
  whatsappProps,
  reservationFormId,
}) => {
  return (
    <div>
      <WhatsappShare {...whatsappProps} />
    </div>
  );
};

export default function Layout({
  headerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  noFooter,
}: LayoutProps) {
 

  // ------------------------------
  // WOW.js init
  // ------------------------------
  useEffect(() => {
    import("wowjs").then((mod) => {
      const WOW = mod.WOW || mod.default;
      if (typeof WOW === "function") new WOW({ live: false });
    });
  }, []);

  // ------------------------------
  // Mobile Menu
  // ------------------------------
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    console.log("tes")
    setMobileMenu((prev) => {
      const newState = !prev;
      document.body.classList.toggle("mobile-menu-visible", newState);
      return newState;
    });
  };

  // ------------------------------
  // Scroll Header
  // ------------------------------
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ------------------------------
  // 🧠 Render
 
  // ------------------------------
  // Main Layout
  // ------------------------------
  return (
    <div className="relative fade-in transition-opacity duration-700">
      <QuickAccessButton />

      <PageHead headTitle={headTitle} />

      {!headerStyle && <Header1 handleMobileMenu={handleMobileMenu} scroll={undefined} />}
      {headerStyle === 1 && <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} />}
      {headerStyle === 2 && <Header2 scroll={scroll} />}
      {headerStyle === 3 && <Header3 scroll={scroll} handleMobileMenu={handleMobileMenu} />}
      {headerStyle === 4 && <Header4 />}
      {headerStyle === 5 && <Header5 scroll={scroll} handleMobileMenu={handleMobileMenu} />}
      {headerStyle === 6 && <Header6 scroll={scroll} handleMobileMenu={handleMobileMenu} />}
      {headerStyle === 7 && <Header7 scroll={scroll} handleMobileMenu={handleMobileMenu} />}

      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {!noFooter && <Footer />}
      <BackToTop />
    </div>
  );
}
