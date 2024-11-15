import dbConnect from "@/lib/dbconnect"
import BlogsModel from "@/lib/models/BlogsModel"
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const data = await req.json()
        const body = Object.fromEntries(data);
        const file = body.picture
        const fileName = `https://ecomerce.storage.iran.liara.space/${Date.now()}-${randomUUID()}-${file.name}`;

        const buffer = Buffer.from(await file.arrayBuffer());
        //optmize picture size
        const optimizedImageBuffer = await sharp(buffer)
            .resize({ width: 1200 })
            .toFormat("webp", { quality: 80 })
            .rotate()
            .toBuffer();

        const uploadParams = {
            Bucket: process.env.LIARA_BUCKET_NAME,
            Key: `${fileName}`,
            Body: optimizedImageBuffer,
            ContentType: file.type,
        };
        const res = await client.send(new PutObjectCommand(uploadParams));
        console.log(res);
        await dbConnect()
        const blog = new BlogsModel({ title: data.title, blogImg: fileName, tags: data.tags, blogContent: data.blogContent, date: data.date, selected: data.selected })
        blog.save()
        return NextResponse.json({ message: 'وبلاگ شما با موفقیت ذخیره شد.', isSaved: true })
    } catch (error) {
        return NextResponse.json({ message: 'وبلاگ شما متاسفانه ذخیره نشد.', error, isSaved: false })
    }
} 