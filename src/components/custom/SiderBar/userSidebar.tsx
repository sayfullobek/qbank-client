"use client";

import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const UserSidebar = () => {
    const sidebarBg = useColorModeValue('white', '#111827');
    const sidebarText = useColorModeValue('gray.900', 'white');
    const iconColor = useColorModeValue('#6B7280', '#A0AEC0');

    return (
        <div style={{ width: 256, minHeight: '100vh', position: 'fixed', top: '60px', left: 0, zIndex: 40 }}>
            <div className="h-full px-3 py-4 overflow-y-auto" style={{ background: sidebarBg, height: '100vh' }}>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/user" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg className="w-5 h-5 transition duration-75" style={{ color: iconColor }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <Text as="span" color={sidebarText} className="ms-3">Dashboard</Text>
                        </Link>
                    </li>
                    <li>
                        <Link href="/user/profile" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg className="shrink-0 w-5 h-5 transition duration-75" style={{ color: iconColor }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <Text as="span" color={sidebarText} className="ms-3">Profile</Text>
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium mt-4">
                    <li>
                        <Link href="/user/tests" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg className="w-5 h-5 transition duration-75" style={{ color: iconColor }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm0 2h12v10H4V5Zm2 2v2h2V7H6Zm0 4v2h2v-2H6Zm4-4v2h2V7h-2Zm0 4v2h2v-2h-2Z" />
                            </svg>
                            <Text as="span" color={sidebarText} className="ms-3">Tests</Text>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
