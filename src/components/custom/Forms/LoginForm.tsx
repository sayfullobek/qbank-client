"use client";

import {
    Box,
    Button,
    Input,
    Text,
    VStack,
    Heading,
    useColorModeValue,
    IconButton,
    useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLogin } from "../../../../hooks/api/useAuth";
import PasswordInput from "../../ui/password-input";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { FaUserMd } from "react-icons/fa";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const loginMutation = useLogin();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate(loginData);
    };

    // Color mode styles
    const bgColor = useColorModeValue("gray.100", "#1E2A30");
    const boxColor = useColorModeValue("white", "#2B3E46");
    const textColor = useColorModeValue("gray.700", "white");
    const labelColor = useColorModeValue("gray.600", "gray.400");
    const inputBorder = "#00FFF7";
    const buttonText = "#00FFF7";

    return (
        <Box
            bg={bgColor}
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
        >
            <Box
                bg={boxColor}
                p={10}
                borderRadius="md"
                boxShadow="dark-lg"
                w="full"
                maxW={{ base: "90%", md: "500px", lg: "600px" }}
                textAlign="center"
                position="relative"
            >
                {/* Back to Home Button */}
                <IconButton
                    aria-label="Back to Home"
                    icon={<ArrowBackIcon />}
                    size="sm"
                    position="absolute"
                    top="15px"
                    left="15px"
                    onClick={() => router.push("/")}
                    bg="transparent"
                    color={textColor}
                    _hover={{ color: buttonText }}
                />

                {/* Doctor Icon */}
                <Box mb={4} display="flex" justifyContent="center">
                    <FaUserMd
                        style={{
                            fontSize: "60px",
                            background: "linear-gradient(to bottom, #00F0A8, #00C6FB)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    />
                </Box>

                {/* Title */}
                <Heading mb={8} fontSize="2xl" color={textColor} letterSpacing="1px">
                    DOCTOR PANEL
                </Heading>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <VStack spacing={6}>
                        {/* Username */}
                        <Box w="full" textAlign="left">
                            <Text fontSize="sm" color={labelColor} mb={1}>
                                USERNAME
                            </Text>
                            <Input
                                id="username"
                                variant="flushed"
                                placeholder="Enter username"
                                value={loginData.username}
                                onChange={handleChange}
                                borderBottom={`2px solid ${inputBorder}`}
                                _placeholder={{ color: "gray.500" }}
                                color={textColor}
                                focusBorderColor={inputBorder}
                            />
                        </Box>

                        {/* Password */}
                        <Box w="full" textAlign="left">
                            <Text fontSize="sm" color={labelColor} mb={1}>
                                PASSWORD
                            </Text>
                            <PasswordInput
                                id="password"
                                value={loginData.password}
                                onChange={handleChange}
                                borderBottom={`2px solid ${inputBorder}`}
                                focusBorderColor={inputBorder}
                                color={textColor}
                                variant="flushed"
                            />
                        </Box>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            mt={4}
                            bg="transparent"
                            border={`1px solid ${buttonText}`}
                            color={buttonText}
                            _hover={{ bg: buttonText, color: bgColor }}
                            isLoading={loginMutation.isPending}
                            loadingText="Logging in..."
                            w="full"
                        >
                            LOGIN
                        </Button>
                        <Box
                            w="full"
                            textAlign="center"
                            mt={4}
                            display="flex"
                            flexDirection="column"
                            gap={2}
                        >
                            <Text fontSize="sm" color={labelColor}>
                                <Button
                                    variant="link"
                                    color={buttonText}
                                    onClick={() => router.push("/forgot-password")}
                                >
                                    Forgot Password?
                                </Button>
                            </Text>
                            <Text fontSize="sm" color={labelColor}>
                                Don’t have an account?{" "}
                                <Button
                                    variant="link"
                                    color={buttonText}
                                    onClick={() => router.push("/register")}
                                >
                                    Register
                                </Button>
                            </Text>
                        </Box>
                    </VStack>
                </form>
            </Box>
        </Box>
    );
};

export default LoginForm;
