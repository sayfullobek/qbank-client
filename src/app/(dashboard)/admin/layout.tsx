'use client'

import "../../globals.css";
import AdminSideBar from "../../../components/custom/SiderBar/sidebar";
import AdminNavbar from "../../../components/custom/header/adminNavbar";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import theme from "../../../../theme/theme";
import AdminFooter from '../../../components/custom/footer/adminFooter';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    
    return (
        <ChakraProvider theme={theme}>
            <div className="flex flex-col min-h-screen" style={{ backgroundColor: bgColor }}>
                <AdminNavbar />
                <div className="flex flex-1">
                    <AdminSideBar />
                    <main
                        className="flex-1 p-4 min-h-[calc(100vh-64px)] mt-16 ml-0 lg:ml-[256px]"
                        style={{ backgroundColor: bgColor }}
                    >
                        {children}
                    </main>
                </div>
                <AdminFooter />
            </div>
        </ChakraProvider>
    );
}