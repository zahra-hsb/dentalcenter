'use client'
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa";
import BlogRow from "./BlogRow";
import DelAllBtn from "../DelAllBtn";
import { useState } from "react";
import Modal from "@/components/globalComponents/Modal";

const DashboardBlogList = () => {

    const [items, setItems] = useState([
        { id: 1, title: 'کامپوزیت چیست؟', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/3', image: '', selected: false },
        { id: 2, title: 'تفاوت بین لمینت و کامپوزیت', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/20', image: '', selected: false },
        { id: 3, title: 'راز دندان های سفید و سالم', author: 'دکتر وحید گماریان', dateOfBlog: '1403/6/10', image: '', selected: false },
    ])

    const [isShowModal, setShowModal] = useState(false)
    const [isOneItem, setOneItem] = useState(false)
    const [id, setId] = useState(0)


    const toggleSelect = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
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

    const deleteSelected = () => {
        setItems(prevItems => prevItems.filter(item => !item.selected));
        setShowModal(false);
    };

    function handleCloseModal() {
        setShowModal(false)
    }

    function handleDeleteOne(id) {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        setShowModal(false)
    }

    return (
        <div class="flex items-center justify-center bg-white">
            <div class="p-6 px-10 w-full overflow-x-auto">
                <table class="table-auto group min-w-[120%] lg:min-w-full">
                    <thead>
                        <tr className="">
                            <td className="">
                                <DelAllBtn items={items} setItems={setItems} />
                            </td>
                            <td className="">
                                <button onClick={handleShowModal} className="hover:text-red-500 py-3 underline transition-all duration-300 text-nowrap p-3">حذف انتخاب شده ها</button>
                            </td>
                            <td className="text-center">
                                <p className="p-3 transition-all duration-300">تعداد وبلاگ ها: <span className="text-green">{items?.length}</span></p>
                            </td>
                            <td className="">
                                <Link href={'/dashboard/blog/add'} className={'group p-2 hover:text-green pb-3 !text-center flex items-center gap-2 underline text-nowrap'}>
                                    <FaRegEdit className="group-hover:text-black" />
                                    افزودن وبلاگ
                                </Link>
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
                                <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">تاریخ بارگزاری</p>
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
                                author={item.author}
                                date={item.dateOfBlog}
                                key={item.id}
                                title={item.title}
                                selected={item.selected}
                                toggleSelect={() => toggleSelect(item.id)}
                                handleDeleteOne={() => handleShowDeleteItemModal(item.id)} />
                        )
                        }
                    </tbody>
                </table>
                {items.length === 0 && <div className="p-5 text-nowrap">
                    موردی برای نمایش وجود ندارد...
                </div>}
            </div>
            {isShowModal && <Modal question={'آیا از حذف این موارد اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={deleteSelected} />}
            {isShowModal && isOneItem && <Modal question={'آیا از حذف این وبلاگ اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={() => handleDeleteOne(id)} />}
        </div>
    )
}

export default DashboardBlogList