"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/schedule-actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Error sending message",
          description: result.error || "Please try again later.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
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
        <h3 className="font-serif text-2xl text-charcoal mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-charcoal text-charcoal hover:bg-charcoal/10"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <Input id="name" name="name" required className="border-gray-300 focus:border-gold focus:ring-gold" />
        </div>
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
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <Input id="subject" name="subject" required className="border-gray-300 focus:border-gold focus:ring-gold" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="border-gray-300 focus:border-gold focus:ring-gold min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-charcoal" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
