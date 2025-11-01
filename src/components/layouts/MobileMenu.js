/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const [isMobileMenu, setMobileMenu] = useState(false);

const handleToggle = (key) => { if (isActive.key === key) { setIsActive({ status: false, }) } else { setIsActive({ status: true, key, }) } }



  // ✅ Force menu to close on any link click
  const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("mobile-menu-visible");
  };

  return (
    <ul className="navigation">
      {/* Nos Villas en Bois */}
      <li className={isActive.key === "1" ? "menu-item-has-children active" : "menu-item-has-children"}>
        <Link href="/projets" onClick={() => handleToggle("1")}>Nos Villas en Bois</Link>
        <ul className="sub-menu" style={{ display: isActive.key === "1" ? "block" : "none" }}>
          <li><Link href="/projets/1" onClick={closeMenu}>Scandinavian</Link></li>
          <li><Link href="/projets/2" onClick={closeMenu}>Toubkal</Link></li>
          <li><Link href="/projets/3" onClick={closeMenu}>M&M</Link></li>
          <li><Link href="/projets/4" onClick={closeMenu}>Moroccan Touch</Link></li>
        </ul>
        <div
          className={isActive.key === "1" ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle("1")}
        >
          <span className="fas fa-angle-down text-white" />
        </div>
      </li>

      {/* Charpente */}
      <li>
        <Link href="/charpente" onClick={closeMenu}>Charpente</Link>
      </li>

      {/* Pergola */}
      <li className={isActive.key === "2" ? "menu-item-has-children active" : "menu-item-has-children"}>
        <Link href="/pergola" onClick={() => handleToggle("2")}>Pergola</Link>
        <ul className="sub-menu" style={{ display: isActive.key === "2" ? "block" : "none" }}>
          <li><Link href="/pergola/pergola" onClick={closeMenu}>Pergola</Link></li>
          <li><Link href="/pergola/gards-corps" onClick={closeMenu}>Les Gardes Corps</Link></li>
          <li><Link href="/pergola/abris-voitures" onClick={closeMenu}>Les Abris Voitures</Link></li>
          <li><Link href="/pergola/passerelles" onClick={closeMenu}>Passerelles</Link></li>
        </ul>
        <div
          className={isActive.key === "2" ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle("2")}
        >
          <span className="fas fa-angle-down text-white" />
        </div>
      </li>

      {/* À Propos */}
      

      {/* Bâtiments modulaires */}
      <li className={isActive.key === "3" ? "menu-item-has-children active" : "menu-item-has-children"}>
        <Link href="/batiments-modulaires" onClick={() => handleToggle("3")}>Bâtiments modulaires</Link>
        <ul className="sub-menu" style={{ display: isActive.key === "3" ? "block" : "none" }}>
          <li><Link href="/batiments-modulaires/mur-ossature-bois" onClick={closeMenu}>Mur ossature bois</Link></li>
          <li><Link href="/batiments-modulaires/modulaire-metallique" onClick={closeMenu}>Modulaires Métalliques</Link></li>
          <li><Link href="/batiments-modulaires/durisol" onClick={closeMenu}>Durisol</Link></li>
        </ul>
        <div
          className={isActive.key === "3" ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle("3")}
        >
          <span className="fas fa-angle-down text-white" />
        </div>
      </li>
<li>
        <Link href="/a-propos" onClick={closeMenu}>À Propos</Link>
      </li>
      {/* Galerie */}
      <li>
        <Link href="/galerie" onClick={closeMenu}>Galerie</Link>
      </li>

      {/* Contact */}
      <li>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </li>
    </ul>
  );
}
