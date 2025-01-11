'use server'
import axios from "axios";


export async function getUsers() {
    try {
        console.log(userRes);
        return userRes.data
    } catch (error) {
        return []
    }
}