'use client'
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa";
import BlogRow from "./BlogRow";
import DelAllBtn from "../DelAllBtn";
import { useEffect, useState } from "react";
import Modal from "@/components/globalComponents/Modal";
import axios from "axios";
import Alert from "@/components/globalComponents/Alert";

const DashboardBlogList = () => {

    const [items, setItems] = useState([])
    const [message, setMessage] = useState({ message: '', color: '' })

    const [isShowModal, setShowModal] = useState(false)
    const [isOneItem, setOneItem] = useState(false)
    const [id, setId] = useState(0)


    const toggleSelect = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item._id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };
    function handleShowDeleteItemModal(id) {
        setShowModal(true)
        setOneItem(true)
        setId(id)
    }
    function handleShowModal() {
        const hasSelectedItems = items.some(item => item.selected);
        if (!hasSelectedItems) {
            alert('موردی برای حذف وجود ندارد')
            return;
        }
        setShowModal(true)
    }

    const deleteSelected = async () => {
        const selecteditemsArray = items.filter(item => item.selected)
        try {
            const response = await axios.delete('/api/deleteManyBlogs', { data: { ids: selecteditemsArray } })
            if (response.data.success == true) {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
                setItems(prevItems => prevItems.filter(item => !item.selected));
            }
        } catch (error) {
            setMessage({ message: response.data.message, color: 'red-500' })
            setTimeout(() => {
                setMessage({ message: '', color: '' })
            }, 5000)
        }
        setShowModal(false);
    };

    function handleCloseModal() {
        setShowModal(false)
    }

    async function handleDeleteOne(id) {
        try {
            const response = await axios.delete('/api/deleteBlog', { data: { id } })
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
        async function getBlogs() {
            const response = await axios.get('/api/getBlogs')
            console.log(response.data);
            setItems(response.data)
        }
        getBlogs()
    }, [])
    return (
        <>

            <div class="flex items-center justify-center bg-white relative">
                <Link href={'/account/dashboard/blog/add'} className={'fixed group p-3 hover:text-green pb-3 !text-center flex items-center gap-2 border-4  border-blue-900  rounded-full bottom-5 lg:left-10 z-40'}>
                    <FaRegEdit size={25} className="group-hover:text-green" />
                </Link>
                <div class="p-6 px-10 w-full overflow-x-auto">
                    <table class="table-auto group min-w-[120%] lg:min-w-full">
                        <thead>
                            <tr className="">
                                {/* <td className="">
                                    <DelAllBtn items={items} setItems={setItems} />
                                </td> */}
                                <td className="">
                                    <button onClick={handleShowModal} className="hover:text-red-500 py-3 underline transition-all duration-300 text-nowrap p-3">حذف انتخاب شده ها</button>
                                </td>
                                <td className="text-center">
                                    <p className="p-3 transition-all duration-300 text-nowrap">تعداد وبلاگ ها: <span className="text-green">{items?.length}</span></p>
                                </td>
                            </tr>
                            <tr>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block font-sans text-sm font-normal opacity-70"></p>
                                </th>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block font-sans text-sm font-normal opacity-70">تصویر</p>
                                </th>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">عنوان مقاله</p>
                                </th>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">نویسنده</p>
                                </th>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-nowrap">تاریخ بارگزاری</p>
                                </th>
                                <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">نمایش</p>
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
                            {items.length > 0 && items.map(item =>
                                <BlogRow
                                    id={item._id}
                                    image={item.blogImg}
                                    author={item.author}
                                    date={item.date}
                                    key={item._id}
                                    title={item.title}
                                    selected={item.selected}
                                    toggleSelect={() => toggleSelect(item._id)}
                                    handleDeleteOne={() => handleShowDeleteItemModal(item._id)} />
                            )
                            }
                        </tbody>
                    </table>
                    {items.length === 0 && <div className="p-5 text-nowrap">
                        موردی برای نمایش وجود ندارد...
                    </div>}
                </div>
                <Alert message={message} />
                

                {isShowModal && <Modal question={'آیا از حذف این موارد اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={deleteSelected} />}
                {isShowModal && isOneItem && <Modal question={'آیا از حذف این وبلاگ اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={() => handleDeleteOne(id)} />}
            </div>
        </>
    )
}

export default DashboardBlogList