const IconContainer = ({ children, style }) => {
    return (

            <span className={`w-12 h-12 p-3 rounded-lg bg-darkGreen flex items-center justify-center ${style}`}>
                {children}
            </span>

    )
}

export default IconContainer