'use client'
import Button from "@/components/globalComponents/Button";
import Link from "next/link"
import { BiShowAlt } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "@/components/globalComponents/Modal";

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
                                <tr className="hover:bg-gray-100 cursor-pointer transition-all duration-300">
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div class="ml-5">
                                            <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" class="checkbox absolute cursor-pointer w-full h-full" />
                                                <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="p-4 border-b border-blue-gray-50">
                                        <div class="flex items-center justify-center">
                                            <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                        </div>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50 w-full lg:w-auto">
                                        <div class="">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold hover:underline cursor-pointer hover:text-green transition-all duration-300">دکتر وحید گماریان</p>
                                        </div>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal text-center">09999999999</p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ">VGomaryan@</p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <Link href={'/dashboard/blog/edit'} class="relative flex justify-center items-center select-none w-full hover:text-lime-500  transition-all duration-300" >
                                            <GrEdit size={20} />
                                        </Link>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <Link href={'/dashboard/blog?delete'} class="relative flex justify-center items-center select-none w-full hover:text-red-500  transition-all duration-300" >
                                            <RiDeleteBinLine size={20} />
                                        </Link>
                                    </td>
                                </tr>

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