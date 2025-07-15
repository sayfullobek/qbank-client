"use client";

import {
  Box,
  Heading,
  Text,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  InputGroup,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../../utils/auth";
import { useState } from "react";

export default function AdminProfilePage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const router = useRouter();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignOut = () => {
    clearAll();
    router.push("/login");
  };

  const handleUpdateProfile = () => {
    toast({
      title: "Profile updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password changed successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="700px" mx="auto" py={10} px={4}>
      <Box bg={cardBg} borderRadius="lg" boxShadow="md" p={8}>
        <Stack align="center" mb={6}>
          <Avatar size="2xl" name="Admin" src="https://randomuser.me/api/portraits/men/32.jpg" />
          <Heading size="lg" color={textColor}>Admin Name</Heading>
          <Text color="gray.500">superadmin@example.com</Text>
        </Stack>

        <Stack spacing={6}>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Admin Name" />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="superadmin@example.com" />
            <FormHelperText>We&#39;ll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="+998 90 123 45 67" />
          </FormControl>

          <FormControl>
            <FormLabel>Upload Profile Image</FormLabel>
            <Input type="file" accept="image/*" />
          </FormControl>

          <Button colorScheme="blue" onClick={handleUpdateProfile}>Update Profile</Button>
        </Stack>

        <Divider my={10} />

        <Heading size="md" mb={4} color={textColor}>Change Password</Heading>
        <Stack spacing={5}>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input type="password" placeholder="Enter current password" />
          </FormControl>

          <FormControl>
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} placeholder="Enter new password" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button colorScheme="teal" onClick={handleChangePassword}>Update Password</Button>
        </Stack>

        <Divider my={10} />

        <Stack direction="row" justify="center">
          <Button colorScheme="red" variant="outline" onClick={handleSignOut}>Sign Out</Button>
        </Stack>
      </Box>
    </Box>
  );
}
