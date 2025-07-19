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
  Input,
} from "@chakra-ui/react";
import api from "../../../../../utils/request";
import { useTests, useDeleteTest, useEditTest } from "../../../../../hooks/api/useTests";
import { useQuestions } from "../../../../../hooks/api/useQuestions";

export default function TestsPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTest, setSelectedTest] = useState(null);

  // Edit modal state
  const { isOpen: isEditOpen, onOpen: openEdit, onClose: closeEdit } = useDisclosure();
  const [editTest, setEditTest] = useState(null);
  const [editForm, setEditForm] = useState({
    test_name: "",
    test_mode: "",
    max_questions_per_block: 0,
    is_completed: false,
    is_suspended: false,
    last_question_number: 0,
    start_time: "",
    user: 0,
    questions: [],
  });

  // Questions filter state
  const { questions, loading: questionsLoading, error: questionsError } = useQuestions();
  const [questionFilter, setQuestionFilter] = useState("");

  const filteredQuestions = questions.filter(q =>
    q.text.toLowerCase().includes(questionFilter.toLowerCase())
  );

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const tableHeadBg = useColorModeValue("gray.50", "gray.700");

  const { tests, setTests, loading, error } = useTests();
  const { deleteTestById, loading: deleteLoading } = useDeleteTest();
  const { editTestById, loading: editLoading } = useEditTest();

  const handleDelete = (test) => {
    setSelectedTest(test);
    onOpen();
  };

  const confirmDelete = async () => {
    if (!selectedTest) return;
    const success = await deleteTestById(selectedTest.id);
    if (success) {
      setTests(tests => tests.filter(t => t.id !== selectedTest.id));
      onClose();
    } else {
      alert("Delete failed");
    }
  };

  // Edit logic
  const handleEdit = (test) => {
    setEditTest(test);
    setEditForm({ ...test });
    openEdit();
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editTest) return;
    const updated = await editTestById(editTest.id, editForm);
    if (updated) {
      setTests(tests => tests.map(t => t.id === editTest.id ? { ...t, ...editForm } : t));
      closeEdit();
    } else {
      alert("Edit failed");
    }
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
        {loading ? (
          <Text p={6}>Loading...</Text>
        ) : error ? (
          <Text p={6} color="red.500">{error}</Text>
        ) : tests.length === 0 ? (
          <Text p={6}>No tests found.</Text>
        ) : (
          <Table variant="simple">
            <Thead bg={tableHeadBg}>
              <Tr>
                <Th>ID</Th>
                <Th>Test Name</Th>
                {/* Add more columns as needed */}
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tests.map((test) => (
                <Tr key={test.id}>
                  <Td fontWeight="medium" color={text}>{test.id}</Td>
                  <Td color={text}>{test.test_name}</Td>
                  {/* Add more fields as needed */}
                  <Td>
                    <HStack spacing={2}>
                      <Button variant="ghost" size="sm" colorScheme="blue" onClick={() => router.push(`/admin/tests/${test.id}/view`)}>View</Button>
                      <Button variant="ghost" size="sm" colorScheme="cyan" onClick={() => handleEdit(test)}>Edit</Button>
                      <Button variant="ghost" size="sm" colorScheme="red" onClick={() => handleDelete(test)}>Delete</Button>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>

      {/* Questions Filter and Table */}
      <Box mt={10}>
        <Heading size="md" mb={4} color={text}>Questions</Heading>
        <Input
          placeholder="Filter questions by text..."
          value={questionFilter}
          onChange={e => setQuestionFilter(e.target.value)}
          mb={4}
          maxW="400px"
        />
        <Box bg={bg} borderRadius="lg" shadow="md" border="1px solid" borderColor={border} overflowX="auto">
          {questionsLoading ? (
            <Text p={6}>Loading questions...</Text>
          ) : questionsError ? (
            <Text p={6} color="red.500">{questionsError}</Text>
          ) : filteredQuestions.length === 0 ? (
            <Text p={6}>No questions found.</Text>
          ) : (
            <Table variant="simple">
              <Thead bg={tableHeadBg}>
                <Tr>
                  <Th>ID</Th>
                  <Th>Text</Th>
                  {/* Add more columns as needed */}
                </Tr>
              </Thead>
              <Tbody>
                {filteredQuestions.map((q) => (
                  <Tr key={q.id}>
                    <Td>{q.id}</Td>
                    <Td>{q.text}</Td>
                    {/* Add more fields as needed */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Box>

      {/* Delete Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to delete <b>{selectedTest?.test_name}</b>?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="red" onClick={confirmDelete} isLoading={deleteLoading}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={isEditOpen} onClose={closeEdit} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Test</ModalHeader>
          <form onSubmit={handleEditSubmit}>
            <ModalBody>
              <Stack spacing={3}>
                <Input name="test_name" value={editForm.test_name} onChange={handleEditChange} placeholder="Test Name" required />
                <Input name="test_mode" value={editForm.test_mode} onChange={handleEditChange} placeholder="Test Mode" required />
                <Input name="max_questions_per_block" type="number" value={editForm.max_questions_per_block} onChange={handleEditChange} placeholder="Max Questions per Block" required />
                <Input name="last_question_number" type="number" value={editForm.last_question_number} onChange={handleEditChange} placeholder="Last Question Number" required />
                <Input name="start_time" type="datetime-local" value={editForm.start_time?.slice(0, 16)} onChange={handleEditChange} placeholder="Start Time" required />
                <Input name="user" type="number" value={editForm.user} onChange={handleEditChange} placeholder="User ID" required />
                {/* Checkbox for booleans */}
                <label><input type="checkbox" name="is_completed" checked={editForm.is_completed} onChange={handleEditChange} /> Is Completed</label>
                <label><input type="checkbox" name="is_suspended" checked={editForm.is_suspended} onChange={handleEditChange} /> Is Suspended</label>
                {/* Questions arrayni o'zgartirish uchun alohida UI kerak bo'ladi */}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={closeEdit}>Cancel</Button>
              <Button colorScheme="blue" type="submit" isLoading={editLoading}>Save</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
