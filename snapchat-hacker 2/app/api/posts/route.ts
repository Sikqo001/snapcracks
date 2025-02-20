import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import cloudinary from "@/lib/cloudinary"

export async function POST(req: Request) {
  try {
    const { image, megaLink, tutorialLink, caption } = await req.json()

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "snapcrack",
    })

    const client = await clientPromise
    const db = client.db("snapcrack")

    const post = {
      image: uploadResponse.secure_url,
      megaLink,
      tutorialLink,
      caption,
      date: new Date(),
    }

    await db.collection("posts").insertOne(post)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json({ error: "Error creating post" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("snapcrack")

    const posts = await db.collection("posts").find({}).sort({ date: -1 }).toArray()

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json({ error: "Error fetching posts" }, { status: 500 })
  }
}

