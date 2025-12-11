'use client'
import { FormProvider, useForm } from "react-hook-form"
import AdminForm from "../AdminForm"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/customHooks/store";

const AddAdmin = ({ title }) => {
    const methods = useForm();
    const [isMainAdmin, setMainAdmin] = useState(false)
    const { userInfo } = useStore()
    const router = useRouter()
    useEffect(() => {
        if (userInfo.mainAdmin) {
            setMainAdmin(true)
        } else {
            router.push('/account/dashboard')
        }
    }, [userInfo.mainAdmin, router])
    return (
        <>
            <section className="p-10 sm:p-20 flex flex-col gap-5">
                <h4 className="text-xl font-bold">{title}</h4>
                <div className="border p-5 rounded-lg w-full bg-white shadow ">
                    <FormProvider {...methods}>
                        <AdminForm />
                    </FormProvider>
                </div>
            </section>
        </>
    )
}

export default AddAdmin