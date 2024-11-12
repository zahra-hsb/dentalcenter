'use client'
import Link from "next/link"
import { IoPersonAddOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import AdminRow from "./AdminRow";
import DelAllBtn from "../DelAllBtn";
import Modal from "@/components/globalComponents/Modal";
import { errorComp, getAllAdmins } from "@/methods";
import axios from "axios";
import Alert from "@/components/globalComponents/Alert";



const Admins = () => {
    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [isShowModal, setShowModal] = useState(false)
    const [id, setId] = useState(0)
    const [isOneItem, setOneItem] = useState(false)
    const [message, setMessage] = useState({ message: '', color: '' })

    const toggleSelect = (id) => {
        setItems(
            items.map(item =>
                item._id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };
    function handleShowDeleteItemModal(id) {
        setShowModal(true)
        setOneItem(true)
        setId(id)
    }
    const deleteSelected = async () => {
        console.log(items);
        const selecteditemsArray = items.filter(item => item.selected)
        try {
            await axios.delete('/api/deleteManyAdmins', { data: { ids: selecteditemsArray } })
        } catch (error) {
            console.error(error)
        }
        setShowModal(false);
    };

    function handleShowModal() {
        const hasSelectedItems = items.some(item => item.selected);

        if (!hasSelectedItems) {
            alert('موردی برای حذف انتخاب نشده است.')
            return;
        }
        setShowModal(true)
    }

    function handleCloseModal() {
        setShowModal(false)
    }

    async function handleDeleteOne(id) {

        try {
            const response = await axios.delete('/api/deleteAdmin', { data: { id } })
            console.log(response.data);
            if (response.data.isDeleted) {
                setItems(prevItems => prevItems.filter(item => item._id !== id));
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }
        setShowModal(false)
    }
    useEffect(() => {
        getAllAdmins(setItems, errorComp)
    }, [])
    return (
        <>
            <section className="px-5 py-10 sm:p-20 relative">
                <h4 className="text-2xl font-semibold text-center sm:text-start mb-10 text-slate-600">لیست ادمین ها</h4>

                <div class="flex items-center justify-center bg-white">
                    <Link href={'/account/dashboard/admins/add'} className={'fixed group p-3 hover:text-green pb-3 !text-center flex items-center gap-2 border-4  border-blue-900  rounded-full bottom-3 lg:left-10 z-40'}>
                        <IoPersonAddOutline size={25} className="hover:text-green" />
                    </Link>
                    <div class="p-6 px-10 w-full  overflow-x-auto">
                        <table class="w-full table-auto group min-w-[160%] lg:min-w-full">
                            <thead>
                                <tr className="">
                                    <td>
                                        <DelAllBtn items={items} setItems={setItems} />
                                    </td>
                                    <td className="text-center">
                                        <button onClick={handleShowModal} className="hover:text-red-500 py-3 underline transition-all duration-300 text-nowrap p-3 text-center">حذف انتخاب شده ها</button>
                                    </td>
                                    <td className="text-center">
                                        <p className="py-3 transition-all duration-300 text-nowrap text-center">تعداد ادمین ها: <span className="text-green">{items.length}</span></p>
                                    </td>
                                    <td className="text-center">

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
                                {items.length > 0 && items.map(item => (
                                    <AdminRow
                                        selected={item.selected}
                                        toggleSelect={() => toggleSelect(item._id)} name={item.name} username={item.username} tel={item.tel} key={item._id}
                                        handleDeleteOne={() => handleShowDeleteItemModal(item._id)} />
                                ))
                                }
                            </tbody>
                        </table>
                        {items.length === 0 && <div className="p-5 text-nowrap">
                            موردی برای نمایش وجود ندارد...
                        </div>}
                    </div>
                </div>
                <Alert message={message} />

                {isShowModal && <Modal question={'آیا از حذف این موارد اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={deleteSelected} />}
                {isShowModal && isOneItem && <Modal question={'آیا از حذف این وبلاگ اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={() => handleDeleteOne(id)} />}
            </section>
        </>
    )
}

export default Admins