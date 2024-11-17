import dbConnect from "@/lib/dbconnect";
import BlogsModel from "@/lib/models/BlogsModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        await dbConnect()
        console.log(data);

        const editedBlog = await BlogsModel.updateOne({ _id: data.id }, {
            $set: {
                title: data.title,
                blogImg: data.blogImg,
                tags: data.tags,
                blogContent: data.blogContent,
                summary: data.summary
            }
        })

        revalidatePath('/blogs/[slug]', 'page')

        if (!editedBlog) {
            return NextResponse.json({ message: 'وبلاگی با این اطلاعات در سیستم موجود نمیباشد.' })
        }
        return NextResponse.json({ message: 'وبلاگ مورد نظر با موفقیت ویرایش شد.', success: true })
    } catch (error) {
        return NextResponse.json({ message: `به دلیل باگ وبلاگ مورد نظر به روزرسانی نشد. ${error}`, success: false })
    }
}