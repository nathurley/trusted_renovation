import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Our Team"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            About <span className="text-gold">Trusted Renovation</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl">
            Crafting exceptional spaces with uncompromising quality and attention to detail
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Company Founders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2005 by master craftsman Jonathan Pierce and interior designer Sophia Reynolds, Trusted
                Renovation was born from a shared passion for transforming living spaces into personalized works of art.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                What began as a boutique renovation service has evolved into one of the most respected luxury remodeling
                firms in the region, while maintaining our commitment to personalized service and exceptional
                craftsmanship.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our philosophy is simple: we believe that your home should be a reflection of your unique lifestyle,
                preferences, and aspirations. Every project we undertake is approached with meticulous attention to
                detail and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Uncompromising Quality",
                description:
                  "We source only the finest materials and employ time-honored craftsmanship techniques to ensure lasting beauty and durability.",
              },
              {
                title: "Personalized Approach",
                description:
                  "Every project is unique, and we take the time to understand your vision, preferences, and lifestyle to create spaces that truly reflect you.",
              },
              {
                title: "Transparent Communication",
                description:
                  "We believe in clear, consistent communication throughout the entire process, ensuring you're informed and confident at every stage.",
              },
              {
                title: "Attention to Detail",
                description:
                  "The difference between good and exceptional lies in the details. Our meticulous approach ensures nothing is overlooked.",
              },
              {
                title: "Timely Execution",
                description:
                  "We respect your time and work diligently to complete projects according to agreed-upon timelines without sacrificing quality.",
              },
              {
                title: "Environmental Responsibility",
                description:
                  "We incorporate sustainable practices and eco-friendly materials whenever possible, minimizing environmental impact.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-gold mb-4">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our team of experienced designers, craftsmen, and project managers brings decades of combined expertise to
              every renovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Jonathan Pierce",
                title: "Founder & Master Craftsman",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Sophia Reynolds",
                title: "Co-Founder & Design Director",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Michael Chen",
                title: "Senior Project Manager",
                image: "/placeholder.svg?height=500&width=500",
              },
              {
                name: "Isabella Martinez",
                title: "Interior Designer",
                image: "/placeholder.svg?height=500&width=500",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact our team today to schedule a consultation and discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal">
              <Link href="/schedule">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-charcoal/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
