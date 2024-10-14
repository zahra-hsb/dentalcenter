import Link from "next/link"
import { FaRegEdit } from "react-icons/fa";
import BlogRow from "./BlogRow";

const blogsArray = [
    { id: 0, title: 'کامپوزیت چیست؟', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/3', image: '' },
    { id: 1, title: 'تفاوت بین لمینت و کامپوزیت', author: 'دکتر وحید گماریان', dateOfBlog: '1403/5/20', image: '' },
    { id: 2, title: 'راز دندان های سفید و سالم', author: 'دکتر وحید گماریان', dateOfBlog: '1403/6/10', image: '' },
    // { id: 3, title: '', author: '', dateOfBlog: '', image: '' },
]

const DashboardBlogList = () => {
    return (
        <div class="flex items-center justify-center bg-white">
            <div class="p-6 px-10 w-full  overflow-x-auto">
                <table class="w-full table-auto group">
                    <thead>
                        <tr className="">
                            <td>
                                <Link className="hover:text-red-500 py-3 transition-all underline duration-300" href={'#'}>حذف همه</Link>
                            </td>
                            <td>
                                <Link className="hover:text-red-500 py-3 underline transition-all duration-300" href={'#'}>حذف انتخاب شده ها</Link>
                            </td>
                            <td>
                                <p className="py-3 transition-all duration-300">تعداد وبلاگ ها: <span className="text-green">1</span></p>
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
                        {blogsArray.length > 0 ? blogsArray.map(item =>
                            <BlogRow author={item.author} date={item.dateOfBlog} key={item.id} title={item.title} />
                        )
                            :
                            <div>
                                موردی برای نمایش وجود ندارد...
                            </div>
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DashboardBlogList