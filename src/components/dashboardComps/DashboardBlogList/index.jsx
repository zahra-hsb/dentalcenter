'use client'
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa";
import BlogRow from "./BlogRow";
import DelAllBtn from "../DelAllBtn";
import { useState } from "react";
import Modal from "@/components/globalComponents/Modal";

const DashboardBlogList = () => {

    const [items, setItems] = useState([
        { id: 0, title: 'کامپوزیت چیست؟', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/3', image: '', selected: false },
        { id: 1, title: 'تفاوت بین لمینت و کامپوزیت', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/20', image: '', selected: false },
        { id: 2, title: 'راز دندان های سفید و سالم', author: 'دکتر وحید گماریان', dateOfBlog: '1403/6/10', image: '', selected: false },
    ])

    const [isShowModal, setShowModal] = useState(false)


    const toggleSelect = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

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

    return (
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
                                {/* <p className="py-3 transition-all duration-300">تعداد وبلاگ ها: <span className="text-green">{items?.length}</span></p> */}
                            </td>
                            <td>
                                <Link href={'#'} className={'group py-2 hover:text-green pb-3 !text-center flex items-center gap-2 underline'}>
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
                        {/* {items.length > 0 ? items.map(item => */}
                        {items ? items?.map(item =>
                            <BlogRow
                                author={item.author}
                                date={item.dateOfBlog}
                                key={item.id}
                                title={item.title}
                                selected={item.selected}
                                toggleSelect={() => toggleSelect(item.id)} />
                        )
                            :
                            <div className="p-5">
                                موردی برای نمایش وجود ندارد...
                            </div>
                        }
                    </tbody>
                </table>
            </div>
            {isShowModal && <Modal question={'آیا از حذف این موارد اطمینان دارید؟'} handleCloseModal={handleCloseModal} handleDeleteAllList={deleteSelected} />}
        </div>
    )
}

export default DashboardBlogList