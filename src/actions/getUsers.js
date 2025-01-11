import axios from "axios";


export async function getUsers() {
    try {
        const userRes = axios.get('/api/getAdmins')
        return userRes
    } catch (error) {
        return []
    }
}