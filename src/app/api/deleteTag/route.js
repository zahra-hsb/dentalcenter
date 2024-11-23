import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";
import BlogsModel from "@/lib/models/BlogsModel";

export async function DELETE(request) {
    try {
        const { title } = await request.json()
        console.log('id: ', title);
        await dbConnect()
        await BlogsModel.deleteOne({ tags: title })
        revalidatePath('/account/dashboard/blog/add', 'page')
        revalidatePath('/account/dashboard/blog/edit', 'page')
        return NextResponse.json({ message: 'برچسب مورد نظر حذف شد.', isDeleted: true })
    } catch (error) {
        return NextResponse.json({ message: 'برچسب مورد نظر به دلیل باگ حذف نشد.', isDeleted: false })
    }
}