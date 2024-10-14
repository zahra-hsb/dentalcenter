'use client'
import Button from "@/components/globalComponents/Button";
import Link from "next/link"

import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "@/components/globalComponents/Modal";
import AdminRow from "./AdminRow";

const adminsArray = [
    { id: 0, name: 'دکتر وحید گماریان', username: 'VGomaryan@', tel: '09914454546', image: '' },

]


const Admins = () => {
    const [areDelete, setDelete] = useState(false)
    const [isShowModal, setShowModal] = useState(false)

    function handleDeleteAllList() {
        setShowModal(false)
        setDelete(true)
    }

    function handleShowModal() {
        setShowModal(true)
    }

    function handleCloseModal() {
        setShowModal(false)
    }


    return (
        <>
            <section className="p-20">
                <div class="flex items-center justify-center bg-white">
                    <div class="p-6 px-10 w-full  overflow-x-auto">
                        <table class="w-full table-auto group">
                            <thead>
                                <tr className="">
                                    <td>
                                        <button onClick={handleShowModal} className="hover:text-red-500 py-3 transition-all underline duration-300">حذف همه</button>
                                    </td>
                                    <td>
                                        <Link className="hover:text-red-500 py-3 underline transition-all duration-300" href={'#'}>حذف انتخاب شده ها</Link>
                                    </td>
                                    <td>
                                        <p className="py-3 transition-all duration-300">تعداد ادمین ها: <span className="text-green">1</span></p>
                                    </td>
                                    <td>
                                        <Link href={'#'} className={'group py-2 hover:text-green pb-3 !text-center flex items-center gap-2 underline'}>
                                            <IoPersonAddOutline className="group-hover:text-black" />
                                            افزودن ادمین
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block font-sans text-sm font-normal opacity-70"></p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block font-sans text-sm font-normal opacity-70">تصویر پرسنل</p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">نام ادمین</p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">شماره تماس</p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">نام کاربری</p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">ویرایش</p>
                                    </th>
                                    <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">حذف</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminsArray.length > 0 ? adminsArray.map(item => (
                                    <AdminRow name={item.name} username={item.username} tel={item.tel} key={item.id} />
                                ))
                                    :
                                    <div>
                                        موردی برای نمایش وجود ندارد...
                                    </div>
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
                {isShowModal && <Modal handleDeleteAllList={handleDeleteAllList} handleCloseModal={handleCloseModal} question={'آیا از حذف همه ادمین ها اطمینان دارید؟'} />}
            </section>
        </>
    )
}

export default Admins