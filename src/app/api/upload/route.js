import { S3 } from "aws-sdk"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file")

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const fileName = `${file.name.replace(/\s/g, "-")}`

    const s3 = new S3({
      accessKeyId: process.env.LIARA_ACCESS_KEY,
      secretAccessKey: process.env.LIARA_SECRET_KEY,
      endpoint: process.env.LIARA_ENDPOINT,
      region: process.env.LIARA_REGION || "default",
    })

    const params = {
      Bucket: process.env.LIARA_BUCKET_NAME || "ecomerce",
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    }

    const upload = await s3.upload(params).promise()

    const url = `${process.env.LIARA_BUCKET_URL || "https://ecomerce.storage.iran.liara.space"}/${fileName}`

    return NextResponse.json({
      success: true,
      url: url,
      key: fileName,
    })
  } catch (error) {
    console.error("Error uploading to S3:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

