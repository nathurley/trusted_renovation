"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Loader2 } from "lucide-react"
import { scheduleAppointment } from "@/app/actions/schedule-actions"
import { useToast } from "@/hooks/use-toast"

export default function ScheduleForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // Add the date in ISO format
    if (date) {
      formData.set("date", date.toISOString().split("T")[0])
    }

    try {
      const result = await scheduleAppointment(formData)

      if (result.success) {
        setIsSubmitted(true)
        toast({
          title: "Appointment scheduled",
          description: "We'll contact you soon to confirm your appointment.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Error scheduling appointment",
          description: result.error || "Please try again later.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error scheduling appointment",
        description: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your consultation request has been received. One of our design consultants will contact you within 24 hours to
          confirm your appointment. We've also sent you a calendar invitation to your email.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-charcoal text-charcoal hover:bg-charcoal/10"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            required
            className="border-gray-300 focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input id="lastName" name="lastName" required className="border-gray-300 focus:border-gold focus:ring-gold" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="border-gray-300 focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="border-gray-300 focus:border-gold focus:ring-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-medium text-gray-700">
          Project Type <span className="text-red-500">*</span>
        </label>
        <Select name="projectType" required>
          <SelectTrigger className="border-gray-300 focus:border-gold focus:ring-gold">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
            <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
            <SelectItem value="wholeHome">Whole Home Renovation</SelectItem>
            <SelectItem value="addition">Home Addition</SelectItem>
            <SelectItem value="outdoor">Outdoor Living Space</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal border-gray-300 focus:border-gold focus:ring-gold ${
                  !date && "text-muted-foreground"
                }`}
                type="button"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable dates in the past and Sundays
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  return date < today || date.getDay() === 0
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <Select name="time" required>
            <SelectTrigger className="border-gray-300 focus:border-gold focus:ring-gold">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12pm - 3pm)</SelectItem>
              <SelectItem value="evening">Evening (3pm - 6pm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Project Details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, budget, and timeline..."
          className="border-gray-300 focus:border-gold focus:ring-gold min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="source" className="text-sm font-medium text-gray-700">
          How did you hear about us?
        </label>
        <Select name="source">
          <SelectTrigger className="border-gray-300 focus:border-gold focus:ring-gold">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="google">Google Search</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="magazine">Magazine</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-charcoal" disabled={isSubmitting || !date}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Schedule Consultation"
        )}
      </Button>
    </form>
  )
}
