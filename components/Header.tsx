"use client";

import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Üst hissə: logo + başlıq */}
      <div className="header-top">
        <div className="header-logo-wrap">
          
          <img
            src=""
            alt="Bakı Biznes Universiteti"
            className="header-logo-img"
          />
          <div className="header-title-block">
            <span className="header-subtitle">Bakı Biznes Universiteti</span>
            <span className="header-title">Yaddaş Kitabçası</span>
          </div>
        </div>
      </div>

      {/* Naviqasiya – ortada dursun */}
      <nav className="header-nav">
        <Link href="/" className="nav-link">
          Homepage
        </Link>
        <a href="#about" className="nav-link">
          Haqqında
        </a>
        <a href="#contact" className="nav-link">
          Əlaqə
        </a>
      </nav>
    </header>
  );
}
