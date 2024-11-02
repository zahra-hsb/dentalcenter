import Logo from "../Logo"

const LoadingUI = () => {
    return (
        <>
            <section className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 bg-white z-50">
                <Logo isLoading={true} style={'!flex-col'} />
                
            </section>
        </>
    )
}

export default LoadingUI