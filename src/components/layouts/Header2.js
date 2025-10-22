import Link from "next/link"
import { useState } from "react"
import VerticalMenu from "./VerticalMenu"

export default function Header2({ scroll }) {
    const [isBurgerMenu, setBurgerMenu] = useState(false)
    const handleBurgerMenu = () => {
        setBurgerMenu(!isBurgerMenu)
        !isBurgerMenu ? document.body.classList.add("burger-menu-visible", "menu-open") : document.body.classList.remove("burger-menu-visible", "menu-open")

    }
    return (
        <>
            <header className="fullscreen-menu">
                <nav className="offNav tgCanvas-menu">
                    <div className="nav-height">
                        <div className="inner">
                            <VerticalMenu isShow />
                        </div>
                    </div>
                </nav>
                <div id="sticky-header" className={`menu-area-two transparent-header ${scroll ? "sticky-menu" : ""}`}>
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
                                                <li className={`icon burger-menu ${isBurgerMenu ? "active" : ""}`} onClick={handleBurgerMenu}>
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

        </>
    )
}
