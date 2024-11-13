import Modal from "@/components/globalComponents/Modal"
import axios from "axios"
import { useState } from "react"

const DelAllBtn = ({ items, setItems, setMessage }) => {

    const [isShowModal, setShowModal] = useState(false)

    async function handleDeleteAllList() {
        try {
            const response = await axios.delete('/api/deleteAllAdmins')
            if (response.data.isDeleted) {
                setMessage({ message: response.data.message, color: 'green' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            } else {
                setMessage({ message: response.data.message, color: 'red-500' })
                setTimeout(() => {
                    setMessage({ message: '', color: '' })
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }

        setShowModal(false)
        setItems([
            { name: 'وحید گماریان', username: 'vgomrayan', tel: '09121403992' }
        ])
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