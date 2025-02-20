"use client"

import { ArrowLeft, Download, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MatrixRain } from "@/components/matrix-rain"

const leaks = [
  {
    id: 1,
    title: "Account Cracked Successfully",
    date: "2024-02-20",
    image: "/placeholder.svg?height=500&width=400",
    status: "Featured",
  },
  {
    id: 2,
    title: "Multiple Accounts Recovered",
    date: "2024-02-19",
    image: "/placeholder.svg?height=500&width=400",
    status: "Featured",
  },
  {
    id: 3,
    title: "Premium Account Access Gained",
    date: "2024-02-18",
    image: "/placeholder.svg?height=500&width=400",
    status: "Featured",
  },
]

export default function LeaksPage() {
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

        <div className="flex items-center justify-center gap-3 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center">SnapCrack Leaks</h1>
          <Badge className="bg-red-500/20 text-red-500 border-red-500/50">NSFW</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaks.map((leak) => (
            <Card key={leak.id} className="bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all">
              <CardContent className="p-4">
                <div className="relative">
                  <img
                    src={leak.image || "/placeholder.svg"}
                    alt={leak.title}
                    className="w-full aspect-[4/5] object-cover rounded-lg mb-4"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#1DB954] text-black">{leak.status}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-[#1DB954] text-black hover:bg-[#1DB954]/90">
                    <Download className="mr-2 h-4 w-4" />
                    Get Mega
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954]/10">
                    <Book className="mr-2 h-4 w-4" />
                    Tutorial
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

