import Button from "@/components/globalComponents/Button"
import Link from "next/link"

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
                    <form className="flex flex-col items-center gap-8">
                        <input type="username" placeholder="نام کاربری یا شماره تلفن" className="bg-transparent py-2 px-3 outline-none border-b-2 w-full border-b-green" />
                        <input type="password" placeholder="رمز عبور" className="bg-transparent py-2 px-3 outline-none border-b-2 w-full border-b-green" />
                        <Button style={'flex items-center justify-center pb-3 pt-2 w-full'} link={'/account/dashboard'}>
                            ورود به پنل مدیریت
                        </Button>
                        <p className="text-gray-500 text-sm">
                            رمز خود را فراموش کردید؟
                            <Link className="text-green mr-1" href={'#'}>بازگردانی رمز</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login