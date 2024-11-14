'use client'
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('../CustomEditor'), { ssr: false });
import { useState } from "react"
import Tag from "../../globalComponents/Tag"
import Button from "../../globalComponents/Button"
import { LuSaveAll } from "react-icons/lu";
import { useForm } from "react-hook-form";
import SubmitButton from '@/components/globalComponents/SubmitButton';
import axios from 'axios';

const BlogForm = () => {
    const [blogContent, setBlogContent] = useState('')
    const [tag, setTag] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [imgUrl, setImgUrl] = useState('')
    const [values, setValues] = useState({
        title: '',
        blogImg: '',
        tags: '',
        blogContent: '',
    })
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
    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }
    function handleChangeImg(e) {
        const value = e.target.value;
        const replacedValue = value.replace(/^.*[\\/]/, '');
        const url = 'https://ecomerce.storage.iran.liara.space/' + replacedValue
        setImgUrl(url)
    }

    async function handleSubmit(e) {
        
        e.preventDefault()

        try {
          const res = await axios.post('/api/addBlog', {
            title,
            blogImg: imgUrl,
            tags,
            blogContent
          })  
          console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        console.log(title, imgUrl, tags, blogContent);
    }
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    {/* <h3>عنوان مقاله</h3> */}
                    <input
                        name='title'
                        id={'title'}
                        value={title}
                        onChange={(e) => handleChangeTitle(e)}
                        placeholder={'عنوان مقاله'} type={'text'} className={'bg-transparent py-2 px-3 outline-none border-b-2 text-gray-600 w-full border-b-green'} />
                </div>
                <h3>متن وبلاگ</h3>
                <CustomEditor blogContent={blogContent} setBlogContent={setBlogContent} />
                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
                    <div className="w-full flex flex-col gap-5">
                        <h3>تصویر مقاله</h3>
                        <input
                            name={'blogImg'}
                            id={'blogImg'}
                            onChange={(e) => handleChangeImg(e)}
                            type={'file'} />
                    </div>
                    <div className="flex flex-col gap-5 w-full pt-1">
                        <h3>برچسب ها</h3>
                        <input
                            name='tags'
                            id={'tags'}
                            onChange={(e) => handleChangeTag(e)} value={tag} placeholder={'برای افزودن متن را نوشته و دکمه Enter را فشار دهید'} type={'text'} onKeyDown={(e) => handleKeyDown(e)} className={'bg-transparent py-2 px-3 outline-none border-b-2 text-gray-600 w-full border-b-green'} />
                        <div className="flex gap-5 w-full flex-wrap">
                            {tags?.length > 0
                                &&
                                tags?.map((item, index) => (
                                    <Tag tag={item} key={index} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="flex items-end">
                    <SubmitButton style={'py-4'}>
                        <LuSaveAll className="ml-2" size={20} />
                        افزودن وبلاگ
                    </SubmitButton>
                </div>
            </form>
        </>
    )
}

export default BlogForm