import Button from "@/components/globalComponents/Button"
import Link from "next/link"
import { FaUserAlt } from "react-icons/fa"
import PassInput from "../PassInput"
import LoginForm from "../LoginForm"

const Login = () => {
    return (
        <>
            <div className="flex flex-col gap-5 border w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow">
                <div className="bg-darkGreen w-full p-5">
                    <p className="text-center text-white">
                        ورود پرسنل
                    </p>
                </div>
                <div className="p-10">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login