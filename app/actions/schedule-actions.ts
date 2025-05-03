"use server"

import { revalidatePath } from "next/cache"
import { google } from "googleapis"
import { supabaseAdmin, type Appointment } from "@/lib/supabase"

// Set up Google Calendar API
const calendar = google.calendar({
  version: "v3",
  auth: new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/calendar"],
  ),
})

export async function scheduleAppointment(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const projectType = formData.get("projectType") as string
    const date = formData.get("date") as string
    const timeSlot = formData.get("time") as string
    const message = formData.get("message") as string
    const source = formData.get("source") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !projectType || !date || !timeSlot) {
      return { success: false, error: "Missing required fields" }
    }

    // 1. Create or update customer in Supabase
    const { data: customerData, error: customerError } = await supabaseAdmin
      .from("customers")
      .select("id")
      .eq("email", email)
      .maybeSingle()

    let customerId: string

    if (customerData) {
      // Update existing customer
      customerId = customerData.id
      await supabaseAdmin
        .from("customers")
        .update({
          name: `${firstName} ${lastName}`,
          phone,
        })
        .eq("id", customerId)
    } else {
      // Create new customer
      const { data: newCustomer, error: newCustomerError } = await supabaseAdmin
        .from("customers")
        .insert({
          name: `${firstName} ${lastName}`,
          email,
          phone,
        })
        .select("id")
        .single()

      if (newCustomerError) {
        console.error("Error creating customer:", newCustomerError)
        return { success: false, error: "Failed to create customer record" }
      }

      customerId = newCustomer.id
    }

    // 2. Create appointment in Supabase
    const appointment: Omit<Appointment, "id" | "created_at"> = {
      customer_id: customerId,
      date,
      time_slot: timeSlot,
      project_type: projectType,
      message: message || undefined,
      source: source || undefined,
      status: "pending",
    }

    const { data: appointmentData, error: appointmentError } = await supabaseAdmin
      .from("appointments")
      .insert(appointment)
      .select("id")
      .single()

    if (appointmentError) {
      console.error("Error creating appointment:", appointmentError)
      return { success: false, error: "Failed to create appointment" }
    }

    // 3. Create Google Calendar event
    try {
      // Map time slots to actual times
      const timeMap: Record<string, { start: string; end: string }> = {
        morning: { start: "09:00", end: "12:00" },
        afternoon: { start: "12:00", end: "15:00" },
        evening: { start: "15:00", end: "18:00" },
      }

      const timeRange = timeMap[timeSlot as keyof typeof timeMap]
      const startDateTime = `${date}T${timeRange.start}:00`
      const endDateTime = `${date}T${timeRange.end}:00`

      const event = {
        summary: `Renovation Consultation - ${firstName} ${lastName}`,
        description: `Project Type: ${projectType}\nPhone: ${phone}\nEmail: ${email}\n\nNotes: ${message || "None"}`,
        start: {
          dateTime: startDateTime,
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: endDateTime,
          timeZone: "America/Los_Angeles",
        },
        attendees: [{ email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 60 },
          ],
        },
      }

      const googleEvent = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: event,
        sendUpdates: "all",
      })

      // Update appointment with Google Calendar event ID
      if (googleEvent.data.id) {
        await supabaseAdmin
          .from("appointments")
          .update({ google_event_id: googleEvent.data.id })
          .eq("id", appointmentData.id)
      }
    } catch (googleError) {
      console.error("Error creating Google Calendar event:", googleError)
      // We'll still return success even if Google Calendar fails
      // The appointment is still created in Supabase
    }

    revalidatePath("/schedule")
    return { success: true, appointmentId: appointmentData.id }
  } catch (error) {
    console.error("Error in scheduleAppointment:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return { success: false, error: "Missing required fields" }
    }

    // Store contact form submission in Supabase
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name,
      email,
      subject,
      message,
      status: "new",
    })

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, error: "Failed to submit contact form" }
    }

    revalidatePath("/contact")
    return { success: true }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
