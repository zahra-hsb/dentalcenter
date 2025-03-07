import Link from "next/link"

const Button = ({ link, onClick, children, style }) => {
    return (
        <>
            <Link href={link} onClick={onClick} className={'text-green text-nowrap flex bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-3 font-bold py-1 rounded-lg relative group overflow-hidden hover:text-white ' + style} >
                <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 top-0 right-0 cursor-pointer w-full h-full bg-gradient-to-r from-green to-green !duration-200 ease-linear"></span>
                {children}
            </Link>
        </>
    )
}

export default Button