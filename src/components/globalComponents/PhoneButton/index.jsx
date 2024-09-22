import Button from "../Button"

const PhoneButton = ({ style }) => {
    return (
        <>
            <nav className={" " + style}>
                <Button link={'tel:#'}>
                    تماس
                </Button>
            </nav>
        </>
    )
}

export default PhoneButton