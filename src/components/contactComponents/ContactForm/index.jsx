import Button from "@/components/globalComponents/Button"
import Input from "@/components/globalComponents/Input"
import { useState } from "react"
import emailjs from 'emailjs-com';
import SubmitButton from "@/components/globalComponents/SubmitButton";
import { useForm } from "react-hook-form";
import Alert from "@/components/globalComponents/Alert";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
    const [message, setMessage] = useState({ message: '', color: '' })

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        description: ''
    })

    function onSubmit(data) {
        emailjs.send('service_bqh61l8', 'template_2oaefbt', data, 'jB241984fHUicJsXK')
            .then(response => {
                console.log('SUCCESS!')
                setMessage({ message: 'پیام شما با موفقیت ارسال شد.', color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    reset()
                }, 5000)
            }, error => {
                setMessage({ message: 'پیام ارسال نشد.', color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    reset()
                }, 5000)
            });
    }

    function handleClearForm() {
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5 py-5 w-full">
                <Input
                    id={'fullName'}
                    register={register}
                    required={true}
                    type={'text'}
                    placeholder={'نام و نام خانوادگی'}
                    name={'fullName'}
                />
                {errors.fullName && <span className="text-red-500">نام و نام خانوادگی الزامی است</span>}

                <Input
                    id={'email'}
                    register={register}
                    required={true}
                    type={'email'}
                    placeholder={'ایمیل'}
                    name={'email'}
                />
                {errors.email && <span className="text-red-500">ایمیل الزامی است</span>}

                <textarea
                    {...register('description', { required: true })}
                    required={true}
                    placeholder="سوالات خود را در اینجا مطرح کنید..."
                    className="w-full outline-none text-gray-600 border-b-2 border-b-green p-2"
                    cols={20}
                    rows={5}
                    name={'description'}
                />
                {errors.description && <span className="text-red-500">توضیحات الزامی است</span>}

                <div className="flex items-end gap-2 w-full">
                    <SubmitButton style={'!py-2'}>
                        ارسال پیام
                    </SubmitButton>
                    <button onClick={() => handleClearForm()} type="reset" className={'pb-2 text-center border-2 px-3 py-1 border-green rounded-lg hover:text-white hover:bg-green transition-all duration-150'}>پاک کردن</button>
                </div>
            </form>
            <Alert message={message} />
        </>
    )
}

export default ContactForm