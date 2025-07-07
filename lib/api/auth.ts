
import axios from "axios"
import api from "../../utils/request"
import { LoginDataType, RegisterDataType } from "../../types/type"

// login qilish uchun axios sorovi
export const loginFunc = async (data: LoginDataType) => {
    const response = await api.post('/auth/jwt/create/', data)
    return response
} 

// register uchun axios sorovi
export const registerFunc = async (data: RegisterDataType) => {
    const response = await api.post('/auth/users/')
    return response
}