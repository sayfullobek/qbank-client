'use client'
import { useMutation } from "@tanstack/react-query"
import { loginFunc, registerFunc } from "../../lib/api/auth"
import { useAuthStore } from "../../stores/authStore"
import { getToken, setRefreshToken, setRole, setToken } from "../../utils/auth"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

// login hook 
export const useLogin = () => {
    const { login } = useAuthStore()
    const router = useRouter()
    return useMutation({
        mutationKey: ['loginAuth'],
        mutationFn: loginFunc,
        onSuccess: (res: any, variables) => {
            // Foydalanuvchi adminmi yoki userligini username orqali aniqlash
            const isAdmin = variables.username === 'superadmin';
            setToken(res.data.access)
            setRefreshToken(res.data.refresh)
            // login funksiyasi chaqirilsa, userni saqlash mumkin, hozircha tokenlar saqlanmoqda
            if (isAdmin) {
                router.push('/admin')
            } else {
                router.push('/user')
            }
            toast.success('Siz hisobingizga kirdingiz!')
        },
        onError: (err:any) => {
            err ? toast.error('Error fetching: ', err) : toast.error('Error fetching data to server 500*')
        }
    })
}

// register hook
export const useRegister = () => {
    const router = useRouter()
    const { login } = useAuthStore()
    return useMutation({
        mutationKey: ['registerAuth'],
        mutationFn: registerFunc,
        onSuccess: async (res: any, variables) => {
            // Avtomatik login qilish uchun loginFunc chaqiramiz
            try {
                const loginRes: any = await loginFunc({ username: variables.username, password: variables.password })
                login(loginRes.data?.role)
                setToken(loginRes.data.access)
                setRefreshToken(loginRes.data.refresh)
                setRole(loginRes.data?.role)
                if (loginRes.data.role == 'ADMIN') {
                    router.push('/admin')
                } else if (loginRes.data.role == 'USER') {
                    router.push('/user/profile')
                }
                toast.success('Siz hisobni muvaffaqiyatli yaratdingiz va tizimga kirdingiz!')
            } catch (err: any) {
                toast.error('Avtomatik login amalga oshmadi!')
            }
        },
        onError: (err:any) => {
            console.error(err)
            let errorMsg = err?.response?.data?.message || err?.response?.data || err?.message || 'Error fetching data to server 500*';
            // Check for duplicate user error
            if (err?.response?.data?.email || err?.response?.data?.username) {
                errorMsg = 'Bu hisob allaqachon mavjud';
            } else if (typeof errorMsg !== 'string') {
                errorMsg = JSON.stringify(errorMsg);
            }
            toast.error(errorMsg);
        }
    })
}