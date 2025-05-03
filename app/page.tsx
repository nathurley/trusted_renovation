import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury Home Interior"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            Transforming Spaces Into <span className="text-gold">Masterpieces</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8">
            Luxury home remodeling tailored to your unique vision and lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal">
              <Link href="/schedule">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/gallery">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Transformations",
                description:
                  "Elevate the heart of your home with custom cabinetry, premium materials, and state-of-the-art appliances.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Bathroom Sanctuaries",
                description:
                  "Create a personal spa retreat with luxurious fixtures, custom tilework, and elegant design elements.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Whole Home Renovations",
                description:
                  "Reimagine your entire living space with comprehensive remodeling tailored to your lifestyle.",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-gold hover:text-gold/80 font-medium inline-flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Crafting Luxury Spaces <span className="text-gold">Since 2005</span>
            </h2>
            <p className="text-white/80 mb-6 text-lg">
              With over two decades of experience in luxury home remodeling, our team of master craftsmen and designers
              brings unparalleled expertise to every project.
            </p>
            <p className="text-white/80 mb-8 text-lg">
              We believe that your home should be a reflection of your unique style and needs. Our meticulous attention
              to detail and commitment to excellence ensures that every renovation exceeds expectations.
            </p>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/placeholder.svg?height=1000&width=800" alt="Our Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Client Experiences</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The attention to detail and craftsmanship exceeded our expectations. Our kitchen is now the showpiece of our home."
              author="Emily & Michael Johnson"
              location="Beverly Hills, CA"
              rating={5}
            />
            <TestimonialCard
              quote="Working with this team was a pleasure from start to finish. They transformed our outdated bathroom into a spa-like retreat."
              author="Robert Williams"
              location="Newport Beach, CA"
              rating={5}
            />
            <TestimonialCard
              quote="Their design vision and execution are unmatched. Our home renovation was completed on time and the results are stunning."
              author="Sophia Chen"
              location="Malibu, CA"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Ready to Transform Your Home?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule a complimentary consultation with our design team to discuss your vision and receive a personalized
            quote.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal">
            <Link href="/schedule">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
