'use client'
import { useEffect, useState } from "react"
import { BiUserCircle } from "react-icons/bi"

const UserInfo = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        const name = localStorage.getItem('name')
        setName(name)
    }, [])
    return (
        <>
            <div className="flex gap-3 items-center">
                <BiUserCircle className="text-green" size={25} />
                <p className="text-white">{name}</p>
            </div>
        </>
    )
}

export default UserInfo