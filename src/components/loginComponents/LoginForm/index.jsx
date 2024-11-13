'use client'

import Button from "@/components/globalComponents/Button";
import { FormProvider, useForm } from "react-hook-form"
import PassInput from "../PassInput";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";

const LoginForm = () => {
    const methods = useForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    function onSubmit(data) {
        console.log(data);
    }
    return (
        <>
            {/* <FormProvider {...methods}> */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-8">
                <div className="relative w-full">
                    <input type="username" {...register('username', { required: true })} id="username" placeholder="نام کاربری" className="bg-transparent py-2 pl-3 pr-10 outline-none border-b-2 w-full border-b-green relative" />
                    <span className="absolute right-3 top-3">
                        <FaUserAlt className="text-green" />
                    </span>
                    {errors.name && <span className="text-red-500">نام ادمین الزامی است</span>}
                </div>
                <PassInput errors={errors} register={register} />
                <button type="submit" className={'flex items-center justify-center pb-3 pt-2 w-full text-green text-nowrap min-w-24 bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold py-1 rounded-lg relative group overflow-hidden hover:text-white'}>
                    <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>

                    ورود به پنل مدیریت
                </button>
                <p className="text-gray-500 text-sm">
                    رمز خود را فراموش کردید؟
                    <Link className="text-green mr-1" href={'#'}>بازگردانی رمز</Link>
                </p>
            </form>
            {/* </FormProvider> */}
        </>
    )
}

export default LoginForm