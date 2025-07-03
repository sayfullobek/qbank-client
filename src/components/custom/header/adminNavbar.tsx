"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, MagnifyingGlassIcon, BellIcon, UserCircleIcon, Squares2X2Icon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";

export default function AdminNavbar() {
    return (
        <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 h-16">
            <div className="px-4 lg:px-6 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Left */}
                    <div className="flex items-center gap-4 min-w-0">
                        <button
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="lg:hidden text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded border border-gray-300"
                        >
                            <Bars3Icon className="w-7 h-7" />
                        </button>
                        <Link href="/" className="text-xl font-bold flex items-center gap-2">
                            <Image src="/images/logo.svg" alt="Windster Logo" width={28} height={28} className="h-7 w-7" />
                            <span className="font-black tracking-tight text-black">Windster Pro</span>
                        </Link>
                    </div>
                    {/* Center (Search) */}
                    <div className="flex-1 flex justify-center min-w-0">
                        <InputGroup maxW="md" w="full">
                            <InputLeftElement pointerEvents="none">
                                <Icon as={MagnifyingGlassIcon} w={5} h={5} color="gray.400" />
                            </InputLeftElement>
                            <Input
                                type="text"
                                placeholder="Search"
                                bg="white"
                                borderColor="gray.300"
                                _placeholder={{ color: "gray.400" }}
                                _focus={{
                                    borderColor: "cyan.500",
                                    boxShadow: "0 0 0 1.5px #06b6d4"
                                }}
                                size="md"
                                pl="2.5rem"
                                pr="1rem"
                                py="1.5"
                                rounded="lg"
                                fontSize="sm"
                                shadow="sm"
                            />
                        </InputGroup>
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <BellIcon className="w-6 h-6 text-gray-500" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <Squares2X2Icon className="w-6 h-6 text-gray-500" />
                        </button>
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-semibold rounded-lg text-sm px-4 py-2 shadow"
                        >
                            <ShoppingCartIcon className="h-5 w-5" />
                            Buy now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
