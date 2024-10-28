import Image from "next/image";
import Link from "next/link";
import { BiShowAlt } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const AdminRow = ({ name, username, tel, image, selected, toggleSelect, handleDeleteOne }) => {
    return (
        <>
            <tr className="hover:bg-gray-100 cursor-pointer transition-all duration-300">
                <td className="p-4 border-b border-blue-gray-50">
                    <div class="ml-5">
                        <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input checked={selected} onChange={toggleSelect} placeholder="checkbox" type="checkbox" class="checkbox absolute cursor-pointer w-full h-full" />
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
                        <Image src={''} alt="Spotify" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                    </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50 w-full sm:w-auto lg:w-auto">
                    <div class="">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold hover:underline cursor-pointer hover:text-green transition-all duration-300 text-nowrap text-center">{name != '' && name}</p>
                    </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal text-center text-nowrap">{tel != '' && tel}</p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal text-center text-nowrap">{username != '' && username}</p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                    <Link href={'/dashboard/blog/edit'} class="relative flex justify-center items-center select-none w-full hover:text-lime-500  transition-all duration-300" >
                        <GrEdit size={20} />
                    </Link>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                    <button onClick={handleDeleteOne} class="relative flex justify-center items-center select-none w-full hover:text-red-500  transition-all duration-300" >
                        <RiDeleteBinLine size={20} />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default AdminRow