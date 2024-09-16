import Button from "../Button"

const PhoneButton = () => {
    return (
        <>
            <nav className="hidden sm:block">
                <Button link={'tel:#'}>
                    تماس
                </Button>
            </nav>
        </>
    )
}

export default PhoneButton