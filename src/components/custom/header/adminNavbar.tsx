"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Box,
  Text,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ui/color-mode";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../utils/auth";
import { useState } from "react";

export default function AdminNavbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const inputBg = useColorModeValue("white", "gray.700");
  const menuBg = useColorModeValue("white", "gray.800");
  const router = useRouter();
  const [notifications, setNotifications] = useState(["New test submitted", "New user registered"]);

  const handleSignOut = () => {
    clearAll();
    router.push("/login");
  };

  const handleAppAction = () => {
    alert("Launching app panel...");
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="16"
      zIndex="50"
      bg={bgColor}
      px={{ base: 4, lg: 6 }}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center" h="full">
        {/* Left */}
        <HStack spacing={4} minW={0}>
          <Icon
            as={Bars3Icon}
            boxSize={7}
            display={{ base: "block", lg: "none" }}
            cursor="pointer"
            onClick={onMenuClick}
            color={textColor}
          />
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={28} height={28} />
            <Text fontWeight="bold" fontSize="xl" color={textColor}>
              Windster Pro
            </Text>
          </Link>
        </HStack>

        {/* Center: Search */}
        <Box flex="1" maxW="500px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MagnifyingGlassIcon} w={5} h={5} color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              bg={inputBg}
              borderColor={borderColor}
              _placeholder={{ color: "gray.400" }}
              _focus={{ borderColor: "cyan.500", boxShadow: "0 0 0 1.5px #06b6d4" }}
              size="md"
              pl="2.5rem"
              pr="1rem"
              py="1.5"
              rounded="lg"
              fontSize="sm"
              shadow="sm"
            />
          </InputGroup>
        </Box>

        {/* Right: Icons & Profile */}
        <HStack spacing={3}>
          <ColorModeSwitcher />

          {/* Notification */}
          <Menu>
            <MenuButton
              p={2}
              rounded="full"
              _hover={{ bg: hoverBgColor }}
              bg={bgColor}
            >
              <BellIcon className="w-6 h-6" />
            </MenuButton>
            <MenuList bg={menuBg}>
              {notifications.length === 0 ? (
                <MenuItem disabled>No new notifications</MenuItem>
              ) : (
                notifications.map((note, idx) => <MenuItem key={idx}>{note}</MenuItem>)
              )}
            </MenuList>
          </Menu>

          {/* App panel */}
          <Menu>
            <MenuButton
              p={2}
              rounded="full"
              _hover={{ bg: hoverBgColor }}
              bg={bgColor}
            >
              <Squares2X2Icon className="w-6 h-6" />
            </MenuButton>
            <MenuList bg={menuBg}>
              <MenuItem onClick={handleAppAction}>Open App Panel</MenuItem>
              <MenuItem onClick={() => alert("Docs coming soon")}>Documentation</MenuItem>
            </MenuList>
          </Menu>

          {/* Avatar */}
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

          {/* <Link
            href="/pricing"
            className="inline-flex items-center gap-2 font-semibold rounded-lg text-sm px-4 py-2 shadow"
            style={{ color: "white", backgroundColor: "#0891b2" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0e7490"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0891b2"}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Buy now
          </Link> */}
        </HStack>
      </Flex>
    </Box>
  );
}
