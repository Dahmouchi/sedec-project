import Link from "next/link"

export default function Footer1({ }) {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg">
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-xl-3 col-md-4 col-sm-5">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <Link href="/"><img src="/images/logowhite.png" className="w-36 h-auto" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Contact</h2>
                                        <div className="footer-contact">
                                            <p>Adresse : Bureaux, usine et showroom  <br /> Avenue Hassan II - Km 13,300 Témara - Maroc</p>
                                            <ul className="list-wrap">
                                                <li><Link href="mailto:contact@sedec.ma">contact@sedec.ma</Link></li>
                                                <li><Link href="tel:0537741119">(+212) 537 741 119</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-5">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">liens utiles</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="overview">Nos chalets</Link></li>
                                                <li><Link href="contact">À Propos</Link></li>
                                                <li><Link href="contact">Galerie </Link></li>
                                                <li><Link href="contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-5 col-sm-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">newsletter</h2>
                                        <div className="footer-newsletter">
                                            <form action="#">
                                                <input type="email" placeholder="Adresse Email..." />
                                                <button type="submit"><i className="fas fa-arrow-right" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text text-center">
                                        <p>Copyright © <span>SEDEC</span> {new Date().getFullYear()}. All Rights Reserved</p>
                                    </div>
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
