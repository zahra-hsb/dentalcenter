import dbConnect from "@/lib/dbconnect"
import { NextResponse } from "next/server"
import { ObjectId } from 'mongodb';
import BlogsModel from "@/lib/models/BlogsModel";

export async function POST(req) {
    try {
        const body = await req.json()
        console.log("body: ", body)
        if (!body.id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }
        console.log('id: ', body.id);
        await dbConnect()
        // const res = await BlogsModel.findOne({ _id: new ObjectId(body.id) })
        // console.log('result', res);
        
        // if (!res) {
            const result = await BlogsModel.findOne({ _id: body.id })
            console.log("result of find blog: ", result)
            if (!result) {
                return NextResponse.json({ error: "Blog not found" }, { status: 404 });
            }
            return NextResponse.json(result)
        // }

        // return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json(error)

    }
}