"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-black/[0.03] border border-gray-100 px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Pro Trend" width={140} height={36} className="h-8 w-auto" priority />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-purple font-medium text-sm">Home</Link>
          <Link href="/services" className="text-gray-500 hover:text-purple transition-colors text-sm">Services</Link>
          <Link href="/pricing" className="text-gray-500 hover:text-purple transition-colors text-sm">Pricing</Link>
          <Link href="/contact" className="text-gray-500 hover:text-purple transition-colors text-sm">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="text-gray-600 hover:text-purple text-sm font-medium transition-colors">
            Sign in
          </Link>
          <Link
            href="/book-call"
            className="gradient-btn text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-start pt-16 gap-8 text-lg z-40">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-purple font-medium">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-purple">Services</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-purple">Pricing</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-purple">Contact</Link>
          <Link
            href="/book-call"
            onClick={() => setMenuOpen(false)}
            className="gradient-btn text-white font-semibold px-8 py-3 rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
