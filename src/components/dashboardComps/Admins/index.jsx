'use client'
import Link from "next/link"
import { IoPersonAddOutline } from "react-icons/io5";
import { useState } from "react";
import AdminRow from "./AdminRow";
import DelAllBtn from "../DelAllBtn";
import Modal from "@/components/globalComponents/Modal";



const Admins = () => {
    const [items, setItems] = useState([
        { id: 0, name: 'دکتر وحید گماریان', username: 'VGomaryan@', tel: '09914454546', image: '', selected: false },

    ])
    const [isShowModal, setShowModal] = useState(false)
    const toggleSelect = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const deleteSelected = () => {
        setItems(prevItems => prevItems.filter(item => !item.selected));
        setShowModal(false);
    };

    function handleShowModal() {
        const hasSelectedItems = items.some(item => item.selected);

        if (!hasSelectedItems) {
            alert('موردی برای حذف وجود ندارد')
            return;
        } 
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
                                        <DelAllBtn items={items} setItems={setItems} />
                                    </td>
                                    <td>
                                        <button onClick={handleShowModal} className="hover:text-red-500 py-3 underline transition-all duration-300">حذف انتخاب شده ها</button>
                                    </td>
                                    <td>
                                        <p className="py-3 transition-all duration-300">تعداد ادمین ها: <span className="text-green">{items.length}</span></p>
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
                                {items.length > 0 ? items.map(item => (
                                    <AdminRow
                                        selected={item.selected}
                                        toggleSelect={() => toggleSelect(item.id)} name={item.name} username={item.username} tel={item.tel} key={item.id} />
                                ))
                                    :
                                    <div className="p-5">
                                        موردی برای نمایش وجود ندارد...
                                    </div>
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
                {isShowModal && <Modal question={'آیا از حذف این موارد اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={deleteSelected} />}

            </section>
        </>
    )
}

export default Admins