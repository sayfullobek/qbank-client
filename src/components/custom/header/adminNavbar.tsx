"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
  EllipsisHorizontalIcon,
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Divider,
  IconButton,
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        {/* Left: Menu (always visible) */}
        <HStack spacing={4} minW={0} flex={{ base: "0 0 auto", lg: "none" }}>
          <Icon
            as={Bars3Icon}
            boxSize={7}
            display={{ base: "block", lg: "none" }}
            cursor="pointer"
            onClick={onMenuClick}
            color={textColor}
          />
        </HStack>
        {/* Center: Logo (always centered on mobile) */}
        <Box flex={{ base: "1 1 0%", lg: "none" }} display="flex" justifyContent="center" alignItems="center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={28} height={28} />
            <Text fontWeight="bold" fontSize="xl" color={textColor} display={{ base: "block", lg: "block" }}>
              Windster Pro
            </Text>
          </Link>
        </Box>
        {/* Center: Search (only on desktop) */}
        <Box flex="1" maxW="500px" display={{ base: "none", lg: "block" }}>
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
        {/* Right: Desktop icons */}
        <HStack spacing={3} display={{ base: "none", lg: "flex" }}>
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
        </HStack>
        {/* Right: Mobile ellipsis */}
        <Box display={{ base: "block", lg: "none" }}>
          <IconButton
            icon={<EllipsisHorizontalIcon style={{ width: 28, height: 28 }} />}
            aria-label="Open menu"
            variant="ghost"
            size="lg"
            isRound
            onClick={onOpen}
            bg={isOpen ? "gray.200" : "white"}
            _hover={{ bg: "gray.100", boxShadow: "md" }}
            _active={{ bg: "gray.200" }}
            boxShadow="sm"
          />
          <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent
              borderTopRadius="2xl"
              maxW="sm"
              mx="auto"
              pb={6}
            >
              <Box w="40px" h="5px" bg="gray.300" borderRadius="full" mx="auto" my={2} />
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack align="stretch" spacing={4}>
                  {/* 1. Rang switcher */}
                  <Box>
                    <ColorModeSwitcher />
                  </Box>
                  <Divider />
                  {/* 2. Bildirishnoma */}
                  <Box>
                    <Text fontWeight="bold" mb={1}>Notifications</Text>
                    {notifications.length === 0 ? (
                      <Text color="gray.500">No new notifications</Text>
                    ) : (
                      notifications.map((note, idx) => <Text key={idx}>{note}</Text>)
                    )}
                  </Box>
                  <Divider />
                  {/* 3. App Panel */}
                  <Box>
                    <Text fontWeight="bold" mb={1}>App Panel</Text>
                    <Text as="button" color="cyan.600" onClick={handleAppAction}>Open App Panel</Text>
                  </Box>
                  <Divider />
                  {/* 4. Profil */}
                  <Box>
                    <Text fontWeight="bold" mb={1}>Profile</Text>
                    <Text as="button" color="cyan.600" display="block" onClick={() => router.push("/admin/profile")}>Account settings</Text>
                    <Text as="button" color="cyan.600" display="block" onClick={() => router.push("/admin/profile")}>Admin profile</Text>
                    <Text as="button" color="red.500" display="block" onClick={handleSignOut}>Sign out</Text>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  );
}
