import axios from "axios";
import { S3Client } from "@aws-sdk/client-s3";

export async function getAllAdmins(setItems, errorComp) {
    try {
        const response = await axios.get('/api/getAdmins')
        setItems(response.data)
    } catch (error) {
        errorComp(error)
    }
}

export function errorComp(message) {
    return <> <div className="text-white bg-red-600 p-5 rounded">
        {message}
    </div> </>
}

export const client = new S3Client({
    region: "Iran",
    endpoint: process.env.LIARA_ENDPOINT || "",
    credentials: {
        accessKeyId: process.env.LIARA_ACCESS_KEY || "",
        secretAccessKey: process.env.LIARA_SECRET_KEY || "",
    },
});