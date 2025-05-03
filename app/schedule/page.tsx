import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScheduleForm from "@/components/schedule-form"

export default function Schedule() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">Schedule a Consultation</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take the first step toward transforming your home. Fill out the form below to schedule a complimentary
              consultation with our design team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <ScheduleForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
