'use client'
import { FormProvider, useForm } from "react-hook-form"
import AdminForm from "../AdminForm"

const AddAdmin = () => {
    const methods = useForm();  
    return (
        <>
            <section className="p-10 sm:p-20 flex flex-col gap-5">
                <h4 className="text-xl font-bold">افزودن ادمین</h4>
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