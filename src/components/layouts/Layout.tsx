/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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

interface LayoutProps {
  headerStyle?: number;
  headTitle?: string;
  breadcrumbTitle?: string;
  children: ReactNode;
  noFooter?: boolean;
}
interface CombinedButtonsProps {
  whatsappProps: any;
  reservationFormId: string; // ID of your reservation form element
}

const CombinedButtons: React.FC<CombinedButtonsProps> = ({
  whatsappProps,
  reservationFormId,
}) => {
  return (
    <div className="">
      <WhatsappShare {...whatsappProps} />

      <style jsx>{`
        .reservation-scroll-btn {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .reservation-scroll-btn {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
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
  useEffect(() => {
    import("wowjs").then((mod) => {
      const WOW = mod.WOW || mod.default;

      if (typeof WOW === "function") {
        new WOW({ live: false }); // Just call as a function
      }
    });
  }, []);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("mobile-menu-visible");
      } else {
        document.body.classList.remove("mobile-menu-visible");
      }
      return newState;
    });
  };

  // Scroll Header
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      setScroll(scrollCheck);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <CombinedButtons
          whatsappProps={{
            phoneNumber: "1234567890",
            message: "Bonjour je souhaite faire une réservation",
          }}
          reservationFormId="reservation-form"
        />
        <PageHead headTitle={headTitle} />
        {!headerStyle && (
          <Header1 handleMobileMenu={handleMobileMenu} scroll={undefined} />
        )}
        {headerStyle === 1 && (
          <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        )}
        {headerStyle === 2 && <Header2 scroll={scroll} />}
        {headerStyle === 3 && (
          <Header3 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        )}
        {headerStyle === 4 && <Header4 />}
        {headerStyle === 5 && (
          <Header5 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        )}
        {headerStyle === 6 && (
          <Header6 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        )}
        {headerStyle === 7 && (
          <Header7 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        )}

        <main>
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>

        {!noFooter && <Footer />}

        <BackToTop />
      </div>
    </>
  );
}
