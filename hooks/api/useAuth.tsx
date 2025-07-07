'use client'
import { useMutation } from "@tanstack/react-query"
import { loginFunc, registerFunc } from "../../lib/api/auth"
import { useAuthStore } from "../../stores/authStore"
import { setRole, setToken } from "../../utils/auth"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

// login hook 
export const useLogin = () => {
    const { login } = useAuthStore()
    const router = useRouter()
    return useMutation({
        mutationKey: ['loginAuth'],
        mutationFn: loginFunc,
        onSuccess: (res: any) => {
            console.log(res, 'login result with success ✅')
            login(res.data?.role)
            setToken(res.data?.token?.access)
            setRole(res.data?.role)
            if (res.data.role == 'ADMIN') {
                router.push('/admin')
            } else if (res.data.role == 'USER') {
                router.push('/user/profile')
            }
        },
        onError: (err:any) => {
            err ? toast.error('Error fetching: ', err) : toast.error('Error fetching data to server 500*')
        }
    })
}

// register hook
export const useRegister = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['registerAuth'],
        mutationFn: registerFunc,
        onSuccess: (res: any) => {
            console.log(res, 'login result with success ✅')
            setToken(res.data?.token?.access)
            setRole(res.data?.role)
            if (res.data.role == 'ADMIN') {
                router.push('/admin')
            } else if (res.data.role == 'USER') {
                router.push('/user/profile')
            }
        },
        onError: (err:any) => {
            err ? toast.error('Error fetching: ', err) : toast.error('Error fetching data to server 500*')
        }
    })
}