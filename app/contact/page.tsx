import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">Contact Us</h1>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We're here to answer your questions and discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="font-serif text-2xl text-charcoal mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="text-gold mr-4 h-5 w-5 mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Phone</p>
                        <p className="text-gray-600">(310) 555-1234</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-gold mr-4 h-5 w-5 mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <p className="text-gray-600">info@trustedrenovation.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-gold mr-4 h-5 w-5 mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Address</p>
                        <p className="text-gray-600">123 Luxury Lane, Beverly Hills, CA 90210</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-gold mr-4 h-5 w-5 mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Hours</p>
                        <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                        <p className="text-gray-600">Saturday: 10am - 4pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Visit Our Showroom</h2>
                  <p className="text-gray-600 mb-4">
                    Experience our craftsmanship firsthand by visiting our luxury showroom featuring kitchen and
                    bathroom vignettes, material samples, and more.
                  </p>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Showroom Map"
                      alt="Showroom Location"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
