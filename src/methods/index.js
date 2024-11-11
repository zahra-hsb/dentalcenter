import axios from "axios";

export async function getAllAdmins(setItems, errorComp) {
    try {
        const response = await axios.get('/api/getAdmins')
        setItems(response.data)
    } catch (error) {
        errorComp(error)
    }
}

export function errorComp(message) {
    return <> <div className="text-white bg-red-600 p-5 rounded">
        {message}
    </div> </>
}