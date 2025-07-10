"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, MagnifyingGlassIcon, BellIcon, Squares2X2Icon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Input, InputGroup, InputLeftElement, Icon, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Avatar, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ui/color-mode";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../utils/auth";

export default function AdminNavbar() {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const hoverBgColor = useColorModeValue("gray.100", "gray.700");
    const buttonBg = useColorModeValue("white", "gray.800");
    const buttonHoverBg = useColorModeValue("gray.100", "gray.700");
    const menuBg = useColorModeValue("white", "gray.800");
    const router = useRouter();

    const handleSignOut = () => {
      clearAll();
      router.push("/login");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 h-16" style={{ backgroundColor: bgColor, borderBottom: `1px solid ${borderColor}` }}>
            <div className="px-4 lg:px-6 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Left */}
                    <div className="flex items-center gap-4 min-w-0">
                        <button
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="lg:hidden cursor-pointer p-2 rounded border"
                            style={{ color: textColor, backgroundColor: buttonBg, borderColor: borderColor }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverBg}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonBg}
                        >
                            <Bars3Icon className="w-7 h-7" />
                        </button>
                        <Link href="/" className="text-xl font-bold flex items-center gap-2" style={{ color: textColor }}>
                            <Image src="/images/logo.svg" alt="Windster Logo" width={28} height={28} className="h-7 w-7" />
                            <span className="font-black tracking-tight">Windster Pro</span>
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
                                bg={useColorModeValue("white", "gray.700")}
                                borderColor={useColorModeValue("gray.300", "gray.600")}
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
                        <ColorModeSwitcher />
                        <button className="p-2 rounded-full" style={{ color: textColor, backgroundColor: buttonBg }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverBg}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonBg}
                        >
                            <BellIcon className="w-6 h-6" />
                        </button>
                        <button className="p-2 rounded-full" style={{ color: textColor, backgroundColor: buttonBg }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverBg}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonBg}
                        >
                            <Squares2X2Icon className="w-6 h-6" />
                        </button>
                        <Menu>
                          <MenuButton as={Box} cursor="pointer">
                            <Avatar size="sm" name="Admin" src="https://randomuser.me/api/portraits/men/32.jpg" />
                          </MenuButton>
                          <MenuList bg={menuBg}>
                            <MenuItem onClick={() => router.push("/admin/profile")}>Account settings</MenuItem>
                            <MenuItem onClick={() => router.push("/admin/profile")}>Admin profile</MenuItem>
                            <MenuItem onClick={handleSignOut} color="red.500">Sign out</MenuItem>
                          </MenuList>
                        </Menu>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 font-semibold rounded-lg text-sm px-4 py-2 shadow"
                            style={{ color: "white", backgroundColor: "#0891b2" }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0e7490"}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0891b2"}
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
