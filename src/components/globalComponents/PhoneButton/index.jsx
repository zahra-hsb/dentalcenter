import Button from "../Button"

const PhoneButton = ({ style, text }) => {
    return (
        <>
            <nav className={" " + style}>
                <Button link={'tel:02146807225'}>
                    {text}
                </Button>
            </nav>
        </>
    )
}

export default PhoneButton