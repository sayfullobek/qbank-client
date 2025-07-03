'use client'

import "../../globals.css";
import AdminSideBar from "../../../components/custom/SiderBar/sidebar";
import AdminNavbar from "../../../components/custom/header/adminNavbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../../../theme/theme";
import AdminFooter from '../../../components/custom/footer/adminFooter';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <div className="flex flex-col min-h-screen">
                <AdminNavbar />
                <div className="flex flex-1">
                    <AdminSideBar />
                    <main className="flex-1 p-4 bg-gray-50 min-h-[calc(100vh-64px)] mt-16  lg:ml-64">
                        {children}
                    </main>
                </div>
                <AdminFooter />
            </div>
        </ChakraProvider>
    );
}