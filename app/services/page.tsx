import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury Renovation"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Our <span className="text-gold">Services</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl">
            Comprehensive luxury remodeling solutions tailored to your unique vision
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From concept to completion, we offer a full range of remodeling services to transform your home into a
              luxurious sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Kitchen Remodeling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Luxury Kitchen" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Kitchen Transformations</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-4 text-lg">
                The kitchen is the heart of your home, and our designs combine functionality with sophisticated
                aesthetics to create a space that inspires culinary creativity and social gatherings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Custom cabinetry and millwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Premium countertops and backsplashes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">High-end appliance integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Custom islands and breakfast nooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Specialized storage solutions</span>
                </li>
              </ul>
              <Button asChild className="bg-gold hover:bg-gold/90 text-charcoal">
                <Link href="/schedule">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Remodeling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Bathroom Sanctuaries</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-4 text-lg">
                Transform your bathroom into a personal spa retreat with our luxury remodeling services, combining
                elegant design with premium materials and fixtures.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Custom shower and bath installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Heated flooring systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Luxury vanities and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">High-end fixtures and lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Custom tilework and stone installations</span>
                </li>
              </ul>
              <Button asChild className="bg-gold hover:bg-gold/90 text-charcoal">
                <Link href="/schedule">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Luxury Bathroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Whole Home Renovations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Whole Home Renovation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Whole Home Renovations</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-4 text-lg">
                Reimagine your entire living space with our comprehensive home renovation services, creating a cohesive
                design that flows seamlessly throughout your home.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Architectural modifications and space planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Interior design and material selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Custom millwork and built-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Flooring and wall treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✦</span>
                  <span className="text-gray-600">Lighting design and smart home integration</span>
                </li>
              </ul>
              <Button asChild className="bg-gold hover:bg-gold/90 text-charcoal">
                <Link href="/schedule">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Additional Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Outdoor Living Spaces",
                description:
                  "Extend your living area with custom patios, outdoor kitchens, and landscaping designed for both beauty and functionality.",
              },
              {
                title: "Custom Closets & Storage",
                description:
                  "Maximize your space with bespoke storage solutions tailored to your specific needs and aesthetic preferences.",
              },
              {
                title: "Home Offices",
                description:
                  "Create a productive and inspiring workspace that seamlessly integrates with your home's design.",
              },
              {
                title: "Media Rooms",
                description:
                  "Design the ultimate entertainment space with premium audio-visual systems and comfortable seating arrangements.",
              },
              {
                title: "Wine Cellars",
                description:
                  "Craft a sophisticated space for your collection with custom racking, climate control, and elegant design elements.",
              },
              {
                title: "Smart Home Integration",
                description:
                  "Incorporate cutting-edge technology for lighting, climate, security, and entertainment systems throughout your home.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-gold mb-4">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We've refined our approach to ensure a seamless, transparent experience from initial consultation to
              project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with an in-depth discussion of your vision, preferences, and requirements for your space.",
              },
              {
                number: "02",
                title: "Design & Planning",
                description:
                  "Our design team creates detailed plans and 3D renderings to help you visualize the transformation.",
              },
              {
                number: "03",
                title: "Material Selection",
                description:
                  "We guide you through selecting premium materials, fixtures, and finishes that align with your design vision and lifestyle needs.",
              },
              {
                number: "04",
                title: "Execution",
                description:
                  "Our skilled craftsmen bring the design to life with meticulous attention to detail and regular progress updates.",
              },
            ].map((step, index) => (
              <div key={index} className="relative p-8 rounded-lg bg-white shadow-lg">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-charcoal font-serif text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-charcoal mt-4 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact our team today to schedule a consultation and discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal">
            <Link href="/schedule">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
