'use client'
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('../CustomEditor'), { ssr: false });
import { useEffect, useState } from "react"
import Tag from "../../globalComponents/Tag"
import Button from "../../globalComponents/Button"
import { LuSaveAll } from "react-icons/lu";
import { useForm } from "react-hook-form";
import SubmitButton from '@/components/globalComponents/SubmitButton';
import axios from 'axios';
import Alert from '@/components/globalComponents/Alert';
import { useRouter, useSearchParams } from 'next/navigation';
import UploadFile from '@/components/globalComponents/UploadFile';
import Link from 'next/link';
import Image from 'next/image';

const BlogForm = () => {
    const [blogContent, setBlogContent] = useState('')
    const [message, setMessage] = useState({ message: '', color: '' })
    const [tag, setTag] = useState('')
    const [title, setTitle] = useState('')
    const [isEditBlogContent, setEditBlogContent] = useState(false)
    const [tags, setTags] = useState([])
    const [imgUrl, setImgUrl] = useState('')
    const [summary, setSummary] = useState('')
    const router = useRouter()
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [isEdit, setEdit] = useState(false)
    const [blogData, setBlogData] = useState({})
    const params = useSearchParams()
    const id = params.get('id')


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
        setError(null);
        const value = event.target.value;
        const replacedValue = value.replace(/^.*[\\/]/, '');
        const url = 'https://ecomerce.storage.iran.liara.space/' + replacedValue
        setImgUrl(url)
    };
    const handleUpload = (file) => {
        setUploadedFiles((prevFiles) => [...prevFiles, file]);
    };
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
    async function handleDeleteTag(title) {
        console.log(title);

        // try {
        //     const res = await axios.delete('/api/deleteTag', { title })
        //     console.log(res.data);
        // } catch (error) {
        //     console.log(error);
        // }
        setTags(prevItems => prevItems.filter(item => item !== title))
    }
    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }


    async function handleSubmit(e) {
        const author = localStorage.getItem('name')
        e.preventDefault()
        const time = new Date().toLocaleDateString('fa-IR');
        console.log(time);
        if (title === '' || tags === '' || blogContent === '' || summary === '' || imgUrl === '') {
            setMessage({ message: 'لطفا فیلدها را کامل پرکنید.', color: 'red-500' })
            setTimeout(() => {
                setMessage({ message: '', color: '' })
            }, 5000)
        } else {

            try {
                const response = await axios.post('/api/addBlog', {
                    title,
                    blogImg: imgUrl,
                    tags,
                    summary,
                    blogContent,
                    author,
                    date: time,
                    selected: false
                })
                if (response.data.isExist) {
                    setMessage({ message: response.data.message, color: 'red-500' })
                    setTimeout(() => {
                        setMessage({ message: '', color: '' })
                    }, 5000)
                } else {
                    setMessage({ message: response.data.message, color: 'green' })
                    setTimeout(() => {
                        setMessage({ message: '', color: '' })
                        router.push('/account/dashboard/blog')
                    }, 5000)
                }
            } catch (error) {
                console.log(error);
            }
            console.log(title, imgUrl, tags, blogContent, summary);
        }
    }

    function handleEditBlogContent() {
        setEditBlogContent(true)
    }
    const onEdit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/editBlog', {
                id,
                title,
                blogImg: imgUrl,
                tags,
                blogContent,
                summary
                // author,
                // date: time,
                // selected: false
            })
            if (!response.data.success) {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                    router.push('/account/dashboard/blog')
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        async function findBlog(id) {
            try {
                const response = await axios.post('/api/getBlog', { id: id })
                const blogInfo = response.data
                setBlogData(blogInfo)
                setEdit(true)
                setTags(blogInfo.tags)
                setBlogContent(blogInfo.blogContent)
                setTitle(blogInfo.title)
            } catch (error) {
                console.log(error);
            }
        }
        if (id) {
            findBlog(id)
        } else {
            setEdit(false)
        }
    }, [id])

    return (
        <>
            <form onSubmit={isEdit ? (e) => onEdit(e) : (e) => handleSubmit(e)} className="flex flex-col gap-5">
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
                <div className='w-full'>
                    {/* <div className='text-sm font-thin text-gray-500 leading-6' dangerouslySetInnerHTML={{ __html: blogContent }}>
                                    </div> */}
                    <CustomEditor blogContent={blogContent} setBlogContent={setBlogContent} />
                </div>
                <h3>خلاصه ای از وبلاگ (توضیح کوتاه)</h3>
                <CustomEditor blogContent={summary} setBlogContent={setSummary} />
                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
                    <div className="w-full flex flex-col gap-5">
                        <h3>تصویر مقاله</h3>
                        <UploadFile handleUpload={handleUpload} handleFileChange={handleFileChange} />
                        {isEdit && <Image src={imgUrl} width={200} height={200} alt='' />}
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
                                    <Tag handleDeleteTag={() => handleDeleteTag(item)} tag={item} key={index} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="flex items-center gap-5 ">
                    <SubmitButton style={'py-4'}>
                        <LuSaveAll className="ml-2" size={20} />
                        {isEdit ? 'ویرایش وبلاگ' :
                            'افزودن وبلاگ'
                        }
                    </SubmitButton>
                    <button className="underline hover:text-green" onClick={() => router.back()}>
                        بازگشت
                    </button>
                </div>

            </form>
            <Alert message={message} />
            <Alert message={error} />
        </>
    )
}

export default BlogForm