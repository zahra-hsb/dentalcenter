import Modal from "@/components/globalComponents/Modal"
import { useState } from "react"

const DelAllBtn = ({ items, setItems }) => {

    const [areDelete, setDeleteAll] = useState(false)
    const [isShowModal, setShowModal] = useState(false)

    function handleDeleteAllList() {
        setShowModal(false)
        setItems([])
    }

    function handleShowModal() {
        if (items.length > 0) {
            setShowModal(true)
        } else {
            alert('موردی برای حذف وجود ندارد')
        }
    }

    function handleCloseModal() {
        setShowModal(false)
    }
    return (
        <>
            <button onClick={handleShowModal} className="hover:text-red-500 py-3 transition-all underline duration-300">حذف همه</button>
            {isShowModal && <Modal handleDeleteAllList={handleDeleteAllList} handleCloseModal={handleCloseModal} question={'آیا از حذف همه ادمین ها اطمینان دارید؟'} />}
        </>
    )
}

export default DelAllBtn