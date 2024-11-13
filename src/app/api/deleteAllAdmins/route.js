


import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";

export async function DELETE(request) {
    try {
        await dbConnect()
        await AdminsModel.deleteMany({ 'tel': { $ne: '09121403992' } })
        revalidatePath('/account/dashboard/admins', 'page')
        return NextResponse.json({ message: 'ادمین های مورد نظر حذف شدند.', isDeleted: true })
    } catch (error) {
        return NextResponse.json({ message: 'ادمین های مورد نظر به دلیل باگ حذف نشدند.', isDeleted: false })
    }
}