import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header3({ handleMobileMenu, scroll }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`menu-area menu-style-three transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-lg-2">
                                                <div className="logo">
                                                    <Link href="/"><img src="/assets/img/logo/logo02.png" alt="Logo" /></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                                    <Menu />
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="header-contact text-end">
                                                    <Link href="tel:0123456789">+7 495 127 5451</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
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
    )
}
