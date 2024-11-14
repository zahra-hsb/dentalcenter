import dbConnect from "@/lib/dbconnect";
import BlogsModel from "@/lib/models/BlogsModel";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";

export async function DELETE(request) {
    try {
        const { ids } = await request.json();

        if (!Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json(
                { message: 'آرایه‌ای از شناسه‌های معتبر ارائه نشده است.', success: false },
                { status: 400 }
            );
        }
        const validObjectIds = ids.map(id => id._id);

        await dbConnect();
        const result = await BlogsModel.deleteMany({ _id: { $in: validObjectIds } });


        revalidatePath('/account/dashboard/blog', 'page');
        return NextResponse.json(
            { message: `${result.deletedCount} وبلاگ با موفقیت حذف شد.`, success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting admins:', error);
        return NextResponse.json(
            { message: 'خطایی در حذف وبلاگ ها رخ داد.', success: false },
            { status: 500 }
        );
    }
}