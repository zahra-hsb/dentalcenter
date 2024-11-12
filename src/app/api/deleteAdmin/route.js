import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";

export async function DELETE(request) {
    try {
        const { id } = await request.json()
        console.log('id: ', id);
        await dbConnect()
        await AdminsModel.deleteOne({ _id: new ObjectId(id) })
        revalidatePath('/account/dashboard/admins', 'page')
        return NextResponse.json({ message: 'ادمین مورد نظر حذف شد.', isDeleted: true })
    } catch (error) {
        return NextResponse.json({ message: 'ادمین مورد نظر به دلیل باگ حذف نشد.', isDeleted: false })
    }
}