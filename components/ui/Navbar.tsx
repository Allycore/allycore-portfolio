"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/allycore-icon.svg"
              alt="Allycore"
              width={32}
              height={32}
              className="rounded-lg group-hover:scale-110 transition-transform duration-200"
            />
            <span className="font-bold text-lg tracking-tight text-navy group-hover:text-accent transition-colors duration-200">
              Allycore
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-muted hover:text-navy"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-navy text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200 accent-glow"
          >
            Me contacter
          </Link>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-16 bg-white/95 backdrop-blur-xl md:hidden border-b border-black/5"
          >
            <ul className="flex flex-col items-center justify-center gap-4 h-full">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-2xl font-bold transition-colors duration-200 ${
                      pathname === href ? "text-accent" : "text-navy hover:text-accent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-xl bg-accent text-navy font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Me contacter
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
