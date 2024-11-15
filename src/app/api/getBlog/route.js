import dbConnect from "@/lib/dbconnect"
import { NextResponse } from "next/server"
import { ObjectId } from 'mongodb';
import BlogsModel from "@/lib/models/BlogsModel";

export async function POST(req) {
    try {
        const { id } = await req.json()
        console.log('id: ', id);
        await dbConnect()
        const res = await BlogsModel.findOne({ _id: new ObjectId(id) })
        console.log('result', res);
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json(error)

    }
}