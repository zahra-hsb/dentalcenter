'use client'
import useStore from "@/customHooks/store"
import { useEffect, useState } from "react"
import { BiUserCircle } from "react-icons/bi"


const UserInfo = () => {
    const { userInfo } = useStore()
    return (
        <>
            <div className="flex gap-3 items-center">
                <BiUserCircle className="text-green" size={25} />
                <p className="text-white">{userInfo.name}</p>
            </div>
        </>
    )
}

export default UserInfo