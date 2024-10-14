'use client'
import { MdOutlineMenu } from "react-icons/md"
import SideNav from "../SideNav"
import { useState } from "react"

const ShowMenuButton = () => {
    const [isShowMenu, setShowMenu] = useState(false)
    function handleShowMenu() {
        console.log('object');
        setShowMenu(!isShowMenu)
    }
    return (
        <>
            <div className={`lg:hidden text-black bg-darkGreen w-full h-full p-5 relative`}>
                <div onClick={handleShowMenu} className="cursor-pointer w-14">
                    <MdOutlineMenu size={25} color="white" />
                </div>
                <SideNav style={`bg-white p-5 shadow absolute right-16 ${isShowMenu ? 'translate-y-5 z-50 ' : '-translate-y-full -z-50'} transition-all duration-300`} />
            </div>
        </>
    )
}

export default ShowMenuButton