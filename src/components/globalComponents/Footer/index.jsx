import Menu from "../Menu"

const Footer = () => {
    return (
        <>
            <footer className="bg-green w-full lg:px-32 py-10 h-full bg-opacity-20">
                <div className="flex flex-col items-start gap-5">
                    <h4 className="text-lg font-semibold">فهرست</h4>
                    <Menu style={'flex-col !items-start text-gray-600 text-sm !gap-5'} />
                </div>
            </footer>
        </>
    )
}

export default Footer