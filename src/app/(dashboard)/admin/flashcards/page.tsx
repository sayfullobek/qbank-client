"use client";

import { useEffect, useState } from "react";
import api from "../../../../../utils/request";
import {
  Box, Button, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue, Stack, Select, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";

interface Flashcard {
  id: number;
  front: string;
  back: string;
  subject: string;
  system: string;
  subcategory: string;
  difficulty: string;
  last_reviewed: string;
  next_review: string;
}

const initialForm: Omit<Flashcard, "id"> = {
  front: "",
  back: "",
  subject: "",
  system: "",
  subcategory: "",
  difficulty: "Easy",
  last_reviewed: new Date().toISOString(),
  next_review: new Date().toISOString(),
};

export default function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = () => {
    setLoading(true);
    api.get("/flashcards/")
      .then(res => {
        setFlashcards(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => {
        setFlashcards([]);
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editId) {
      await api.put(`/flashcards/${editId}`, form);
    } else {
      await api.post("/flashcards/", form);
    }
    setForm(initialForm);
    setEditId(null);
    fetchFlashcards();
  };

  const handleEdit = (card: Flashcard) => {
    setEditId(card.id);
    setForm({ ...card });
  };

  const handleDelete = async () => {
    if (deleteId) {
      await api.delete(`/flashcards/${deleteId}`);
      setDeleteId(null);
      fetchFlashcards();
    }
  };

  const handlePatch = async (id: number, data: Partial<Flashcard>) => {
    await api.patch(`/flashcards/${id}`, data);
    fetchFlashcards();
  };

  const handleUpdateDifficulty = async (id: number, difficulty: string) => {
    await api.post(`/flashcards/${id}/update-difficulty/`, { difficulty });
    fetchFlashcards();
  };

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const tableHeadBg = useColorModeValue("gray.50", "gray.700");
  const tableRowBg = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue("cyan.50", "cyan.900");

  return (
    <Box p={4}>
      <Stack direction={{ base: "column", sm: "row" }} justify="space-between" align="center" mb={6}>
        <Heading size="lg" color={text}>Flashcards</Heading>
      </Stack>
      <Box bg={bg} rounded="lg" shadow="md" border="1px solid" borderColor={border} overflowX="auto" mb={8}>
        <Stack p={4} spacing={4}>
          <FormControl>
            <FormLabel>Front</FormLabel>
            <Input name="front" value={form.front} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Back</FormLabel>
            <Textarea name="back" value={form.back} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input name="subject" value={form.subject} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>System</FormLabel>
            <Input name="system" value={form.system} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Subcategory</FormLabel>
            <Input name="subcategory" value={form.subcategory} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Difficulty</FormLabel>
            <Select name="difficulty" value={form.difficulty} onChange={handleChange}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Last Reviewed</FormLabel>
            <Input name="last_reviewed" type="datetime-local" value={form.last_reviewed.slice(0, 16)} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Next Review</FormLabel>
            <Input name="next_review" type="datetime-local" value={form.next_review.slice(0, 16)} onChange={handleChange} />
          </FormControl>
          <Button colorScheme="cyan" onClick={handleSubmit}>{editId ? "Update" : "Add"} Flashcard</Button>
        </Stack>
      </Box>
      <Box bg={bg} rounded="lg" shadow="md" border="1px solid" borderColor={border} overflowX="auto">
        <Table variant="simple">
          <Thead bg={tableHeadBg}>
            <Tr>
              <Th>Front</Th>
              <Th>Back</Th>
              <Th>Subject</Th>
              <Th>System</Th>
              <Th>Subcategory</Th>
              <Th>Difficulty</Th>
              <Th>Last Reviewed</Th>
              <Th>Next Review</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Tr><Td colSpan={9}>Loading...</Td></Tr>
            ) : flashcards.length === 0 ? (
              <Tr><Td colSpan={9}>No flashcards found</Td></Tr>
            ) : flashcards.map((card, idx) => (
              <Tr key={card.id} bg={activeIdx === idx ? activeBg : tableRowBg}>
                <Td>{card.front}</Td>
                <Td>{card.back}</Td>
                <Td>{card.subject}</Td>
                <Td>{card.system}</Td>
                <Td>{card.subcategory}</Td>
                <Td>{card.difficulty}</Td>
                <Td>{card.last_reviewed}</Td>
                <Td>{card.next_review}</Td>
                <Td>
                  <HStack spacing={1}>
                    <Button size="xs" colorScheme="blue" onClick={() => handleEdit(card)}>Edit</Button>
                    <Button size="xs" colorScheme="red" onClick={() => { setDeleteId(card.id); onOpen(); }}>Delete</Button>
                    <Button size="xs" colorScheme="cyan" variant="outline" onClick={() => handlePatch(card.id, { ...card, front: card.front + " (patched)" })}>Patch</Button>
                    <Select size="xs" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </Select>
                    <Button size="xs" colorScheme="teal" onClick={() => handleUpdateDifficulty(card.id, difficulty)}>Update Difficulty</Button>
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
          <ModalBody>Are you sure you want to delete this flashcard?</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
} 