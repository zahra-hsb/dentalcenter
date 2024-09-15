import Link from "next/link"

const Button = ({ link, children, style }) => {
    return (
        <>
            <Link href={link} className={'text-green bg-gradient-to-r from-darkGreen to-buttonOp px-5 sm:px-8 font-bold py-2 sm:py-3 rounded-lg ' + style} >{children}</Link>
        </>
    )
}

export default Button