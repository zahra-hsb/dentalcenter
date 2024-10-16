'use client'
import Input from "../../globalComponents/Input"
import CustomEditor from "../CustomEditor"
import { useState } from "react"
import Tag from "../../globalComponents/Tag"
import Button from "../../globalComponents/Button"
import { LuSaveAll } from "react-icons/lu";

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
                <div className="border p-5 rounded-lg w-full bg-white shadow ">
                    
                </div>
            </section>
        </>
    )
}

export default AddBlog