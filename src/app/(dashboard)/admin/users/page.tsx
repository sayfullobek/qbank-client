"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../../../utils/request";
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
  Select,
} from "@chakra-ui/react";

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    setLoading(true);
    api.get("/auth/users/")
      .then(res => {
        setUsers(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => {
        setUsers([]);
        setLoading(false);
      });
  }, []);

  // Statuslar ro‘yxatini userlardan avtomatik olish
  const statusList = Array.from(new Set(users.map(u => u.status))).filter(Boolean);

  // Filterlangan userlar
  const filteredUsers = statusFilter === "all"
    ? users
    : users.filter(u => u.status === statusFilter);

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const tableHeadBg = useColorModeValue("gray.50", "gray.700");
  const tableRowBg = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue("cyan.50", "cyan.900");

  return (
    <Box p={4}>
      <Stack direction={{ base: "column", sm: "row" }} justify="space-between" align="center" mb={6}>
        <Heading size="lg" color={text}>Users</Heading>
        <HStack>
          <Input placeholder="Search users..." size="sm" maxW="250px" />
          <Select
            size="sm"
            maxW="150px"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            {statusList.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </Select>
        </HStack>
      </Stack>
      <Box bg={bg} rounded="lg" shadow="md" border="1px solid" borderColor={border} overflowX="auto">
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
            {loading ? (
              <Tr><Td colSpan={5}>Loading...</Td></Tr>
            ) : filteredUsers.length === 0 ? (
              <Tr><Td colSpan={5}>No users found</Td></Tr>
            ) : filteredUsers.map((user, idx) => (
              <Tr
                key={user.id || idx}
                bg={activeIdx === idx ? activeBg : tableRowBg}
                transition="background 0.2s"
              >
                <Td fontWeight="medium" color={text}>{user.name || user.username}</Td>
                <Td color="gray.500">{user.email}</Td>
                <Td color="gray.500">{user.role}</Td>
                <Td>
                  <Badge colorScheme={user.status === "Active" ? "green" : "gray"} variant="subtle" px={2} py={0.5} borderRadius="full">
                    {user.status}
                  </Badge>
                </Td>
                <Td>
                  <Button
                    colorScheme="cyan"
                    size="sm"
                    variant={activeIdx === idx ? "solid" : "outline"}
                    onClick={() => setActiveIdx(idx)}
                  >
                    Show
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
