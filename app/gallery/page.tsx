import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Project Gallery"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl">
            Explore our collection of luxury renovations and transformations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={`/placeholder.svg?height=800&width=600&text=Project ${index + 1}`}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl text-white mb-2">
                      Luxury{" "}
                      {
                        [
                          "Kitchen",
                          "Bathroom",
                          "Living Room",
                          "Master Suite",
                          "Home Office",
                          "Outdoor Space",
                          "Wine Cellar",
                          "Media Room",
                          "Whole Home",
                        ][index]
                      }{" "}
                      Renovation
                    </h3>
                    <p className="text-white/80 mb-4">Beverly Hills, CA</p>
                    <Link
                      href={`/projects/${index + 1}`}
                      className="text-gold hover:text-gold/80 font-medium inline-flex items-center"
                    >
                      View Project
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold text-5xl font-serif mb-6">"</div>
          <p className="text-white/90 text-xl md:text-2xl italic mb-8">
            The transformation of our home exceeded all expectations. The attention to detail, quality of craftsmanship,
            and dedication to our vision was truly exceptional. We couldn't be happier with the results.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gold font-serif text-lg">Robert & Sarah Thompson</p>
          <p className="text-white/70">Malibu, CA</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Create Your Own Success Story?
          </h2>
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
