export interface CardDataProps {
    id?: number | string;
    iconUrl?: string | undefined | null;
    name?: string | undefined | null;
    description?: string | undefined | null;
}


export interface LoginDataType {
    username: string;
    password: string;
}

export interface RegisterDataType {
    email: string;
    username: string;
    password: string;
}