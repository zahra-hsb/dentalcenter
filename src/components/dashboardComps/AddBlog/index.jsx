import CustomEditor from "../CustomEditor"

const AddBlog = () => {
    return (
        <>
            <section className="p-10 sm:p-20 flex flex-col gap-5">
                <h4 className="text-xl font-bold">افزودن وبلاگ</h4>
                <div className="border">
                    <CustomEditor />
                </div>
            </section>
        </>
    )
}

export default AddBlog