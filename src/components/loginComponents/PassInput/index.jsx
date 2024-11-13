'use client'

import { useState } from "react"
import { BiHide, BiShow } from "react-icons/bi"
import { MdPassword } from "react-icons/md"

const PassInput = () => {
    const [isShowPass, setShowPass] = useState(false)

    function handleShowPass() {
        setShowPass(!isShowPass)
    }
    return (
        <>
            <div className="relative w-full">

                <input type={isShowPass ? 'text' : "password"} placeholder="رمز عبور" className="bg-transparent py-2 pr-10 pl-3 outline-none border-b-2 w-full border-b-green" />
                <span className="absolute right-3 top-3">
                    <MdPassword size={20} className="text-green" />
                </span>
                <span onClick={handleShowPass} className="absolute left-3 top-3 cursor-pointer">
                    {!isShowPass ? <BiShow size={20} className="text-green" /> :
                    <BiHide size={20} className="text-green" />}
                </span>
            </div>
        </>
    )
}

export default PassInput