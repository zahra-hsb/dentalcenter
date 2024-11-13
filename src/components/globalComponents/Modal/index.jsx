const Modal = ({ question, handleCloseModal, handleDeleteAllList }) => {
    return (
        <>
            <div onClick={handleCloseModal} className="w-screen cursor-pointer h-screen fixed top-0 bottom-0 left-0 z-40 bg-darkGreen opacity-20"></div>
            <div className="fixed flex items-center gap-5 justify-center flex-col w-full sm:w-[500px] p-5 h-[200px] bg-white shadow-lg z-50 top-[30%] sm:right-[18%] lg:right-1/3 rounded-lg">
                <p className="text-lg text-center">{question}</p>
                <div className="flex gap-5 items-center justify-center">
                    <button onClick={handleDeleteAllList} className="text-red-500">بله</button>
                    <button onClick={handleCloseModal} className="">خیر</button>
                </div>
            </div>
        </>
    )
}

export default Modal