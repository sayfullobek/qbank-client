"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function NotAuthorizationPage() {
  const router = useRouter();
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Heading color="red.500" mb={4}>Access Denied</Heading>
      <Text fontSize="lg" mb={6}>You do not have permission to view this page.</Text>
      <Button colorScheme="blue" onClick={() => router.push("/login")}>Go to Login</Button>
    </Box>
  );
} 