"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "../../../../../lib/checkToken";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Badge,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  Stack,
} from "@chakra-ui/react";

const medicalTests = [
  { name: "Blood Test", category: "Pathology", status: "Active" },
  { name: "X-Ray", category: "Radiology", status: "Inactive" },
  { name: "MRI Scan", category: "Radiology", status: "Active" },
  { name: "Urine Test", category: "Pathology", status: "Active" },
];

export default function TestsPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTest, setSelectedTest] = useState(null);

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const tableHeadBg = useColorModeValue("gray.50", "gray.700");

  const handleDelete = (test) => {
    setSelectedTest(test);
    onOpen();
  };

  return (
    <Box p={4}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        mb={6}
      >
        <Heading size="lg" color={text}>Medical Tests</Heading>
        <Button colorScheme="cyan" size="sm" onClick={() => router.push("/admin/tests/addnew")}>+ New Test</Button>
      </Stack>

      <Box bg={bg} borderRadius="lg" shadow="md" border="1px solid" borderColor={border} overflowX="auto">
        <Table variant="simple">
          <Thead bg={tableHeadBg}>
            <Tr>
              <Th>Test Name</Th>
              <Th>Category</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {medicalTests.map((test, idx) => (
              <Tr key={idx}>
                <Td fontWeight="medium" color={text}>{test.name}</Td>
                <Td color="gray.500">{test.category}</Td>
                <Td>
                  <Badge colorScheme={test.status === "Active" ? "green" : "gray"}>
                    {test.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <Button variant="ghost" size="sm" colorScheme="cyan">Edit</Button>
                    <Button variant="ghost" size="sm" colorScheme="red" onClick={() => handleDelete(test)}>Delete</Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to delete <b>{selectedTest?.name}</b>?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="red" onClick={onClose}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
