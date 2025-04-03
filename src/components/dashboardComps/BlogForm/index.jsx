"use client"
import dynamic from "next/dynamic"
const CustomEditor = dynamic(() => import("../CustomEditor"), { ssr: false })
import { useEffect, useState } from "react"
import Tag from "../../globalComponents/Tag"
import { LuSaveAll } from "react-icons/lu"
import axios from "axios"
import Alert from "@/components/globalComponents/Alert"
import { useRouter, useSearchParams } from "next/navigation"
import UploadFile from "@/components/globalComponents/UploadFile"
import Image from "next/image"
import SubmitButton from "@/components/globalComponents/SubmitButton"
import useStore from "@/customHooks/store"

const BlogForm = () => {
  const [blogContent, setBlogContent] = useState("")
  const [message, setMessage] = useState({ message: "", color: "" })
  const [tag, setTag] = useState("")
  const [title, setTitle] = useState("")
  const [isEditBlogContent, setEditBlogContent] = useState(false)
  const [tags, setTags] = useState([])
  const [imgUrl, setImgUrl] = useState("")
  const [summary, setSummary] = useState("")
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isEdit, setEdit] = useState(false)
  const [blogData, setBlogData] = useState({})
  const [isUploading, setIsUploading] = useState(false)
  const params = useSearchParams()
  const id = params.get("id")
  const { userInfo } = useStore()

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", selectedFile)
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.data.success) {
        setImgUrl(response.data.url)
        setUploadedFiles((prevFiles) => [...prevFiles, response.data.url])
        setError(null)
      } else {
        setError({ message: "Failed to upload file", color: "red-500" })
      }
    } catch (err) {
      console.error("Error uploading file:", err)
      setError({ message: `Error uploading file: ${err.message}`, color: "red-500" })
    } finally {
      setIsUploading(false)
    }
  }

  const handleUpload = async (file) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file])
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 && tag.trim()) {
      e.preventDefault()
      if (!tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag])
        setTag("")
      }
    }
  }

  function handleChangeTag(e) {
    setTag(e.target.value)
  }

  function handleDeleteTag(title) {
    setTags((prevItems) => prevItems.filter((item) => item !== title))
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const time = new Date().toLocaleDateString("fa-IR")

    if (title === "" || tags.length === 0 || blogContent === "" || summary === "" || imgUrl === "") {
      setMessage({ message: "لطفا فیلدها را کامل پرکنید.", color: "red-500" })
      setTimeout(() => {
        setMessage({ message: "", color: "" })
      }, 5000)
      return
    }

    try {
      const response = await axios.post("/api/addBlog", {
        title,
        blogImg: imgUrl,
        tags,
        summary,
        blogContent,
        author: userInfo?.name,
        date: time,
        selected: false,
      })

      if (response.data.isExist) {
        setMessage({ message: response.data.message, color: "red-500" })
      } else {
        setMessage({ message: response.data.message, color: "green" })
        setTimeout(() => {
          setMessage({ message: "", color: "" })
          router.push("/account/dashboard/blog")
        }, 5000)
      }
    } catch (error) {
      console.log(error)
      setMessage({ message: "خطا در ارسال اطلاعات", color: "red-500" })
    }
  }

  const onEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/editBlog", {
        id,
        title,
        blogImg: imgUrl,
        tags,
        blogContent,
        summary,
      })

      if (!response.data.success) {
        setMessage({ message: response.data.message, color: "red-500" })
      } else {
        setMessage({ message: response.data.message, color: "green" })
        setTimeout(() => {
          setMessage({ message: "", color: "" })
          router.push("/account/dashboard/blog")
        }, 5000)
      }
    } catch (error) {
      console.log(error)
      setMessage({ message: "خطا در ویرایش اطلاعات", color: "red-500" })
    }
  }

  useEffect(() => {
    async function findBlog(id) {
      try {
        const response = await axios.post("/api/getBlog", { id: id })
        const blogInfo = response.data
        setBlogData(blogInfo)
        setEdit(true)
        setTags(blogInfo.tags)
        setBlogContent(blogInfo.blogContent)
        setTitle(blogInfo.title)
        setImgUrl(blogInfo.blogImg)
        setSummary(blogInfo.summary || "")
      } catch (error) {
        console.log(error)
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
      <form onSubmit={isEdit ? onEdit : handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
          <input
            name="title"
            id="title"
            value={title}
            onChange={handleChangeTitle}
            placeholder="عنوان مقاله"
            type="text"
            className="bg-transparent py-2 px-3 outline-none border-b-2 text-gray-600 w-full border-b-green"
          />
        </div>
        <h3>متن وبلاگ</h3>
        <div className="w-full">
          <CustomEditor blogContent={blogContent} setBlogContent={setBlogContent} />
        </div>
        <h3>خلاصه ای از وبلاگ (توضیح کوتاه)</h3>
        <CustomEditor blogContent={summary} setBlogContent={setSummary} />
        <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
          <div className="w-full flex flex-col gap-5">
            <h3>تصویر مقاله</h3>
            <UploadFile handleUpload={handleUpload} handleFileChange={handleFileChange} isUploading={isUploading} />
            {imgUrl && (
              <div className="relative w-full h-64 mt-2">
                <Image src={imgUrl || "/placeholder.svg"} alt="Blog preview" fill className="object-contain" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5 w-full pt-1">
            <h3>برچسب ها</h3>
            <input
              name="tags"
              id="tags"
              onChange={handleChangeTag}
              value={tag}
              placeholder="برای افزودن متن را نوشته و دکمه Enter را فشار دهید"
              type="text"
              onKeyDown={handleKeyDown}
              className="bg-transparent py-2 px-3 outline-none border-b-2 text-gray-600 w-full border-b-green"
            />
            <div className="flex gap-5 w-full flex-wrap">
              {tags?.length > 0 &&
                tags?.map((item, index) => (
                  <Tag handleDeleteTag={() => handleDeleteTag(item)} tag={item} key={index} />
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <SubmitButton style="py-4" disabled={isUploading}>
            <LuSaveAll className="ml-2" size={20} />
            {isEdit ? "ویرایش وبلاگ" : "افزودن وبلاگ"}
          </SubmitButton>
          <button type="button" className="underline hover:text-green" onClick={() => router.back()}>
            بازگشت
          </button>
        </div>
      </form>
      <Alert message={message} />
      {error && <Alert message={error} />}
    </>
  )
}

export default BlogForm

