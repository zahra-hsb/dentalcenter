import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        await dbConnect()
        console.log(data);

        const editedAdmin = await AdminsModel.updateOne({ tel: data.tel }, {
            $set: {
                name: data.name,
                tel: data.tel,
                username: data.username
            }
        })

        if (!editedAdmin) {
            return NextResponse.json({ message: 'کاربری با این اطلاعات در سیستم موجود نمیباشد.' })
        }
        return NextResponse.json({ message: 'اطلاعات کاربر با موفقیت ویرایش شد.' })
    } catch (error) {
        return NextResponse.json({ message: `به دلیل باگ اطلاعات کاربر به روز نشد. ${error}` })
    }
}