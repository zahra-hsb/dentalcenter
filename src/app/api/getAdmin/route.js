import dbConnect from "@/lib/dbconnect"
import AdminsModel from "@/lib/models/AdminsModel"
import { NextResponse } from "next/server"
import { ObjectId } from 'mongodb';

export async function POST(req) {
    try {
        const { id } = await req.json()
        console.log('id: ', id);
        await dbConnect()
        const res = await AdminsModel.findOne({ _id: new ObjectId(id) })
        console.log('result', res);
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json(error)

    }
}