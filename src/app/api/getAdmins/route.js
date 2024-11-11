import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await dbConnect()

        const admins = await AdminsModel.find()
        revalidatePath('/account/dashboard/admins', 'page')
        return NextResponse.json(admins)
    } catch (error) {
        return NextResponse.json({ message: error })

    }
}