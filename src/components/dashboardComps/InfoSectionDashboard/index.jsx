'use client'

import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import InfoBox from "../InfoBox"

const InfoSectionDashboard = () => {
    const [blogsCount, setBlogsCount] = useState(0)
    const [adminsCount, setAdminsCount] = useState(0)
    const getAdminsFunc = useCallback(async () => {
        try {
            const res = await axios.get('/api/getBlogs')
            const res1 = await axios.get('/api/getAdmins')
            setBlogsCount(res.data.length)
            setAdminsCount(res1.data.length)
        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        getAdminsFunc()
    }, [])
    return (
        <>
            <div className="py-10 flex flex-col sm:flex-row gap-5">
                <InfoBox info={blogsCount} title={'تعداد وبلاگ ها'} />
                <InfoBox info={adminsCount} title={'تعداد ادمین ها'} />
            </div>
        </>
    )
}

export default InfoSectionDashboard