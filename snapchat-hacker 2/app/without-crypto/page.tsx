"use client"

import { ArrowLeft, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { MatrixRain } from "@/components/matrix-rain"

export default function WithoutCryptoPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "single"

  const getPlanAmount = () => {
    switch (plan) {
      case "single":
        return "39€"
      case "triple":
        return "89€"
      case "five":
        return "129€"
      default:
        return "39€"
    }
  }

  return (
    <div className="min-h-screen bg-black text-[#1DB954]">
      <MatrixRain />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/payment">
          <Button variant="ghost" className="text-[#1DB954] hover:text-[#1DB954]/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Payment Methods
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/50 border-[#1DB954]/50 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#1DB954]">Regular Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {/* Order Info */}
                <div className="text-center">
                  <div className="text-white/80 mb-2">Order #: X4FV24</div>
                  <div className="text-2xl font-bold text-white mb-4">Amount to Pay: {getPlanAmount()}</div>
                </div>

                <div className="flex justify-center">
                  <CreditCard className="h-24 w-24 text-[#1DB954] opacity-50" />
                </div>

                <div className="text-center text-white/80">
                  <p>You will be redirected to our payment processor to complete your purchase.</p>
                </div>

                <Button
                  size="lg"
                  className="bg-[#1DB954] text-black hover:bg-[#1DB954]/90"
                  onClick={() => (window.location.href = "https://example.com/payment-processor")}
                >
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

