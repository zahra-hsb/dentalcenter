'use client'
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return (
        <>
            <div className="flex flex-col gap-5 items-center justify-center h-screen">
                <h1 className="text-9xl">4
                    <span className="text-green ">0</span>
                    4
                </h1>
                <p className="text-xl">صفحه مورد نظر یافت نشد.</p>
                <button onClick={() => router.back()} className="rounded-lg border-2 border-green px-4 py-2 hover:bg-green hover:text-white">
                    بازگشت
                </button>
            </div>
        </>
    )
}

export default NotFound