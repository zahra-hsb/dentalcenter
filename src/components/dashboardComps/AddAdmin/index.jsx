'use client'
import { FormProvider, useForm } from "react-hook-form"
import AdminForm from "../AdminForm"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AddAdmin = ({ title }) => {
    const methods = useForm();
    const [isMainAdmin, setMainAdmin] = useState(false)
    const router = useRouter()
    useEffect(() => {
        const username = localStorage.getItem('user')
        if (username === 'vgomaryan') {
            setMainAdmin(true)
        } else {
            router.push('/account/dashboard')
        }
    }, [])
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