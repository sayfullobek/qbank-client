"use client";

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Switch,
    Text,
    useColorModeValue,
    useToast,
    Checkbox,
    Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "../../../../../../lib/checkToken";
import axios from "axios";
import api from "../../../../../../utils/request";

// 1. Question type
interface Question {
    id: number;
    text: string;
    // add other fields if needed
}

export default function AddTestPage() {
    const router = useRouter();
    const toast = useToast();

    useEffect(() => {
        checkToken(router);
    }, [router]);

    const bg = useColorModeValue("white", "gray.800");
    const text = useColorModeValue("gray.900", "white");
    const border = useColorModeValue("gray.200", "gray.700");
    const questionBg = useColorModeValue("gray.100", "gray.700");

    const [formData, setFormData] = useState({
        id: 2147483647,
        test_name: "",
        test_mode: "",
        max_questions_per_block: 0,
        is_completed: false,
        is_suspended: false,
        last_question_number: 0,
        start_time: new Date().toISOString(),
        user: 0,
        questions: [] as number[],
    });

    const [newQuestion, setNewQuestion] = useState({
        id: 2147483647,
        text: "",
        translated_text: "",
        subject: "",
        system: "",
        subcategory: "",
        explanation: "",
        translated_explanation: "",
        is_used: false,
    });

    // 2. Use correct type for questionList
    const [questionList, setQuestionList] = useState<Question[]>([]);

    const handleAddQuestion = async () => {
        try {
            // Har safar unikal id bering
            const questionWithId = { ...newQuestion, id: Date.now() };
            const res = await api.post("/questions/", questionWithId);
            const createdQuestion = res.data as any as Question;

            setQuestionList([...questionList, createdQuestion]);
            setFormData({
                ...formData,
                questions: [...formData.questions, createdQuestion.id],
            });

            setNewQuestion({
                id: Date.now(), // resetda ham yangi id
                text: "",
                translated_text: "",
                subject: "",
                system: "",
                subcategory: "",
                explanation: "",
                translated_explanation: "",
                is_used: false,
            });

            toast({
                title: "Question added",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                title: "Failed to add question",
                description: "Check your input or server.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleSubmit = async () => {
        try {
            await api.post("/tests/", formData);
            toast({
                title: "Test created",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            router.push("/admin/tests");
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to create test",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={6} maxW="4xl" mx="auto">
            <Button mb={4} colorScheme="gray" variant="outline" onClick={() => router.push("/admin/tests")}>Back</Button>
            <Heading size="lg" mb={6} color={text}>Create New Test</Heading>
            <Stack spacing={4} bg={bg} p={6} rounded="lg" shadow="md" border="1px solid" borderColor={border}>
                <FormControl>
                    <FormLabel>Test Name</FormLabel>
                    <Input value={formData.test_name} onChange={(e) => setFormData({ ...formData, test_name: e.target.value })} />
                </FormControl>

                <FormControl>
                    <FormLabel>Test Mode</FormLabel>
                    <Input value={formData.test_mode} onChange={(e) => setFormData({ ...formData, test_mode: e.target.value })} />
                </FormControl>

                <FormControl>
                    <FormLabel>Max Questions per Block</FormLabel>
                    <Input type="number" value={formData.max_questions_per_block} onChange={(e) => setFormData({ ...formData, max_questions_per_block: Number(e.target.value) })} />
                </FormControl>

                <FormControl display="flex" alignItems="center">
                    <FormLabel mb="0">Is Completed</FormLabel>
                    <Switch isChecked={formData.is_completed} onChange={(e) => setFormData({ ...formData, is_completed: e.target.checked })} />
                </FormControl>

                <FormControl display="flex" alignItems="center">
                    <FormLabel mb="0">Is Suspended</FormLabel>
                    <Switch isChecked={formData.is_suspended} onChange={(e) => setFormData({ ...formData, is_suspended: e.target.checked })} />
                </FormControl>

                <Heading size="md" mt={8}>Add Questions</Heading>
                <Stack spacing={3} border="1px solid" borderColor={border} p={4} rounded="md">
                    <FormControl>
                        <FormLabel>Question Text</FormLabel>
                        <Textarea value={newQuestion.text} onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Translated Text</FormLabel>
                        <Input value={newQuestion.translated_text} onChange={(e) => setNewQuestion({ ...newQuestion, translated_text: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Subject</FormLabel>
                        <Input value={newQuestion.subject} onChange={(e) => setNewQuestion({ ...newQuestion, subject: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>System</FormLabel>
                        <Input value={newQuestion.system} onChange={(e) => setNewQuestion({ ...newQuestion, system: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Subcategory</FormLabel>
                        <Input value={newQuestion.subcategory} onChange={(e) => setNewQuestion({ ...newQuestion, subcategory: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Explanation</FormLabel>
                        <Textarea value={newQuestion.explanation} onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Translated Explanation</FormLabel>
                        <Textarea value={newQuestion.translated_explanation} onChange={(e) => setNewQuestion({ ...newQuestion, translated_explanation: e.target.value })} />
                    </FormControl>
                    <FormControl display="flex" alignItems="center">
                        <FormLabel mb="0">Is Used</FormLabel>
                        <Switch isChecked={newQuestion.is_used} onChange={(e) => setNewQuestion({ ...newQuestion, is_used: e.target.checked })} />
                    </FormControl>
                    <Button onClick={handleAddQuestion} colorScheme="blue">Add Question</Button>
                </Stack>

                <Box mt={4}>
                    <Text mb={2} fontWeight="semibold">Selected Questions: {formData.questions.length}</Text>
                    <Stack spacing={2}>
                        {questionList.map((q, idx) => (
                            <Box key={q.id} bg={questionBg} p={3} rounded="md">
                                <Text>{q.text}</Text>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                <Button colorScheme="green" onClick={handleSubmit}>Create Test</Button>
            </Stack>
        </Box>
    );
}
