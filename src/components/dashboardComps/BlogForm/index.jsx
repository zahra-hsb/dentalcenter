const BlogForm = () => {
    return (
        <>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    <h3>عنوان مقاله</h3>
                    <Input placeholder={'عنوان مقاله'} type={'text'} style={'w-full sm:w-1/2'} />

                </div>
                <h3>متن وبلاگ</h3>
                <CustomEditor />
                <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full h-full">
                    <div className="w-full flex flex-col gap-5">
                        <h3>تصویر مقاله</h3>
                        <Input type={'file'} />
                    </div>
                    <div className="flex flex-col gap-5 w-full pt-1">
                        <h3>برچسب ها</h3>
                        <Input onChange={(e) => handleChangeTag(e)} value={tag} placeholder={'برای افزودن متن را نوشته و دکمه Enter را فشار دهید'} type={'text'} onKeyDown={(e) => handleKeyDown(e)} style={''} />
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
                    <Button link={'/dashboard/blog'} style={'py-4'}>
                        <LuSaveAll className="ml-2" size={20} />
                        افزودن وبلاگ
                    </Button>
                </div>
            </form>
        </>
    )
}

export default BlogForm