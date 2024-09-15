import Link from "next/link"

const Button = ({ link, children, style }) => {
    return (
        <>
            <Link href={link} className={'text-green bg-gradient-to-r from-button to-buttonOp px-8 font-bold py-3 rounded-lg ' + style} >{children}</Link>
        </>
    )
}

export default Button