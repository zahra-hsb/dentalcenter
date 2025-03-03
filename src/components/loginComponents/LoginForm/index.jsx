'use client'

import Button from "@/components/globalComponents/Button";
import { FormProvider, useForm } from "react-hook-form"
import PassInput from "../PassInput";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import Alert from "@/components/globalComponents/Alert";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useStore } from "zustand";
import useStore from "@/customHooks/store";





const LoginForm = () => {
    const router = useRouter()
    const methods = useForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [message, setMessage] = useState({ message: '', color: '' })
    const { setUserInfo, userInfo, setUserId, userId } = useStore()

    async function onSubmit(data) {
        try {
            const response = await axios.post(`/api/findAdmin`, data)
            const res = response.data
            if (res.isExistUser === true && res.success === true) {
                // localStorage.setItem('user', res.user.mainAdmin)
                // TODO add user role: main admin to detect the dashboard
                console.log(res)
                if(res.user.mainAdmin) {
                    localStorage.setItem("user", "true")
                } else {
                    localStorage.setItem("user", "false")
                }
                setMessage({ message: 'در حال ریدایرکت...', color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    setUserId(res.user._id)
                    setUserInfo(res.user)
                    // router.push('/account/dashboard')
                }, 5000)
                reset()
            } else if (res.isExistUser === false) {
                setMessage({ message: 'کاربری با این نام کاربری در سیستم وجود ندارد.', color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
                reset()
            } else if (res.success === false) {
                setMessage({ message: 'رمز عبور وارد شده اشتباه است.', color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
                reset()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // const isLoggedin = localStorage.getItem('user')
        console.log('user id: ', userId)
        if(userId) {
            router.push('/account/dashboard')
            // console.log('redirecting...');
        }
    }, [userId, router])

    return (
        <>
            {/* <FormProvider {...methods}> */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-8">
                <div className="relative w-full">
                    <input type="username" {...register('username', { required: true })} id="username" placeholder="نام کاربری" className="bg-transparent py-2 pl-3 pr-10 outline-none border-b-2 w-full border-b-green relative" />
                    <span className="absolute right-3 top-3">
                        <FaUserAlt size={16} className="text-green" />
                    </span>
                    {errors.username && <span className="text-red-500 text-sm">نام ادمین الزامی است</span>}
                </div>
                <PassInput errors={errors} register={register} />
                <div className="flex flex-col items-center gap-3">
                    <button type="submit" className={'flex items-center justify-center pb-3 pt-2 w-full text-green text-nowrap min-w-24 bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold py-1 rounded-lg relative group overflow-hidden hover:text-white'}>
                        <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>

                        ورود به پنل مدیریت
                    </button>
                    <button className="underline hover:text-green" onClick={() => router.push('/')}>
                        بازگشت
                    </button>
                </div>
                <p className="text-gray-500 text-sm">
                    رمز خود را فراموش کردید؟
                    <Link className="text-green mr-1" href={'#'}>بازگردانی رمز</Link>
                </p>
            </form>
            {/* </FormProvider> */}
            <Alert message={message} />
        </>
    )
}

export default LoginForm