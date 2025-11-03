"use client"
import { Card } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Prodomation transformed our operations completely. They delivered on time and exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechVenture Inc.",
    },
    {
      quote: "The team is professional, innovative, and truly understands business automation. Highly recommended!",
      author: "Michael Chen",
      company: "GlobalTrade Solutions",
    },
    {
      quote: "Working with Prodomation was a game-changer. Our costs dropped by 40% while productivity soared.",
      author: "Emma Rodriguez",
      company: "Digital Dynamics",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">What Our Clients Say</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real results from real businesses we've worked with.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
