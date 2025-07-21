"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spinner,
  IconButton,
  Tooltip,
  Button
} from "@chakra-ui/react";
import { FiEye, FiBookOpen, FiRotateCw, FiTrash } from "react-icons/fi";
import { AutoGet } from "../../../../lib/api/service";
import { UserProgress } from "../../../../types/type";
// import { AutoGet } from "@/lib/api/service";

// Backenddan keladigan progress tipini aniqlaymiz
// type UserProgress = {
//   id: number;
//   is_correct: boolean;
//   selected_option_id?: number;
//   previous_answer_id?: number;
//   created_at: string;
//   user: number;
//   test: number | null;
//   question: number;
// };

const OldTests = () => {
  const [data, setData] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AutoGet<UserProgress[]>("/progress/");
        setData(res);
      } catch (error) {
        console.error("❌ Error fetching progress:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = data.filter((item) =>
    item.question.toString().includes(search)
  );

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Oldingi Testlar
      </Text>

      <Input
        placeholder="Qidirish"
        mb={4}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxW="300px"
      />

      {loading ? (
        <Box textAlign="center" mt={20}>
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box overflowX="auto">
          <Table variant="simple" size="md">
            <Thead bg="blue.900">
              <Tr>
                <Th color="white">#</Th>
                <Th color="white">Test</Th>
                <Th color="white">Savol</Th>
                <Th color="white">To'g'ri</Th>
                <Th color="white">Sana</Th>
                <Th color="white">Amallar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filtered.map((item, idx) => (
                <Tr key={item.id}>
                  <Td>{idx + 1}</Td>
                  <Td>{item.test ?? "Noma'lum"}</Td>
                  <Td>{item.question}</Td>
                  <Td color={item.is_correct ? "green.500" : "red.500"}>
                    {item.is_correct ? "✔" : "❌"}
                  </Td>
                  <Td>{new Date(item.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}</Td>
                  <Td>
                    <Box display="flex" gap={2}>
                      <Tooltip label="Ko'rish">
                        <IconButton
                          icon={<FiEye />}
                          aria-label="View"
                          size="sm"
                        />
                      </Tooltip>
                      <Tooltip label="Qayta ishlash">
                        <IconButton
                          icon={<FiRotateCw />}
                          aria-label="Retry"
                          size="sm"
                        />
                      </Tooltip>
                      <Tooltip label="O'chirish">
                        <IconButton
                          icon={<FiTrash />}
                          aria-label="Delete"
                          size="sm"
                          colorScheme="red"
                        />
                      </Tooltip>
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default OldTests;
