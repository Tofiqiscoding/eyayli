"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo-wrap">
          
          <Image
            src="/bbulogo.png"
            alt="Bakı Biznes Universiteti"
            width={80}
            height={80}
            className="header-logo-img"
          />
          <div className="header-title-block">
            <span className="header-subtitle">Bakı Biznes Universiteti</span>
            <span className="header-title">Yaddaş Kitabçası</span>
          </div>
        </div>
      </div>

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
