import dbConnect from "@/lib/dbconnect"
import BlogsModel from "@/lib/models/BlogsModel"
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()

        await dbConnect()

        const blog = new BlogsModel(data)
        blog.save()
        return NextResponse.json({ message: 'وبلاگ شما با موفقیت ذخیره شد.', isSaved: true })
    } catch (error) {
        return NextResponse.json({ message: 'وبلاگ شما متاسفانه ذخیره نشد.', error, isSaved: false })
    }
} 