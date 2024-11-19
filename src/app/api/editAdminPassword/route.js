import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        await dbConnect()
        console.log(data);

        const editedAdmin = await AdminsModel.updateOne({ _id: data.id }, {
            $set: {
                password: data.password
            }
        })

        if (editedAdmin === null) {
            return NextResponse.json({ message: 'کاربری با این اطلاعات در سیستم موجود نمیباشد.', isExist: false })
        }
        return NextResponse.json({ message: 'رمزعبور کاربر با موفقیت ویرایش شد.', isEdited: true })
    } catch (error) {
        return NextResponse.json({ message: `به دلیل باگ رمزعبور کاربر به روز نشد. ${error}`, isEdited: false })
    }
}