import Button from "../globalComponents/Button"

const Header = () => {
    return (
        <>
            <header className="py-10 px-20">
                <nav className="">
                    <Button link={'tel:#'}>
                        تماس
                    </Button>
                </nav>
                <nav></nav>
                <nav></nav>
            </header>
        </>
    )
}

export default Header