'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { BiHide, BiShow } from "react-icons/bi"
import { MdPassword } from "react-icons/md"

const PassInput = ({ register, errors }) => {
    const [isShowPass, setShowPass] = useState(false)
    function handleShowPass() {
        setShowPass(!isShowPass)
    }
    return (
        <>
            <div className="relative w-full">
                <input {...register('password', { required: true })} id="password" type={isShowPass ? 'text' : "password"} placeholder="رمز عبور" className="bg-transparent py-2 pr-10 pl-3 outline-none border-b-2 w-full border-b-green" />
                <span className="absolute right-3 top-3">
                    <MdPassword size={20} className="text-green" />
                </span>
                <span onClick={handleShowPass} className="absolute left-3 top-3 cursor-pointer">
                    {isShowPass ? <BiShow size={20} className="text-green" /> :
                        <BiHide size={20} className="text-green" />}
                </span>
                {errors.password && <span className="text-red-500 text-sm">رمز عبور باید حداقل 8 کاراکتر باشد</span>}
            </div>
        </>
    )
}

export default PassInput