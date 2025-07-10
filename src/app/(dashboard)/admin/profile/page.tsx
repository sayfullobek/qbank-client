"use client";
import { Box, Heading, Text, Avatar, Button, useColorModeValue, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../../utils/auth";

export default function AdminProfilePage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const router = useRouter();

  const handleSignOut = () => {
    clearAll();
    router.push("/login");
  };

  return (
    <Box maxW="600px" mx="auto" py={10} px={4}>
      <Box bg={cardBg} borderRadius="lg" boxShadow="md" p={8} textAlign="center">
        <Avatar size="2xl" name="Admin" src="https://randomuser.me/api/portraits/men/32.jpg" mb={4} />
        <Heading mb={2} color={textColor}>Admin Name</Heading>
        <Text color="gray.500" mb={6}>superadmin@example.com</Text>
        <Stack direction="row" spacing={4} justify="center">
          <Button colorScheme="blue" variant="solid">Edit Profile</Button>
          <Button colorScheme="red" variant="outline" onClick={handleSignOut}>Sign Out</Button>
        </Stack>
      </Box>
    </Box>
  );
} 