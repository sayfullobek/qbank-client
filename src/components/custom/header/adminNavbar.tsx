'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  VStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { BellIcon} from '@heroicons/react/24/outline';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ColorModeSwitcher } from '../../ui/color-mode';

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        bg={useColorModeValue('white', 'gray.800')}
        px={4}
        py={3}
        shadow="md"
        align="center"
        justify="space-between"
        position="sticky"
        top="0"
        zIndex="999"
      >
        {/* Logo */}
        <HStack spacing={3}>
          <IconButton
            ref={btnRef}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            }
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            aria-label="Open Menu"
            variant="ghost"
          />
          <Link href="/">
            <HStack>
              <Image src="/images/logo.svg" alt="Medical Admin" width={28} height={28} />
              <Text fontWeight="bold" fontSize="lg" display={{ base: 'none', md: 'block' }}>
                MedAdmin
              </Text>
            </HStack>
          </Link>
        </HStack>

        {/* Search input (hidden on small) */}
        <Box w="40%" display={{ base: 'none', md: 'block' }}>
          <Input placeholder="Search..." />
        </Box>

        {/* Right side */}
        <HStack spacing={3}>
          <ColorModeSwitcher />

          {/* Notifications */}
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BellIcon className="w-5 h-5" />}
              variant="ghost"
              aria-label="Notifications"
            />
            <MenuList>
              <MenuItem>New patient registered</MenuItem>
              <MenuItem>Lab result available</MenuItem>
              <MenuItem>Staff meeting 3PM</MenuItem>
            </MenuList>
          </Menu>

          {/* User profile */}
          <Menu>
            <MenuButton>
              <Avatar size="sm" name="John Doe" src="/images/avatar.jpg" />
            </MenuButton>
            <MenuList>
              <VStack align="start" px={4} py={2}>
                <Text fontWeight="bold">John Doe</Text>
                <Text fontSize="sm" color="gray.500">Admin</Text>
              </VStack>
              <MenuItem as={Link} href="/admin/profile">Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem color="red.500">Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Button as={Link} href="/" w="full" variant="ghost">
                Dashboard
              </Button>
              <Button as={Link} href="/patients" w="full" variant="ghost">
                Patients
              </Button>
              <Button as={Link} href="/appointments" w="full" variant="ghost">
                Appointments
              </Button>
              <Button as={Link} href="/staff" w="full" variant="ghost">
                Staff
              </Button>
              <Button as={Link} href="/settings" w="full" variant="ghost">
                Settings
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
