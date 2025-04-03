import { S3Client } from "@aws-sdk/client-s3";

export const client = new S3Client({
    region: "Iran",
    endpoint: process.env.LIARA_ENDPOINT || "",
    credentials: {
        accessKeyId: process.env.LIARA_ACCESS_KEY || "",
        secretAccessKey: process.env.LIARA_SECRET_KEY || "",
    },
});