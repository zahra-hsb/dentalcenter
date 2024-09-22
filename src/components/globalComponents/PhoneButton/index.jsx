import Button from "../Button"

const PhoneButton = ({ style, text }) => {
    return (
        <>
            <nav className={" " + style}>
                <Button link={'tel:#'}>
                    {text}
                </Button>
            </nav>
        </>
    )
}

export default PhoneButton