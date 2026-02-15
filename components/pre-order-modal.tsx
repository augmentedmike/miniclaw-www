"use client"

import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

interface PreOrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  if (!isOpen) return null

  const depositLink = process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_LINK
  const fullPaymentLink = process.env.NEXT_PUBLIC_STRIPE_FULL_PAYMENT_LINK

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-2xl font-bold text-foreground">Pre-Order ClawMini</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose your payment option. Either way, you're first in line when we ship Spring 2026.
        </p>

        <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-foreground">
            <strong>Includes white glove setup:</strong> We'll join you on video during unboxing to make sure everything works perfectly on day one.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* 50% Deposit Option */}
          <div className="flex flex-col rounded-xl border-2 border-primary bg-card p-6">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Most Popular
            </div>

            <h4 className="text-lg font-semibold text-foreground">50% Deposit</h4>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">$999.50</span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pay remaining $999.50 before we ship
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">Reserve your spot in line</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">Lower upfront commitment</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">Pay rest before shipping</span>
              </li>
            </ul>

            <Button
              size="lg"
              className="mt-6 w-full"
              asChild
              disabled={!depositLink}
            >
              <a href={depositLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $999.50 Deposit
              </a>
            </Button>
          </div>

          {/* Full Payment Option */}
          <div className="flex flex-col rounded-xl border border-border/40 bg-card p-6">
            <div className="mb-4 h-7" /> {/* Spacer to align with other card */}

            <h4 className="text-lg font-semibold text-foreground">Full Payment</h4>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">$1,999</span>
              <span className="text-sm text-muted-foreground">today</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pay once, you're done
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">One simple transaction</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">No payment reminders</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">Same priority shipping</span>
              </li>
            </ul>

            <Button
              size="lg"
              variant="outline"
              className="mt-6 w-full"
              asChild
              disabled={!fullPaymentLink}
            >
              <a href={fullPaymentLink || "#"} target="_blank" rel="noopener noreferrer">
                Pay $1,999 Full
              </a>
            </Button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All pre-orders are fully refundable until we ship. Estimated shipping: Spring 2026.
        </p>
      </div>
    </div>
  )
}
