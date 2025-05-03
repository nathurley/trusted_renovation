import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a Supabase client for browser-side usage (with anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a Supabase client with service role key for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Types for our database tables
export type Customer = {
  id?: string
  created_at?: string
  name: string
  email: string
  phone: string
}

export type Appointment = {
  id?: string
  created_at?: string
  customer_id: string
  date: string
  time_slot: string
  project_type: string
  message?: string
  source?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  google_event_id?: string
}
