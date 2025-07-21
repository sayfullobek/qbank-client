"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Input,
    Select,
    Spinner,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { AutoGet } from "../../../../lib/api/service";
import { NoteType } from "../../../../types/type";

const NotesPage = () => {
    const [notes, setNotes] = useState<NoteType[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState("question_id");

    // 🌙 Theme-aware colors
    const bgCard = useColorModeValue("white", "gray.800");
    const boxShadowCard = useColorModeValue("md", "dark-lg");
    const textColor = useColorModeValue("gray.700", "gray.100");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    useEffect(() => {
        const fetchNotes = async () => {
            setLoading(true);
            try {
                const data = await AutoGet<NoteType[]>("/notes");
                setNotes(data);
            } catch (error) {
                console.error("❌ Error fetching notes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    const filteredNotes = notes
        .filter(note =>
            note.content.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "question_id") {
                return (a.question_id || 0) - (b.question_id || 0);
            } else {
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            }
        });

    return (
        <Box maxW="1000px" mx="auto" py={6} px={4}>
            <Box display="flex" justifyContent="space-between" mb={6} flexWrap="wrap" gap={4}>
                <Input
                    placeholder="🔍 Search note..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    w="300px"
                />
                <Select w="200px" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="question_id">Sort by Question ID</option>
                    <option value="created_at">Sort by Created Time</option>
                </Select>
            </Box>

            {loading ? (
                <Box textAlign="center" mt={20}>
                    <Spinner size="xl" />
                </Box>
            ) : filteredNotes.length === 0 ? (
                <Text fontWeight="bold" textAlign="center" color={textColor}>
                    No notes available.
                </Text>
            ) : (
                <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                    {filteredNotes.map((note) => (
                        <Box
                            key={note.id}
                            borderWidth="1px"
                            borderRadius="xl"
                            boxShadow={boxShadowCard}
                            p={4}
                            bg={bgCard}
                            borderColor={borderColor}
                            _hover={{ boxShadow: "xl" }}
                        >
                            <Text fontWeight="bold" fontSize="lg" mb={2} color={textColor}>
                                🧾 Question ID: {note.question_id ?? "—"}
                            </Text>
                            <Text color={textColor} mb={3}>{note.content}</Text>

                            <Box fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                                {note.subject && <Text>📌 Subject: {note.subject}</Text>}
                                {note.system && <Text>🔧 System: {note.system}</Text>}
                                {note.subcategory && <Text>📂 Subcategory: {note.subcategory}</Text>}
                                <Text>🕒 Created: {new Date(note.created_at).toLocaleString()}</Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default NotesPage;
