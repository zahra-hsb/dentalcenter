import dbConnect from "@/lib/dbconnect";
import AdminsModel from "@/lib/models/AdminsModel";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await dbConnect()

        const admins = await AdminsModel.find()

        return NextResponse.json(admins)
    } catch (error) {
        return NextResponse.json({ message: error })

    }
}