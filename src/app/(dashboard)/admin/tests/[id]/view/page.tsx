"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "../../../../../../../utils/request";
import {
  Box, Heading, Text, Stack, Spinner, Table, Tbody, Tr, Td, useColorModeValue
} from "@chakra-ui/react";

export default function AdminTestViewPage() {
  const params = useParams();
  const id = params?.id;
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const text = useColorModeValue("gray.900", "white");

  useEffect(() => {
    if (!id) return;
    api.get(`/tests/${id}/`)
      .then(res => setTest(res.data))
      .catch(() => {})
      .then(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner size="xl" />;

  if (!test) return <Text color="red.500">Test not found</Text>;

  return (
    <Box maxW="600px" mx="auto" py={8} px={4}>
      <Heading mb={6} color={text}>Test Details</Heading>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td fontWeight="bold">Test Name</Td>
            <Td>{test.test_name}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Test Mode</Td>
            <Td>{test.test_mode}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Max Questions per Block</Td>
            <Td>{test.max_questions_per_block}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Is Completed</Td>
            <Td>{test.is_completed ? "Yes" : "No"}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Is Suspended</Td>
            <Td>{test.is_suspended ? "Yes" : "No"}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Last Question Number</Td>
            <Td>{test.last_question_number}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Start Time</Td>
            <Td>{test.start_time}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">User</Td>
            <Td>{test.user}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Questions</Td>
            <Td>
              {Array.isArray(test.questions)
                ? test.questions.join(", ")
                : String(test.questions)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
} 