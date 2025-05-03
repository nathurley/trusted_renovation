"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-charcoal">
            Trusted<span className="text-gold">Renovation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-gold hover:bg-gold/90 text-charcoal">
            <Link href="/schedule">Schedule Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-charcoal mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/schedule">Schedule Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
