'use client'
import Input from "../../globalComponents/Input"
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('../CustomEditor'), { ssr: false });
import { useEffect, useState } from "react"
import Tag from "../../globalComponents/Tag"
import Button from "../../globalComponents/Button"
import { LuSaveAll } from "react-icons/lu";
import { useForm } from "react-hook-form";
import axios from "axios";
import Alert from "@/components/globalComponents/Alert";
import { useRouter, useSearchParams } from "next/navigation";
import PassswordModal from "../PassswordModal";
import useStore from "@/customHooks/store";

const AdminForm = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
    const [message, setMessage] = useState({ message: '', color: '' })
    const [isEdit, setEdit] = useState(false)
    const [isAdmin, setAdmin] = useState(false)
    const [adminData, setAdminData] = useState({})
    const [showPassModal, setShowPassModal] = useState(false)
    const { userInfo } = useStore()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('/api/addAdmin', data)
            if (response.data.isExist) {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    router.push('/account/dashboard/admins')
                }, 5000)
            }
            reset()
        } catch (error) {
            console.log(error);
        }
    }

    const onEdit = async (data) => {
        try {
            const response = await axios.post('/api/editAdmin', data)
            if (!response.data) {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    router.push('/account/dashboard/admins')
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const params = useSearchParams()
    const id = params.get('id')

    function editPassword() {
        setShowPassModal(true)
    }

    useEffect(() => {
        async function findAdmin(id) {
            try {
                const response = await axios.post('/api/getAdmin', { id: id })
                const adminInfo = response.data
                setAdminData(adminInfo)
                setEdit(true)
                setValue('name', adminInfo.name)
                setValue('tel', adminInfo.tel)
                setValue('username', adminInfo.username)
            } catch (error) {
                console.log(error);
            }
        }
        if (id) {
            findAdmin(id)
            if (userInfo.username === 'vgomaryan') {
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        } else {
            setEdit(false)
        }
    }, [id, setValue, userInfo])

    return (
        <>
            <form onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)} className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-10">
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">نام ادمین</h3>

                        <Input id={'name'} register={register} required={true} placeholder={'مانند: علی احمدزاده'} type={'text'} style={'w-full'} />

                        {errors.name && <span className="text-red-500">نام ادمین الزامی است</span>}
                    </div>
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">شماره تماس</h3>

                        <Input id={'tel'} maxLength={11} required={true} register={register} placeholder={'0مانند: 9123456789'} type={'tel'} style={'w-full'} />


                        {errors.tel && <span className="text-red-500">شماره تماس معتبر نیست</span>}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">نام کاربری</h3>

                        <Input id={'username'} register={register} required={true} placeholder={'مانند: vgomaryan'} type={'text'} style={'w-full text-left'} />


                        {errors.username && <span className="text-red-500">نام کاربری الزامی است</span>}
                    </div>

                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4 ">رمز عبور</h3>

                        <Input id={'password'}
                            register={register}
                            minLength={8}
                            placeholder={'********'}
                            type={'password'}
                            style={'w-full tracking-wide'}
                            value={isEdit ? '********' : ''}
                            disabled={isEdit && true} />
                        <div onClick={editPassword} className="underline hover:text-green text-sm cursor-pointer text-left">تغییر رمز عبور</div>
                        {errors.password && <span className="text-red-500">رمز عبور باید حداقل 8 کاراکتر باشد</span>}
                    </div>
                    {isEdit === false &&
                        <>
                            <div className="flex flex-col w-full p-2 gap-2">
                                <h3 className="px-4 ">رمز عبور</h3>

                                <Input id={'password'}
                                    register={register}
                                    minLength={8}
                                    placeholder={'********'}
                                    type={'password'}
                                    style={'w-full tracking-wide'} />
                            </div>
                        </>
                    }
                </div>
                <div className="flex items-center gap-5">
                    <button type={'submit'} className={'text-green text-nowrap flex min-w-24 bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold py-2 rounded-lg relative group overflow-hidden hover:text-white '}>
                        <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>
                        <LuSaveAll className="ml-2" size={20} />
                        ذخیره
                    </button>
                    <button className="underline hover:text-green" onClick={() => router.back()}>
                        بازگشت
                    </button>
                </div>
                <Alert message={message} />
            </form>
            <PassswordModal setShowPassModal={setShowPassModal} showPassModal={showPassModal} />
        </>
    )
}

export default AdminForm