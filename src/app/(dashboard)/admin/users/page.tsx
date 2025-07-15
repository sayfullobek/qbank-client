"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "../../../../../lib/checkToken";

import {
  Box,
  Button,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Stack,
  Badge,
  HStack,
} from "@chakra-ui/react";

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { name: "Alex Lee", email: "alex@example.com", role: "Editor", status: "Active" },
  { name: "Emily Brown", email: "emily@example.com", role: "User", status: "Active" },
];

export default function UsersPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorder = useColorModeValue("gray.300", "gray.600");
  const tableHeadBg = useColorModeValue("gray.50", "gray.700");
  const tableRowBg = useColorModeValue("white", "gray.800");

  return (
    <Box p={4}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        mb={6}
      >
        <Heading size="lg" color={text}>Users</Heading>
        <HStack spacing={3}>
          <Input
            placeholder="Search users..."
            size="sm"
            bg={inputBg}
            borderColor={inputBorder}
            _focus={{
              borderColor: "cyan.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-cyan-500)",
            }}
            maxW="250px"
          />
          {/* <Button colorScheme="cyan" size="sm">+ Add User</Button> */}
        </HStack>
      </Stack>

      <Box
        bg={bg}
        rounded="lg"
        shadow="md"
        border="1px solid"
        borderColor={border}
        overflowX="auto"
      >
        <Table variant="simple">
          <Thead bg={tableHeadBg}>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, idx) => (
              <Tr key={idx} bg={tableRowBg}>
                <Td fontWeight="medium" color={text}>{user.name}</Td>
                <Td color="gray.500">{user.email}</Td>
                <Td color="gray.500">{user.role}</Td>
                <Td>
                  <Badge
                    colorScheme={user.status === "Active" ? "green" : "gray"}
                    variant="subtle"
                    px={2}
                    py={0.5}
                    borderRadius="full"
                  >
                    {user.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <Button variant="ghost" size="sm" colorScheme="cyan">Edit</Button>
                    <Button variant="ghost" size="sm" colorScheme="red">Delete</Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
