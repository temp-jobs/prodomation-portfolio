"use client"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12 md:p-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's automate your operations and unlock new growth opportunities.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
        >
          Let's Automate Your Business
        </Button>
      </div>
    </section>
  )
}
