"use client";
import { Box, Heading, Text, Button, useColorModeValue, Stack } from "@chakra-ui/react";
import Link from "next/link";

const tests = [
  { id: 1, topic: "Medicine Basics", category: "Medicine", },
  { id: 2, topic: "Biology Intro", category: "Biology", },
];

export default function UserTestsPage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Heading mb={6} fontSize="2xl" color={textColor}>Available Tests</Heading>
      <Stack spacing={6}>
        {tests.map(test => (
          <Box key={test.id} bg={cardBg} borderRadius="lg" boxShadow="md" p={6}>
            <Heading size="md" mb={2} color={textColor}>{test.topic}</Heading>
            <Text color="gray.500" mb={4}>Category: {test.category}</Text>
            <Link href={`/user/tests/${test.id}/takeTest`}>
              <Button colorScheme="blue">Take a test</Button>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
} 