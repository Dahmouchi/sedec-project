/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header7({ handleMobileMenu, scroll }: any) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1366);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("mobile-menu-visible");
  };
  return (
    <>
      <header className="header-style-six">
        <div className="header-top">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="header-top-left">
                  <p>
                    Bureaux, usine et showroom Avenue Hassan II Km 13,300 Témara
                    - Maroc
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-top-right">
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:contact@sedec.ma">
                        contact@sedec.ma
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={` transparent-header ${
            scroll ? "sticky-menu menu-area" : ""
          }`}
        >
          <div className="container custom-container">
            {/* Mobile Menu Button - Shows on screens under 1600px */}
            

            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    {/* Desktop Menu - Only shows on screens 1600px and above */}
                    {isLargeScreen ? (
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <div className="header-action">
                          <ul className="list-wrap">
                            <li className="header-social">
                              <ul className="list-wrap">
                                <li>
                                  <Link
                                    target="_blank"
                                    href="https://www.facebook.com/share/1BhAyyFBmw/"
                                    className={
                                      scroll ? "text-[#BD9A68]" : "text-white"
                                    }
                                  >
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    target="_blank"
                                    href="https://www.instagram.com/sedecmaroc/"
                                    className={
                                      scroll ? "text-[#BD9A68]" : "text-white"
                                    }
                                  >
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/company/109523022"
                                    className={
                                      scroll ? "text-[#BD9A68]" : "text-white"
                                    }
                                  >
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <ul className="navigation">
                          <li className="menu-item-has-children relative group">
                            <Link
                              href="/projets"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              Villas en Bois
                            </Link>

                            {/* Submenu - Fixed full width */}
                            <div className="fixed left-0 w-full hidden group-hover:block z-50">
                              <ul className="bg-white shadow-lg py-6 w-full">
                                <div className="flex justify-between gap-8  w-full max-w-7xl mx-auto px-6">
                                  {/* Chalet 1 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/projets/1" className="block">
                                      <img
                                        src="/images/scondinave.jpg"
                                        alt="Chalet Scandinavian"
                                        className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      />
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Scandinavian
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 2 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/projets/2" className="block">
                                      <img
                                        src="/images/chalet2.jpg"
                                        alt="Chalet Toubkal"
                                        className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      />
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Toubkal
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 3 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/projets/3" className="block">
                                      <img
                                        src="/images/10.jpg"
                                        alt="Chalet M&M"
                                        className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      />
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        M&M
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 4 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/projets/4" className="block">
                                      <img
                                        src="/images/3.jpg"
                                        alt="Chalet Moroccan Touch"
                                        className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      />
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Moroccan Touch
                                      </span>
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            </div>
                          </li>

                          <li className="menu-item-has-children">
                            <Link
                              href="/charpente"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              Charpente
                            </Link>
                          </li>

                          <li className="menu-item-has-children relative group">
                            <Link
                              href="/pergola"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              Pergola
                            </Link>

                            {/* Submenu - Fixed full width */}
                            <div className="fixed left-0 w-full hidden group-hover:block z-50">
                              <ul className="bg-white shadow-lg py-6 w-full">
                                <div className="flex justify-between gap-8  w-full max-w-7xl mx-auto px-6">
                                  {/* Chalet 1 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/pergola/pergola" className="block">
                                      <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        <img
                                          src="/images/pergola4.png"
                                          alt="Chalet Scandinavian"
                                          className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                        />
                                      </div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Pergola
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 2 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/pergola/gards-corps" className="block">
                                      <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl ">
                                        <img
                                          src="/images/reel/carde.png"
                                          alt="Chalet Toubkal"
                                          className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                        />
                                      </div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Les Gardes corps
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 3 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/pergola/abris-voitures" className="block">
                                      <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        <img
                                          src="/images/reel/abris.png"
                                          alt="Chalet M&M"
                                          className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                        />
                                      </div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Les abris voitures
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 4 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/pergola/passerelles" className="block">
                                      <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        <img
                                          src="/images/reel/passerelle_corten.png"
                                          alt="Chalet Moroccan Touch"
                                          className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                        />
                                      </div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Passerelles
                                      </span>
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            </div>
                          </li>
                        </ul>

                        <div className="logo transition-all duration-300">
                          <Link href="/fr" >
                           <div className=" mt-2">
                             <img
                              src={
                                scroll
                                  ? "/images/logoM.png"
                                  : "/images/logoM.png"
                              }
                              className="w-24 h-auto transition-all duration-300"
                              alt="Logo"
                            />
                           </div>
                          </Link>
                        </div>

                        <ul className="navigation right">
                           <li className="menu-item-has-children relative group">
                            <Link
                              href="/batiments-modulaires"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              Bâtiments modulaires
                            </Link>

                            {/* Submenu - Fixed full width */}
                            <div className="fixed left-0 w-full hidden group-hover:block z-50">
                              <ul className="bg-white shadow-lg py-6 w-full">
                                <div className="flex justify-between gap-8  w-full max-w-7xl mx-auto px-6">
                                  {/* Chalet 1 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/batiments-modulaires/mur-ossature-bois" className="block">
                                     <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        <img
                                      
                                        src="https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/mur(1).JPG"
                                        alt="Chalet Scandinavian"
                                        className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      />
                                      </div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Mur ossature bois
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 2 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/batiments-modulaires/modulaire-metallique" className="block">
                                     <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        
                                      <img
                                        src="/images/merc/img101.jpg"
                                        alt="Chalet Toubkal"
                                        className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      /></div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Modulaires Metalliques
                                      </span>
                                    </Link>
                                  </li>

                                  {/* Chalet 3 */}
                                  <li className="flex flex-col items-center text-center w-full ">
                                    <Link href="/batiments-modulaires/durisol" className="block">
                                       <div className="h-[20vh] mb-4 w-auto bg-cover rounded-xl bg-red-500">
                                        <img
                                        src="https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/durisole1.jpg"
                                        alt="Chalet M&M"
                                        className="w-full h-full object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                      /></div>
                                      <span className="font-serif font-semibold text-gray-500 hover:text-amber-800">
                                        Durisol / Ciment de Bois
                                      </span>
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            </div>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              href="/a-propos"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              À Propos
                            </Link>
                          </li>

                         

                          <li className="menu-item-has-children">
                            <Link
                              href="/galerie"
                              className={`transition-colors duration-300 ${
                                scroll
                                  ? "text-gray-900 hover:text-amber-800"
                                  : "text-white hover:text-blue-200"
                              }`}
                            >
                              Galerie
                            </Link>
                          </li>
                        </ul>

                        <Link
                          href="/contact"
                          className={`btn transparent-btn wow fadeInUp ${
                            scroll
                              ? "border-black border-2 text-black"
                              : "border-white text-white"
                          }`}
                          data-wow-delay=".4s"
                        >
                          <div className="btn_m">
                            <div className="btn_c">
                              <div className="btn_t1">Contact</div>
                              <div className="btn_t2 text-white">Contact</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      // Mobile menu content for screens under 1600px
                      <div className="mobile-menu-content">
                       {!isLargeScreen && (
              <div className="flex items-center justify-between ">
                <Link href="/">
                 <div className="">
                   <img
                   
                    src= {`${scroll ? "/images/logoM.png":"/images/logoM.png"}`}
                    className="w-14 h-auto"
                    alt="Logo"
                  />
                 </div>
                </Link>
                <div onClick={handleMobileMenu}>
                  <Menu className={`${scroll ? "w-14 text-black":"w-14 text-white"}`} />
                </div>
              </div>
            )}
                      </div>
                    )}
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/images/logoM.png" alt="Logo" className="w-20 h-auto" onClick={closeMenu} />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="https://www.facebook.com/share/1BhAyyFBmw/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>

                        <li>
                          <Link href="https://www.instagram.com/sedecmaroc/" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/109523022" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}