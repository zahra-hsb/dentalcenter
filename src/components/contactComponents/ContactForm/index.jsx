import Button from "@/components/globalComponents/Button"
import Input from "@/components/globalComponents/Input"
import { useState } from "react"
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        description: ''
    })

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        emailjs.send('service_bqh61l8', 'template_2oaefbt', values, 'jB241984fHUicJsXK')
            .then(response => {
                console.log('SUCCESS!')
                setValues({
                    fullName: '',
                    email: '',
                    description: ''
                });
                alert('پیام شما با موفقیت ارسال شد.')
            }, error => {
                alert('پیام ارسال نشد')
            });
    }

    function handleClearForm() {
        setValues({
            fullName: '',
            email: '',
            description: '',
        })
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center gap-5 py-5 w-full">
            <Input
                onChange={(e) => handleChange(e)}
                required={true}
                value={values.fullName}
                type={'text'}
                placeholder={'نام و نام خانوادگی'}
                name={'fullName'}
            />

            <Input
                onChange={(e) => handleChange(e)}
                required={true}
                value={values.email}
                type={'email'}
                placeholder={'ایمیل'}
                name={'email'}
            />

            <textarea
                onChange={(e) => handleChange(e)}
                required={true}
                value={values.description}
                placeholder="سوالات خود را در اینجا مطرح کنید..."
                className="w-full outline-none text-gray-600 border-b-2 border-b-green p-2"
                cols={20}
                rows={5}
                name={'description'}
            />

            <div className="flex items-end gap-2 w-full">
                <button type={'submit'} className={'!py-2 text-green text-nowrap flex min-w-24 bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold rounded-lg relative group overflow-hidden hover:text-white '}>
                    <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>

                    ارسال پیام
                </button>
                <button onClick={() => handleClearForm()} type="reset" className={'pb-2 text-center border-2 px-3 py-1 border-green rounded-lg hover:text-white hover:bg-green transition-all duration-150'}>پاک کردن</button>
            </div>
        </form>
    )
}

export default ContactForm