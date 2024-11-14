import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";
import BlogsModel from "@/lib/models/BlogsModel";

export async function DELETE(request) {
    try {
        const { id } = await request.json()
        console.log('id: ', id);
        await dbConnect()
        await BlogsModel.deleteOne({ _id: new ObjectId(id) })
        revalidatePath('/account/dashboard/blog', 'page')
        return NextResponse.json({ message: 'وبلاگ مورد نظر حذف شد.', isDeleted: true })
    } catch (error) {
        return NextResponse.json({ message: 'وبلاگ مورد نظر به دلیل باگ حذف نشد.', isDeleted: false })
    }
}