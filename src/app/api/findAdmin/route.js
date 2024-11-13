import dbConnect from "@/lib/dbconnect";  
import AdminsModel from "@/lib/models/AdminsModel";  
import { NextResponse } from "next/server";  
import bcrypt from 'bcrypt';  

export async function POST(req) {  
    try {  
        const { username, password } = await req.json();  

        if (!username || !password) {  
            return NextResponse.json({ error: "Username and password are required." }, { status: 400 });  
        }  

        await dbConnect();  

        const user = await AdminsModel.findOne({ username }).select('+password');  

        if (!user) {  
            return NextResponse.json({ isExistUser: false, message: "User not found" });
        }  

        if (!user.password) {  
          return NextResponse.json({ isExistUser: false, message: "Password not found for this user" }); 
        }  

        const isCorrectPassword = await bcrypt.compare(password, user.password);  
        console.log('pass: ', isCorrectPassword);  

        if (isCorrectPassword) {  
            return NextResponse.json({ isExistUser: true, success: true });  
        } else {  
            return NextResponse.json({ isExistUser: true, success: false, message: "Incorrect password" });
        }  

    } catch (error) {  
        console.error("Login error:", error);  
        return NextResponse.json({ error: "An error occurred." }, { status: 500 });  
    }  
}