const Logo = ({ style }) => {
    return (
        <>
            <nav className="">
                <h3 className={`uppercase text-darkGreen font-extrabold text-lg sm:text-3xl ${style}`}>
                    dental
                    <span className="text-green">center</span>
                </h3>
            </nav>
        </>
    )
}

export default Logo