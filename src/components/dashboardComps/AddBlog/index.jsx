'use client'
import AdminForm from "../AdminForm"
import BlogForm from "../BlogForm"

const AddBlog = () => {

    return (
        <>
            <section className="p-10 sm:p-20 flex flex-col gap-5">
                <h4 className="text-xl font-bold">افزودن وبلاگ</h4>
                <div className="border p-5 rounded-lg w-full bg-white shadow ">
                    <BlogForm />
                </div>
            </section>
        </>
    )
}

export default AddBlog