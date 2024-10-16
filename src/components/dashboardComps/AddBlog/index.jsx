
'use client'
import Input from "@/components/globalComponents/Input"
import CustomEditor from "../CustomEditor"
import { useState } from "react"
import Tag from "@/components/globalComponents/Tag"

const AddBlog = () => {
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
            <section className="p-10 sm:p-20 flex flex-col gap-5">
                <h4 className="text-xl font-bold">افزودن وبلاگ</h4>
                <div className="border p-5 rounded-lg w-full bg-white shadow flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                        <Input placeholder={'عنوان مقاله'} type={'text'} />
                        <div className="flex flex-col gap-5 w-full ">
                            <Input onChange={(e) => handleChangeTag(e)} value={tag} placeholder={'برچسب ها'} type={'text'} onKeyDown={(e) => handleKeyDown(e)} style={''} />
                            <div className="flex gap-5 w-full flex-wrap">
                                {tags?.length > 0
                                    &&
                                    tags?.map(item => (
                                        <>
                                            <Tag tag={item} />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <h3>متن وبلاگ</h3>
                    {/* <CustomEditor /> */}

                </div>
            </section>
        </>
    )
}

export default AddBlog