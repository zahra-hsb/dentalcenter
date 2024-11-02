import Button from "@/components/globalComponents/Button"
import Input from "@/components/globalComponents/Input"

const ContactForm = () => {
    return (
        <form className="flex flex-col items-center gap-5 py-5 w-full">
            <Input type={'text'} placeholder={'نام و نام خانوادگی'} />
            <Input type={'email'} placeholder={'ایمیل'} />
            <textarea placeholder="سوالات خود را در اینجا مطرح کنید..." className="w-full outline-none text-gray-600 border-b-2 border-b-green p-2" cols={20} rows={5} />
            <div className="flex items-end gap-2 w-full">
                <Button onClick={() => handleClearForm()} link={'#'} style={'!py-2'}>ارسال پیام</Button>
                <button type="reset" className={'pb-2 text-center border-2 px-3 py-1 border-green rounded-lg hover:text-white hover:bg-green transition-all duration-150'}>پاک کردن</button>
            </div>
        </form>
    )
}

export default ContactForm