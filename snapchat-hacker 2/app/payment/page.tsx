"use client"

import { useState } from "react"
import { ArrowLeft, Bitcoin, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { MatrixRain } from "@/components/matrix-rain"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedMethod, setSelectedMethod] = useState<"crypto" | "other" | null>(null)
  const plan = searchParams.get("plan")

  const getPlanDetails = () => {
    switch (plan) {
      case "single":
        return { name: "1 SnapCrack", price: "39€" }
      case "triple":
        return { name: "3 SnapCracks", price: "89€", savings: "Save 50€" }
      case "five":
        return { name: "5 SnapCracks", price: "129€", savings: "Save 66€" }
      default:
        return { name: "Unknown Plan", price: "?" }
    }
  }

  const planDetails = getPlanDetails()

  const handlePayment = (method: "crypto" | "other") => {
    if (method === "crypto") {
      router.push(`/crypto?plan=${plan}`)
    } else {
      router.push(`/without-crypto?plan=${plan}`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-[#1DB954]">
      <MatrixRain />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/buy">
          <Button variant="ghost" className="text-[#1DB954] hover:text-[#1DB954]/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Packages
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/50 border-[#1DB954]/50 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#1DB954]">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{planDetails.name}</h3>
                  {planDetails.savings && <Badge className="bg-[#1DB954] text-black mt-2">{planDetails.savings}</Badge>}
                </div>
                <span className="text-2xl font-bold text-white">{planDetails.price}</span>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-center mb-8">Select Payment Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className={`bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all cursor-pointer
                ${selectedMethod === "crypto" ? "border-[#1DB954]" : ""}`}
              onClick={() => setSelectedMethod("crypto")}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Bitcoin className="h-12 w-12 text-[#1DB954]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1DB954] mb-2">Pay with Crypto</h3>
                    <p className="text-white/80">Bitcoin, Ethereum, and other cryptocurrencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all cursor-pointer
                ${selectedMethod === "other" ? "border-[#1DB954]" : ""}`}
              onClick={() => setSelectedMethod("other")}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <CreditCard className="h-12 w-12 text-[#1DB954]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1DB954] mb-2">Pay without Crypto</h3>
                    <p className="text-white/80">Credit Card, PayPal, and other methods</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {selectedMethod && (
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-[#1DB954] text-black hover:bg-[#1DB954]/90 min-w-[200px]"
                onClick={() => handlePayment(selectedMethod)}
              >
                Continue to Payment
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

