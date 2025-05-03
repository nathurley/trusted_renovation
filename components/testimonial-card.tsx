import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-gold fill-gold" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-medium text-charcoal">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  )
}
