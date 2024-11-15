import { S3 } from "aws-sdk";
import { useState } from "react";
import Alert from "../Alert";

const UploadFile = ({ accessKeyId, secretAccessKey, endpoint, bucket, onUpload, handleFileChange, file, error, setError, setUploadLink, setPermanentLink, handleUpload }) => {    

    // const handleUpload = async () => {
            
    // };
    return (
        <>
            <input
                onClick={handleUpload}
                name={'blogImg'}
                id={'blogImg'}
                onChange={(e) => handleFileChange(e)}
                type={'file'} />
        </>
    )
}

export default UploadFile