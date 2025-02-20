"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, Plus, ImageIcon, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MatrixRain } from "@/components/matrix-rain"

interface Post {
  id: string
  image: string
  megaLink: string
  date: string
}

export default function AdminPosts() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState({
    image: "",
    megaLink: "",
  })
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Load posts from localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem("snapcrack-posts")
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    }
  }, [])

  // Save posts to localStorage
  useEffect(() => {
    localStorage.setItem("snapcrack-posts", JSON.stringify(posts))
  }, [posts])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your actual password
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password")
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        setNewPost((prev) => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.image || !newPost.megaLink) {
      alert("Please fill in all fields")
      return
    }

    const post: Post = {
      id: Date.now().toString(),
      ...newPost,
      date: new Date().toISOString().split("T")[0],
    }

    setPosts((prev) => [post, ...prev])
    setNewPost({ image: "", megaLink: "" })
    setImagePreview(null)
  }

  if (!isAuthenticated) {
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

          <Card className="max-w-md mx-auto bg-black/50 border-[#1DB954]/50">
            <CardHeader>
              <h1 className="text-2xl font-bold text-center text-[#1DB954]">Admin Access</h1>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black border-[#1DB954]/50 text-white"
                />
                <Button type="submit" className="w-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

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

        <Card className="bg-black/50 border-[#1DB954]/50 mb-8">
          <CardHeader>
            <h1 className="text-2xl font-bold text-[#1DB954]">Create New Post</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <label className="block mb-2 text-white">Image</label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image-upload")?.click()}
                      className="border-[#1DB954]/50 text-[#1DB954] hover:bg-[#1DB954]/10"
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Choose Image
                    </Button>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="max-w-[200px] rounded-lg border border-[#1DB954]/50"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-white">Mega Link</label>
                  <div className="flex gap-2">
                    <Input
                      value={newPost.megaLink}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, megaLink: e.target.value }))}
                      placeholder="Enter Mega link"
                      className="bg-black border-[#1DB954]/50 text-white"
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="bg-[#1DB954] text-black hover:bg-[#1DB954]/90">
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="bg-black/50 border-[#1DB954]/50">
              <CardContent className="p-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post"
                  className="w-full aspect-[4/5] object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 text-white/80">
                  <LinkIcon className="h-4 w-4 text-[#1DB954]" />
                  <span className="truncate">{post.megaLink}</span>
                </div>
                <div className="text-white/60 text-sm mt-2">Posted on {post.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

