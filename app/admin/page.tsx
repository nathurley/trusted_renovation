import { redirect } from "next/navigation"
import { supabaseAdmin } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import Link from "next/link"

// This is a server component that will fetch appointments from Supabase
export default async function AdminDashboard() {
  // Check if user is authenticated (this is a simple check, you might want to implement proper auth)
  const {
    data: { session },
  } = await supabaseAdmin.auth.getSession()

  if (!session) {
    redirect("/admin/login")
  }

  // Fetch appointments with customer information
  const { data: appointments, error } = await supabaseAdmin
    .from("appointments")
    .select(`
      id,
      created_at,
      date,
      time_slot,
      project_type,
      status,
      customers (
        name,
        email,
        phone
      )
    `)
    .order("date", { ascending: false })

  if (error) {
    console.error("Error fetching appointments:", error)
    return <div>Error loading appointments</div>
  }

  // Fetch recent contact submissions
  const { data: contactSubmissions } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div className="min-h-screen bg-offwhite p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl text-charcoal">Admin Dashboard</h1>
          <form action="/auth/signout" method="post">
            <Button type="submit" variant="outline">
              Sign Out
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointments Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Upcoming Appointments</h2>

              {appointments && appointments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Time</th>
                        <th className="text-left py-3 px-4">Customer</th>
                        <th className="text-left py-3 px-4">Project</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{format(new Date(appointment.date), "MMM d, yyyy")}</td>
                          <td className="py-3 px-4">
                            {appointment.time_slot === "morning"
                              ? "9am - 12pm"
                              : appointment.time_slot === "afternoon"
                                ? "12pm - 3pm"
                                : "3pm - 6pm"}
                          </td>
                          <td className="py-3 px-4">
                            <div>{appointment.customers?.name}</div>
                            <div className="text-sm text-gray-500">{appointment.customers?.email}</div>
                          </td>
                          <td className="py-3 px-4">{appointment.project_type}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.status === "cancelled"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Link
                              href={`/admin/appointments/${appointment.id}`}
                              className="text-gold hover:text-gold/80"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No appointments found.</p>
              )}

              <div className="mt-6">
                <Link href="/admin/appointments">
                  <Button variant="outline">View All Appointments</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Submissions Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Recent Messages</h2>

              {contactSubmissions && contactSubmissions.length > 0 ? (
                <div className="space-y-4">
                  {contactSubmissions.map((submission) => (
                    <div key={submission.id} className="border-b pb-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{submission.subject}</h3>
                        <span className="text-xs text-gray-500">
                          {format(new Date(submission.created_at), "MMM d, yyyy")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {submission.name} ({submission.email})
                      </p>
                      <p className="text-sm mt-2 line-clamp-2">{submission.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No messages found.</p>
              )}

              <div className="mt-6">
                <Link href="/admin/messages">
                  <Button variant="outline">View All Messages</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
