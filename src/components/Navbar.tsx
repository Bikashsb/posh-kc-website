"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Memberships", href: "/memberships" },
  { label: "Posh Bride", href: "/posh-bride" },
  { label: "Posh Party", href: "/posh-party" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/c2a5ddb3-7b98-4303-a270-eea58e6f6f9a/1-3.jpg?format=300w"
            alt="Posh KC"
            width={100}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-posh-dark hover:text-posh-purple transition-colors uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-posh-purple text-white text-sm font-bold rounded-none uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
          >
            Book Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-posh-dark"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-posh-dark hover:text-posh-purple uppercase tracking-wide border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full py-3 bg-posh-purple text-white font-bold uppercase tracking-wider"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
