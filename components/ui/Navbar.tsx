"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import BarsMark from "./BarsMark";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Réalisations" },
  { href: "/about", label: "À propos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="nav-wrap">
        <nav className="nav">
          <Link href="/" className="nav-logo" aria-label="Allycore — accueil">
            <BarsMark size="md" />
            <span>Allycore</span>
          </Link>

          <div className="nav-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Link href="/contact" className="btn btn--dark nav-cta">
              Devis gratuit
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[90] bg-paper flex flex-col items-center justify-center gap-7 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-3xl font-bold ${
                pathname === l.href ? "text-[var(--ac-yellow-deep)]" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--primary btn--lg mt-3">
            Devis gratuit
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
