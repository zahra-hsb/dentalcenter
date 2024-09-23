const Container = ({ children }) => {
    return (
        <>
            <div className="relative overflow-hidden rounded-xl p-5 bg-white border border-green ">
                <div className="opacity-0 hover:opacity-100 absolute top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-darkGreen to-buttonOp !duration-300"></div>
                {children}
            </div>
        </>
    )
}

export default Container