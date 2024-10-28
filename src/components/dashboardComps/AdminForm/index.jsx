'use client'
import Input from "../../globalComponents/Input"
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('../CustomEditor'), { ssr: false });
import { useState } from "react"
import Tag from "../../globalComponents/Tag"
import Button from "../../globalComponents/Button"
import { LuSaveAll } from "react-icons/lu";

const AdminForm = () => {

    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        if (e.keyCode == 13 && tag.trim()) {
            e.preventDefault()
            if (!tags.includes(tag)) {
                console.log('enter key worked!');
                setTags(prevTags => [...prevTags, tag])
                setTag('')
            }
        }
    }

    function handleChangeTag(e) {
        setTag(e.target.value)
    }
    return (
        <>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-10">
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">نام ادمین</h3>
                        <Input placeholder={'مانند: علی احمدزاده'} type={'text'} style={'w-full'} />
                    </div>
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">شماره تماس</h3>
                        <Input placeholder={'+مانند: 989123456789'} type={'tel'} style={'w-full'} />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
                    {/* <div className="w-full flex flex-col gap-5">
                        <h3>تصویر مقاله</h3>
                        <Input type={'file'} />
                    </div> */}
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4">نام کاربری</h3>
                        <Input placeholder={'مانند: VGomaryan@'} type={'username'} style={'w-full text-left'} />
                    </div>
                    <div className="flex flex-col w-full p-2 gap-2">
                        <h3 className="px-4 ">رمز عبور</h3>
                        <Input placeholder={'********'} type={'password'} style={'w-full tracking-wide'} />
                    </div>
                </div>
                <div className="flex items-end">
                    <Button link={'/dashboard/blog'} style={'py-4'}>
                        <LuSaveAll className="ml-2" size={20} />
                        افزودن وبلاگ
                    </Button>
                </div>
            </form>
        </>
    )
}

export default AdminForm