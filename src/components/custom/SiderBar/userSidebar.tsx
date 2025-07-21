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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            <Text as="span" color={sidebarText} className="ms-3">Profile</Text>
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium mt-4">
                    <li>
                        <Link href="/user/flashcards" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: iconColor }} className="bi bi-card-text" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                            </svg>

                            <Text as="span" color={sidebarText} className="ms-3">Flashcard</Text>
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium mt-4">
                    <li>
                        <Link href="/user/notes" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal" viewBox="0 0 16 16">
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                            </svg>

                            <Text as="span" color={sidebarText} className="ms-3">Notes</Text>
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium mt-4">
                    <li>
                        <Link href="/user/progress" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>

                            <Text as="span" color={sidebarText} className="ms-3">Oldingi testlar</Text>
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium mt-4">
                    <li>
                        <Link href="/user/create-test" className="flex items-center p-2 rounded-lg group" style={{ color: sidebarText }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-check" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                            </svg>
                            <Text as="span" color={sidebarText} className="ms-3">Test yaratish</Text>
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
