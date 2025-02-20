"use client"

import { useState } from "react"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MatrixRain } from "@/components/matrix-rain"

export default function BuyPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-[#1DB954]">
      <MatrixRain />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/">
          <Button variant="ghost" className="text-[#1DB954] hover:text-[#1DB954]/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Package</h1>

        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Select the perfect package for your needs. Our most popular option offers the best value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Single */}
          <Card
            className={`bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all cursor-pointer
              ${selectedPlan === 0 ? "border-[#1DB954]" : ""}`}
            onClick={() => setSelectedPlan(0)}
          >
            <CardHeader>
              <CardTitle className="text-center">
                <span className="text-[#1DB954]">1 SnapCrack</span>
                <div className="text-3xl font-bold mt-4 text-white">39€</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Basic Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>3 Months Updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Core Features</span>
                </li>
              </ul>
              <Button className="w-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90">Select Package</Button>
            </CardContent>
          </Card>

          {/* Triple */}
          <Card
            className={`bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all cursor-pointer relative
              ${selectedPlan === 1 ? "border-[#1DB954]" : ""}`}
            onClick={() => setSelectedPlan(1)}
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-[#1DB954] text-black px-4">BEST VALUE</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-center">
                <span className="text-[#1DB954]">3 SnapCracks</span>
                <div className="text-3xl font-bold mt-4 text-white">89€</div>
                <div className="text-sm text-white/80">Save 50€</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Lifetime Updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Premium Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Private Discord Access</span>
                </li>
              </ul>
              <Button className="w-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90">Select Package</Button>
            </CardContent>
          </Card>

          {/* Five Pack */}
          <Card
            className={`bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all cursor-pointer
              ${selectedPlan === 2 ? "border-[#1DB954]" : ""}`}
            onClick={() => setSelectedPlan(2)}
          >
            <CardHeader>
              <CardTitle className="text-center">
                <span className="text-[#1DB954]">5 SnapCracks</span>
                <div className="text-3xl font-bold mt-4 text-white">129€</div>
                <div className="text-sm text-white/80">Save 66€</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>24/7 VIP Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Lifetime Updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>All Premium Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Private Discord Access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-[#1DB954]" />
                  <span>Priority Queue</span>
                </li>
              </ul>
              <Button className="w-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90">Select Package</Button>
            </CardContent>
          </Card>
        </div>

        {selectedPlan !== null && (
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#1DB954] text-black hover:bg-[#1DB954]/90 min-w-[200px]">
              Proceed to Payment
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

