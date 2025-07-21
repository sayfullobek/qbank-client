"use client";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Test } from "../../../../types/type";
import { AutoGet } from "../../../../lib/api/service";
// import { AutoGet } from "@/lib/api/service";
// import { Test } from "@/types/type";

export default function UserTestsPage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");

  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const data = await AutoGet<Test[]>("/tests"); // ✅ Tip kiritilgan
        console.log(data)
        setTests(data);
      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);


  if (loading) {
    return (
      <Box textAlign="center" mt={20}>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Heading mb={6} fontSize="2xl" color={textColor}>
        Available Tests
      </Heading>
      {tests.length === 0 ? (
        <Text color="gray.500">Hozircha testlar mavjud emas.</Text>
      ) : (
        <Stack spacing={6}>
          {tests.map((test) => (
            <Box
              key={test.id}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              p={6}
            >
              <Heading size="md" mb={2} color={textColor}>
                {test.test_name}
              </Heading>
              <Text color="gray.500" mb={1}>
                Mode: {test.test_mode}
              </Text>
              <Text color="gray.500" mb={4}>
                Max Questions per Block: {test.max_questions_per_block}
              </Text>
              <Link href={`/user/tests/${test.id}/takeTest`}>
                <Button colorScheme="blue">Take a test</Button>
              </Link>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
