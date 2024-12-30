import dbConnect from "@/lib/dbconnect";
import BlogsModel from "@/lib/models/BlogsModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await dbConnect()

        const blogs = await BlogsModel.find()
        console.log('blogs: ', blogs);
        revalidatePath('/account/dashboard/blog', 'page')
        return NextResponse.json(blogs)
    } catch (error) {
        return NextResponse.json({ message: error })

    }
}