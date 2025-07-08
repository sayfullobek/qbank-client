"use client";

import React from "react";
import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Avatar, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ui/color-mode";
import { useRouter } from "next/navigation";

export const UserNavbar = () => {
  const router = useRouter();
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
            <MenuItem color="red.500" onClick={() => {/* TODO: sign out logic */}}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
