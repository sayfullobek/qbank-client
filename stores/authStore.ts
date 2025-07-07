import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
  id: string
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: string;
  password: string;
  role: {
    id: number;
    roleName: string;
    authority: string;
  };
  coin: number;
}

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isADMIN: () => boolean;
  isUSER: () => boolean;
}


export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      isADMIN: () => get().user?.role.roleName === "ADMIN",
      isUSER: () => get().user?.role.roleName === "USER",
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), // ✅ MUHIM: endi ma’lumot saqlanadi
    }
  )
);
