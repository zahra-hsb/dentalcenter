import Logo from "@/components/globalComponents/Logo"
import Login from "@/components/loginComponents/Login"

const login = () => {
    return (
        <>
            <section className="flex flex-col gap-10 p-5 sm:p-20 items-center justify-center">
                <Logo />
                <Login />
            </section>
        </>
    )
}

export default login