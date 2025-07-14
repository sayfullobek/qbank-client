"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function NotAuthorizationPage() {
  const router = useRouter();
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" px={4} textAlign="center">
      <Heading color="red.500" mb={4} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>Access Denied</Heading>
      <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} mb={6}>You do not have permission to view this page.</Text>
      <Button colorScheme="blue" size={{ base: 'md', md: 'lg' }} onClick={() => router.push("/login")}>Go to Login</Button>
    </Box>
  );
} 