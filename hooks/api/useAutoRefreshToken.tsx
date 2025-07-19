import { useEffect } from "react";
import { refreshToken } from "../../lib/api/auth";
import Cookies from "js-cookie";

export function useAutoRefreshToken() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const refresh = Cookies.get("refreshToken");
      if (refresh) {
        try {
          const data = await refreshToken(refresh) as { access: string };
          if (data.access) {
            Cookies.set("access", data.access, { path: "/" });
          }
        } catch (err) {
          // Agar refresh xato bo‘lsa, tokenlarni o‘chirib tashlang
          Cookies.remove("token");
          Cookies.remove("refreshToken");
        }
      }
    }, 60 * 60 * 1000); // 1 soatda bir marta

    return () => clearInterval(interval);
  }, []);
} 