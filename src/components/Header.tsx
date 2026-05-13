"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClassName = (path: string) => {
    return `text-sm font-medium leading-normal transition-colors ${
      isActive(path)
        ? "text-[var(--color-primary)] font-bold"
        : "text-[var(--color-text-main)] hover:text-[var(--color-primary)]"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col whitespace-nowrap border-b transition-all duration-300 px-3 py-4 md:px-6 lg:px-20 ${
        scrolled
          ? "border-[var(--color-border-dark)] bg-[var(--color-bg-dark)]/95 backdrop-blur-md shadow-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-80 transition-opacity shrink-0"
        >
          <div className="relative h-10 w-auto md:h-12 flex items-center">
             <span className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">spa</span>
                Mersin<span className="text-[var(--color-primary)]">Severium</span>Masaj
             </span>
          </div>
        </Link>

        {/* Mobile Inline Links */}
        <div className="flex lg:hidden items-center gap-3 overflow-x-auto scrollbar-hide text-xs font-medium text-[var(--color-text-sub)] mx-2">
          <Link
            href="/masaj-hizmetleri"
            className={`whitespace-nowrap transition-colors py-1 ${isActive("/masaj-hizmetleri") ? "text-[var(--color-primary)] font-bold" : "hover:text-[var(--color-primary)]"}`}
          >
            Masaj
          </Link>
          <Link
            href="/cilt-bakimi"
            className={`whitespace-nowrap transition-colors py-1 ${isActive("/cilt-bakimi") ? "text-[var(--color-primary)] font-bold" : "hover:text-[var(--color-primary)]"}`}
          >
            Cilt Bakımı
          </Link>
          <Link
            href="/lazer-epilasyon"
            className={`whitespace-nowrap transition-colors py-1 ${isActive("/lazer-epilasyon") ? "text-[var(--color-primary)] font-bold" : "hover:text-[var(--color-primary)]"}`}
          >
            Lazer Epilasyon
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="flex items-center gap-9 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <Link className={getLinkClassName("/")} href="/">
              Ana Sayfa
            </Link>
            <Link
              className={getLinkClassName("/masaj-hizmetleri")}
              href="/masaj-hizmetleri"
            >
              Masaj Hizmetleri
            </Link>
            <Link
              className={getLinkClassName("/cilt-bakimi")}
              href="/cilt-bakimi"
            >
              Cilt Bakımı
            </Link>
            <Link
              className={getLinkClassName("/lazer-epilasyon")}
              href="/lazer-epilasyon"
            >
              Lazer Epilasyon
            </Link>
            <Link className={getLinkClassName("/iletisim")} href="/iletisim">
              İletişim
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <a
            href="tel:05407903333"
            className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-bold leading-normal tracking-wide transition-all shadow-[0_0_15px_rgba(29,184,155,0.3)] hover:shadow-[0_0_25px_rgba(29,184,155,0.5)] hover:-translate-y-0.5"
          >
            <span>Hemen Ara</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-[var(--color-text-main)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in-down border-t border-[var(--color-border-dark)] pt-4 bg-[var(--color-bg-dark)]/95 absolute left-0 right-0 top-full px-4 shadow-xl">
          <Link
            className={getLinkClassName("/")}
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            className={getLinkClassName("/masaj-hizmetleri")}
            href="/masaj-hizmetleri"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Masaj Hizmetleri
          </Link>
          <Link
            className={getLinkClassName("/cilt-bakimi")}
            href="/cilt-bakimi"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cilt Bakımı
          </Link>
          <Link
            className={getLinkClassName("/lazer-epilasyon")}
            href="/lazer-epilasyon"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lazer Epilasyon
          </Link>
          <Link
            className={getLinkClassName("/iletisim")}
            href="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İletişim
          </Link>
        </nav>
      )}
    </header>
  );
}
