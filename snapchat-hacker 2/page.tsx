"use client"

import { Ghost, Shield, Zap, Terminal, Download, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MatrixRain } from "@/components/matrix-rain"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-[#1DB954]">
      <MatrixRain />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex justify-center mb-4">
            <Badge className="bg-red-500/20 text-red-500 border-red-500/50">v3.5 LATEST VERSION</Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8">SNAPCRACK</h1>
          <p className="text-xl md:text-2xl text-center text-white/90 max-w-2xl mx-auto mb-8">
            {"Advanced Snapchat cracking toolkit with 99.9% success rate"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/buy">
              <Button size="lg" className="bg-[#1DB954] text-black hover:bg-[#1DB954]/90 min-w-[200px] text-lg">
                BUY NOW - 39€
              </Button>
            </Link>
            <Link href="/leaks">
              <Button
                variant="outline"
                size="lg"
                className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954]/10 min-w-[200px] text-lg"
              >
                <Terminal className="mr-2 h-4 w-4" />
                SnapCrack Leaks
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all">
            <CardContent className="p-6">
              <Ghost className="h-12 w-12 mb-4 text-[#1DB954]" />
              <h3 className="text-xl font-bold mb-2 text-[#1DB954]">Stealth Mode</h3>
              <p className="text-white/80">Undetectable operation with advanced cloaking technology.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 mb-4 text-[#1DB954]" />
              <h3 className="text-xl font-bold mb-2 text-[#1DB954]">Bypass Protection</h3>
              <p className="text-white/80">Advanced algorithms to bypass all security measures.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 mb-4 text-[#1DB954]" />
              <h3 className="text-xl font-bold mb-2 text-[#1DB954]">Fast Processing</h3>
              <p className="text-white/80">Crack accounts in seconds with our optimized engine.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-black/50 border-[#1DB954]/50 hover:border-[#1DB954] transition-all">
              <CardContent className="p-4">
                <div className="relative aspect-[4/5] mb-4">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Result preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#1DB954] text-black">Featured</Badge>
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

      {/* Footer */}
      <footer className="border-t border-[#1DB954]/20 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>{"Use responsibly // For educational purposes only"}</p>
        </div>
      </footer>
    </div>
  )
}

