// cookie ga token qoshamz
export const setToken = (token: string) => {
    if (!token) return;
    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `token=${token}; path=/; expires=${oneWeekFromNow};`;
};
export const setRefreshToken = (token: string) => {
    if (!token) return;
    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `refreshToken=${token}; path=/; expires=${oneWeekFromNow};`;
};

// cookega role qoshamz
export const setRole = (role: string) => {
    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `role=${role}; path=/; expires=${oneWeekFromNow};`;
};

// tokeni get qilish uhcn
export const getToken = (): string | null => {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split("; ");
    for (let i = cookies.length - 1; i >= 0; i--) {
        const [name, value] = cookies[i].split("=");
        if (name === "token" && value) return value;
    }
    return null;
};

// role ni cookie dan get qilish 
export const getRole = (): string | null => {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split("; ");
    for (let i = cookies.length - 1; i >= 0; i--) {
        const [name, value] = cookies[i].split("=");
        if (name === "role" && value) return value;
    }
    return null;
};


// tokenni ochiramz
export const removeToken = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
};

// cookieni barchasini tozalaymz
export const clearAll = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    document.cookie = "role=; Max-Age=0; path=/;";
};
