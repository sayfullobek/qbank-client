"use client";

import React from "react";
import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Avatar, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ui/color-mode";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../utils/auth";

export const UserNavbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const router = useRouter();
  const handleSignOut = () => {
    clearAll();
    router.push("/login");
  };
  // Demo user data
  const user = {
    name: "Ulug‘bek Raxmatillayev",
    avatar: "https://ui-avatars.com/api/?name=Ulug'bek+Raxmatillayev&background=random"
  };

  const logoTextColor = useColorModeValue("blue.700", "white");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={6}
      py={3}
      bg="white"
      _dark={{ bg: "gray.900" }}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
      minH="60px"
    >
      {/* Mobile menu button */}
      <Button
        display={{ base: "inline-flex", lg: "none" }}
        variant="ghost"
        onClick={onMenuClick}
        mr={2}
        aria-label="Open menu"
        px={2}
        py={1}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </Button>
      {/* Logo or Title */}
      <Box fontWeight="bold" fontSize="xl" cursor="pointer" onClick={() => router.push("/")}>
        <Text as="span" color={logoTextColor}>Med</Text>
        <Text as="span" bgGradient="linear(to-r, blue.500, blue.300)" bgClip="text">Stone</Text>
      </Box>
      <Flex align="center" gap={2}>
        <ColorModeSwitcher />
        <Menu>
          <MenuButton as={Button} variant="ghost" px={2} py={1} rightIcon={<ChevronDownIcon />} _hover={{ bg: "gray.100" }} _dark={{ _hover: { bg: "gray.800" } }}>
            <Flex align="center" gap={2}>
              <Avatar size="sm" name={user.name} src={user.avatar} />
              <Text display={{ base: "none", md: "block" }} fontWeight="medium">{user.name}</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/user/profile")}>Profile</MenuItem>
            <MenuItem color="red.500" onClick={() => {handleSignOut()}}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
