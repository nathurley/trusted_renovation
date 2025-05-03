import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Trusted<span className="text-gold">Renovation</span>
            </h3>
            <p className="text-white/70 mb-4">
              Transforming homes with uncompromising quality and attention to detail since 2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Bathroom Renovations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Whole Home Renovations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Custom Cabinetry
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Outdoor Living Spaces
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p>123 Luxury Lane</p>
              <p>Beverly Hills, CA 90210</p>
              <p className="mt-4">(310) 555-1234</p>
              <p>info@trustedrenovation.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Trusted Renovation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
