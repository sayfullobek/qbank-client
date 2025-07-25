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
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { clearAll } from "../../../../../utils/auth";
import { useState, useEffect } from "react";

export default function AdminProfilePage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const router = useRouter();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(30);
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");

  const {
    isOpen: isPassModalOpen,
    onOpen: onPassModalOpen,
    onClose: onPassModalClose,
  } = useDisclosure();

  const {
    isOpen: isConfirmModalOpen,
    onOpen: onConfirmModalOpen,
    onClose: onConfirmModalClose,
  } = useDisclosure();

  const {
    isOpen: isNameModalOpen,
    onOpen: onNameModalOpen,
    onClose: onNameModalClose,
  } = useDisclosure();

  const {
    isOpen: isEmailModalOpen,
    onOpen: onEmailModalOpen,
    onClose: onEmailModalClose,
  } = useDisclosure();

  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("superadmin@example.com");

  const handleSignOut = () => {
    clearAll();
    router.push("/login");
  };

  const handleSaveName = () => {
    toast({ title: "Ism yangilandi", status: "success", duration: 2000, isClosable: true });
    onNameModalClose();
  };

  const handleSaveEmail = () => {
    toast({ title: "Email yangilandi", status: "success", duration: 2000, isClosable: true });
    onEmailModalClose();
  };

  const handleStartPasswordChange = () => {
    setStep(0);
    onConfirmModalOpen();
  };

  const handleSendCode = () => {
    setStep(1);
    onConfirmModalClose();
    onPassModalOpen();
    setTimer(30);
  };

  const handleSavePassword = () => {
    toast({ title: "Parol muvaffaqiyatli o'zgartirildi", status: "success", duration: 2000, isClosable: true });
    onPassModalClose();
  };

  useEffect(() => {
    if (step === 1 && timer > 0) {
      const countdown = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [step, timer]);

  return (
    <Box maxW="700px" mx="auto" py={10} px={4}>
      <Box bg={cardBg} borderRadius="lg" boxShadow="md" p={8}>
        <Stack align="center" mb={6}>
          <Avatar size="2xl" name={name} src="https://randomuser.me/api/portraits/men/32.jpg" />
          <Heading size="lg" color={textColor}>{name}</Heading>
          <Text color="gray.500">{email}</Text>
        </Stack>

        <Stack spacing={6}>
          <FormControl isReadOnly>
            <FormLabel>Full Name</FormLabel>
            <HStack>
              <Input value={name} isDisabled />
              <IconButton icon={<EditIcon />} onClick={onNameModalOpen} aria-label="Edit name" />
            </HStack>
          </FormControl>

          <FormControl isReadOnly>
            <FormLabel>Email address</FormLabel>
            <HStack>
              <Input value={email} isDisabled />
              <IconButton icon={<EditIcon />} onClick={onEmailModalOpen} aria-label="Edit email" />
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Change Password</FormLabel>
            <HStack>
              <Input value="********" isDisabled type="password" />
              <IconButton icon={<EditIcon />} onClick={handleStartPasswordChange} aria-label="Change password" />
            </HStack>
          </FormControl>
        </Stack>

        <Divider my={10} />

        <Stack direction="row" justify="center">
          <Button colorScheme="red" variant="outline" onClick={handleSignOut}>Sign Out</Button>
        </Stack>
      </Box>

      {/* Name Modal */}
      <Modal isOpen={isNameModalOpen} onClose={onNameModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ismni o&apos;zgartirish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSaveName} colorScheme="blue">Saqlash</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Email Modal */}
      <Modal isOpen={isEmailModalOpen} onClose={onEmailModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Emailni o&apos;zgartirish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSaveEmail} colorScheme="blue">Saqlash</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Password Change Confirm Modal */}
      <Modal isOpen={isConfirmModalOpen} onClose={onConfirmModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Parolni o&apos;zgartirmoqchimisiz?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={onConfirmModalClose} mr={3}>Yo‘q</Button>
            <Button colorScheme="blue" onClick={handleSendCode}>Ha</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Password Change Modal with Verification Code */}
      <Modal isOpen={isPassModalOpen} onClose={onPassModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Emailga yuborilgan kodni kiriting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>Yuborilgan kodni kiriting. {timer}s qoldi</Text>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456" mb={4} />
            <FormControl>
              <FormLabel>Yangi parol</FormLabel>
              <Input type="password" placeholder="New password" />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Parolni takrorlang</FormLabel>
              <Input type="password" placeholder="Repeat password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSavePassword}>Saqlash</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}