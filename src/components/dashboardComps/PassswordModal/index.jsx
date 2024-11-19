import Alert from "@/components/globalComponents/Alert"
import Input from "@/components/globalComponents/Input"
import SubmitButton from "@/components/globalComponents/SubmitButton"
import PassInput from "@/components/loginComponents/PassInput"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"

const PassswordModal = ({ setShowPassModal, showPassModal }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
    const [message, setMessage] = useState({ message: '', color: '' })

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('/api/editAdminPassword', data)
            if (response.data.isExist === false) {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else if (response.data.isEdited === false) {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    setShowPassModal(false)
                }, 4000)
            }
            // reset()
        } catch (error) {
            console.log(error);
        }
    }
    function handleCloseModal() {
        setShowPassModal(false)
    }
    return (
        <>
            <div className={`${showPassModal ? 'opacity-100 translate-x-0 z-50' : 'opacity-0 -translate-x-full z-0'} w-screen h-screen fixed top-0 left-0 backdrop-blur z-50 flex items-center justify-center`}>
                <div className={`bg-white p-8 rounded-md shadow-xl border-t border-t-green ${showPassModal ? `translate-y-0 opacity-100 z-50` : `-translate-y-full opacity-0 -z-10`}`}>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <label className="px-5 text-sm"> رمزعبور خود را اینجا وارد کنید.</label>
                        <PassInput errors={errors} register={register} />
                        <div className="flex gap-5">
                            <SubmitButton>ویرایش رمز عبور</SubmitButton>
                            <button onClick={handleCloseModal} className="underline hover:text-green">برگشت</button>
                        </div>
                    </form>
                </div>
                <Alert message={message} />
            </div>
        </>
    )
}

export default PassswordModal