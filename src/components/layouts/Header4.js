import Link from "next/link"
import { useState } from "react"

export default function Header4() {
    const [isSideMenu, setSideMenu] = useState(false)
    const handleSideMenu = () => {
        setSideMenu(!isSideMenu)
        !isSideMenu ? document.body.classList.add("side-menu-visible") : document.body.classList.remove("side-menu-visible")

    }
    return (
        <>
            <header>
                <div id="sticky-header" className="menu-area-two transparent-header d-none">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo-two">
                                            <Link href="/"><img src="/assets/img/logo/logo02.png" alt="" /></Link>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-contact">
                                                    <ul className="list-wrap">
                                                        <li><Link href="mailto:relandgroup@mail.com">relandgroup@mail.com</Link></li>
                                                        <li><Link href="tel:0123456789">+7 495 127 5451</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="icon sideMenu-toggle" onClick={handleSideMenu}>
                                                    <Link href="#">
                                                        <span />
                                                        <span />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="sidebar-backdrop" onClick={handleSideMenu} />


        </>
    )
}
