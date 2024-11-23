const Tag = ({ tag, handleDeleteTag }) => {
    return (
        <>
            <div className="px-3 py-1 bg-gray-200 hover:text-green relative pr-5">
                {tag}
                <span onClick={handleDeleteTag} className="text-sm text-red-500 absolute top-0 cursor-pointer right-2">x</span>
            </div>
        </>
    )
}

export default Tag