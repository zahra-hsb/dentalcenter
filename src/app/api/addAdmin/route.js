import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        await dbConnect()
        const data = await req.json()
        const admin1 = data.username.toLowerCase()
        const adminIsExist = await AdminsModel.findOne({ tel: data.tel })

        if (adminIsExist === null) {
            const admin = new AdminsModel({ name: data.name, tel: data.tel, username: admin1, password: data.password, selected: false, mainAdmin: false })
            admin.save()

            
            return NextResponse.json({ message: 'ادمین شما با موفقیت اضافه شد.', isExist: false })
        }
        return NextResponse.json({ message: 'ادمین مورد نظر از قبل در سیستم ثبت شده است.', isExist: true })

    } catch (error) {
        return NextResponse.json({ err: error })
    }
}