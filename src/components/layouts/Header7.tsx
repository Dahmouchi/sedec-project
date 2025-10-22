/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { s } from "framer-motion/client";

export default function Header7({ handleMobileMenu, scroll }: any) {
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
                    <li>
                      <Link href="0537741119">+ 212 (0) 537 741 119</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area transparent-header ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="flex items-center justify-between lg:hidden">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Logo" />
                  </Link>
                  <div onClick={handleMobileMenu}>
                    <Menu className="w-14 text-white" />
                  </div>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <div className="header-action">
                        <ul className="list-wrap">
                          <li className="header-social">
                            <ul className="list-wrap">
                              <li>
                                <Link
                                  href="#"
                                  className={
                                    scroll ? "text-[#BD9A68]" : "text-white"
                                  }
                                >
                                  <i className="fab fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className={
                                    scroll ? "text-[#BD9A68]" : "text-white"
                                  }
                                >
                                  <i className="fab fa-instagram" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className={
                                    scroll ? "text-[#BD9A68]" : "text-white"
                                  }
                                >
                                  <i className="fab fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
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
                      <ul className="navigation ">
                        <li className="menu-item-has-children relative group">
                          <Link
                            href="/projets"
                            className={`transition-colors duration-300 ${
                              scroll
                                ? "text-gray-900 hover:text-amber-800"
                                : "text-white hover:text-blue-200"
                            }`}
                          >
                            Nos chalets
                          </Link>

                          {/* Submenu */}
                          <ul className="sub-menu absolute left-0 top-full mt-2 hidden w-[1000px] bg-white shadow-lg rounded-lg p-6 group-hover:flex flex-wrap  z-50">
                            <div className="flex w-full gap-1">
                              {/* Chalet 1 */}
                              <li className=" flex items-center text-center">
                                <Link href="/projets/1">
                                  <img
                                    src="/images/scondinave.jpg"
                                    alt="Chalet Scandinavian"
                                    className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                  />
                                  <span className="font-semibold text-gray-800 hover:text-amber-800">
                                    Scandinavian
                                  </span>
                                </Link>
                              </li>

                              {/* Chalet 2 */}
                              <li className=" flex flex-col items-center text-center">
                                <Link href="/projets/2">
                                  <img
                                    src="/images/chalet2.jpg"
                                    alt="Chalet Toubkal"
                                    className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                  />
                                  <span className="font-semibold text-gray-800 hover:text-amber-800">
                                    Toubkal
                                  </span>
                                </Link>
                              </li>

                              {/* Chalet 3 */}
                              <li className=" flex flex-col items-center text-center">
                                <Link href="/projets/3">
                                  <img
                                    src="/images/10.jpg"
                                    alt="Chalet M&M"
                                    className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                  />
                                  <span className="font-semibold text-gray-800 hover:text-amber-800">
                                    M&M
                                  </span>
                                </Link>
                              </li>

                              {/* Chalet 4 */}
                              <li className="flex flex-col items-center text-center">
                                <Link href="/projets/4">
                                  <img
                                    src="/images/3.jpg"
                                    alt="Chalet Moroccan Touch"
                                    className="w-full h-auto object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
                                  />
                                  <span className="font-semibold text-gray-800 hover:text-amber-800">
                                    Moroccan Touch
                                  </span>
                                </Link>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li className="menu-item-has-children ">
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
                      </ul>
                      <div className="logo transition-all duration-300">
                        <Link href="/">
                          <img
                            src={
                              scroll
                                ? "/images/logo.png"
                                : "/images/logowhite.png"
                            }
                            className="w-24 h-auto transition-all duration-300"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <ul className="navigation right">
                        <li className="menu-item-has-children">
                          <Link
                            href="#"
                            className={`transition-colors duration-300 ${
                              scroll
                                ? "text-gray-900 hover:text-amber-800"
                                : "text-white hover:text-blue-200"
                            }`}
                          >
                            Galerie
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/contact"
                            className={`transition-colors duration-300 ${
                              scroll
                                ? "text-gray-900 hover:text-amber-800"
                                : "text-white hover:text-blue-200"
                            }`}
                          >
                            contact
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
                            <div className="btn_t1">Visitez notre showroom</div>
                            <div className="btn_t2 text-white">
                              Visitez notre showroom
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
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
                        <img src="/images/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
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
