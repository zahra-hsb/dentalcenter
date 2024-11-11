'use client'  
import Input from "../../globalComponents/Input"  
import dynamic from 'next/dynamic'  
const CustomEditor = dynamic(() => import('../CustomEditor'), { ssr: false });  
import { useState } from "react"  
import Tag from "../../globalComponents/Tag"  
import Button from "../../globalComponents/Button"  
import { LuSaveAll } from "react-icons/lu";  
import { useForm } from "react-hook-form";  

const AdminForm = () => {  

    const { register, handleSubmit, formState: { errors }, reset } = useForm()  

    const onSubmit = (data) => {  
        console.log(data);  
        reset()  
    }  
    return (  
        <>  
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">  
                <div className="flex flex-col sm:flex-row items-center gap-10">  
                    <div className="flex flex-col w-full p-2 gap-2">  
                        <h3 className="px-4">نام ادمین</h3>  
                        <Input id={'adminForm'} register={register} required={true} placeholder={'مانند: علی احمدزاده'} type={'text'} style={'w-full'} /> {/* Corrected register usage */}  
                        {errors.adminName && <span className="text-red-500">نام ادمین الزامی است</span>}  
                    </div>  
                    <div className="flex flex-col w-full p-2 gap-2">  
                        <h3 className="px-4">شماره تماس</h3>  
                        <Input id={'phoneNumber'} required={true} register={register} placeholder={'+مانند: 989123456789'} type={'tel'} style={'w-full'} /> {/* Corrected register usage */}  
                        {errors.phoneNumber && <span className="text-red-500">شماره تماس معتبر نیست</span>}  
                    </div>  
                </div>  

                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">  
                    <div className="flex flex-col w-full p-2 gap-2">  
                        <h3 className="px-4">نام کاربری</h3>  
                        <Input id={'username'} register={register} required={true} placeholder={'مانند: VGomaryan@'} type={'text'} style={'w-full text-left'} /> {/* Corrected register usage and type */}  
                        {errors.username && <span className="text-red-500">نام کاربری الزامی است</span>}  
                    </div>  
                    <div className="flex flex-col w-full p-2 gap-2">  
                        <h3 className="px-4 ">رمز عبور</h3>  
                        <Input id={'password'} register={register} minLength={8} placeholder={'********'} type={'password'} style={'w-full tracking-wide'} /> {/* Corrected register usage */}  
                        {errors.password && <span className="text-red-500">رمز عبور باید حداقل 8 کاراکتر باشد</span>}  
                    </div>  
                </div>  
                <div className="flex items-end">  
                    <button type={'submit'} className={'text-green text-nowrap flex min-w-24 bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold py-2 rounded-lg relative group overflow-hidden hover:text-white '}>  
                        <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>  
                        <LuSaveAll className="ml-2" size={20} />  
                        ذخیره  
                    </button>  
                </div>  
            </form>  
        </>  
    )  
}  

export default AdminForm