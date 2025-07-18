'use client'

import { getToken, getRole } from "../utils/auth";

export function checkToken(router: any) {
    const token = getToken();
    const role = getRole();

    // Agar hozirgi sahifa /login yoki /register bo'lsa, token tekshirmaslik kerak
    if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/register"
    ) {
        return;
    }

    // Token bo'lmasa, login page ga yo'naltir
    if (!token) {
        router.push("/login");
        return;
    }

    // User admin panelga o'tmoqchi bo'lsa
    if (role === "user" && window.location.pathname.startsWith("/admin")) {
        router.push("/not-authorization");
        return;
    }

    // Admin user panelga o'tmoqchi bo'lsa
    if (role === "admin" && window.location.pathname.startsWith("/user")) {
        router.push("/not-authorization");
        return;
    }
}