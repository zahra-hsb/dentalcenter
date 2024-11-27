'use client'
import Button from "@/components/globalComponents/Button";
import Container from "@/components/globalComponents/Container";
import useStore from "@/customHooks/store";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineRefresh } from "react-icons/md";
import axios from "axios";


const EditPersonalInfo = () => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const id = localStorage.getItem('id')
        async function findAdmin(id) {
            try {
                const response = await axios.post('/api/getAdmin', { id: id })
                const adminInfo = response.data
                setUserInfo(adminInfo)
            } catch (error) {
                console.log(error);
            }
        }
        if (id) {
            findAdmin(id)
        }
    }, [])

    return (
        <>
            <Container style={'!max-w-full'}>
                <div className="p-5 bg-green bg-opacity-50 group-hover:bg-opacity-100 rounded-full">
                    <RxAvatar className="text-white" size={45} />
                </div>
                {/* <MdOutlineRefresh size={30}  className="text-darkGreen group-hover:text-white" onClick={handleUpdate} /> */}

                <div className="grid lg:grid-cols- place-items-center lg:place-items-center w-full gap-y-5">
                    <div className="flex items-center gap-1">
                        <h3 className="text-gray-600 text-xs group-hover:text-white">
                            نام و نام خانوادگی:
                        </h3>
                        <p className="group-hover:text-white text-black">
                            {userInfo.name}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h3 className="text-gray-600 text-xs group-hover:text-white">
                            نام کاربری:
                        </h3>
                        <p className="group-hover:text-white text-black">
                            {userInfo.username}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h3 className="text-gray-600 text-xs group-hover:text-white">
                            شماره تماس:
                        </h3>
                        <p className="group-hover:text-white text-black">
                            {userInfo.tel}
                        </p>
                    </div>
                    <Button style={`w-40 lg:w-32`} link={`/account/dashboard/admins/edit?id=${userInfo._id}`}>
                        ویرایش مشخصات
                    </Button>
                </div>


            </Container>
        </>
    )
}

export default EditPersonalInfo