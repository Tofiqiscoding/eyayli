"use client";

import Image from "next/image";
import "./Header.css";

type HeaderSection = "home" | "about" | "contact";

type HeaderProps = {
  onNavigate: (section: HeaderSection) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
   <div className="header-content-wrap">
        {/* Logo və Başlıq Bloku */}
        <div className="logo-block">
          <Image
            src="/bbu_logo.png"
            alt="Bakı Biznes Universiteti"
            width={80}
            height={80}
            className="logo-image"
            priority
            style={{ backgroundColor: 'transparent' }}
          />
          <div className="title-text-block">
            <span className="university-subtitle">Bakı Biznes Universiteti</span>
            <span className="main-title">Yaddaş Kitabçası</span>
          </div>
        </div>

        {/* Naviqasiya Bloku */}
        <nav className="main-nav">
          <button
            className="nav-item"
            onClick={() => onNavigate("home")}
          >
            Ana Səhifə
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("about")}
          >
            Haqqında
          </button>

          <button
            className="nav-item"
            onClick={() => onNavigate("contact")}
          >
            Əlaqə
          </button>
        </nav>
      </div>
    </header>
  );
}