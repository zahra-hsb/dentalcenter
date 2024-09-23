const Container = ({ children }) => {
    return (
        <>
            <div className="group w-full min-h-28 h-full relative overflow-hidden rounded-3xl p-5 bg-white border border-green flex flex-col items-center gap-2 cursor-pointer hover:bg-darkGreen">
                {children}
                <div className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-darkGreen to-buttonOp !duration-300 ease-linear"></div>
            </div>
        </>
    )
}

export default Container