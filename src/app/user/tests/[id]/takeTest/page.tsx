"use client";
import { Box, Heading, Text, Button, useColorModeValue, Input, Stack, Radio, RadioGroup, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Divider, Alert, AlertIcon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TestNavbar from "../../../../../components/custom/header/testNavbar";
import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import InputQuestion from "./InputQuestion";

export default function TakeTestPage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState<'close' | 'submit' | null>(null);
  const [answer, setAnswer] = useState("");
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState<null | { correct: boolean; message: string; color: string }>(null);
  const router = useRouter();

  // Static test data
  const question = {
    text: "What is the main function of the liver in the human body?",
    type: "input", // or "choice"
    choices: ["A. Producing insulin", "B. Detoxification", "C. Pumping blood", "D. Gas exchange"],
    correct: "B. Detoxification",
    correctInput: "Detoxification"
  };

  // Modal handler
  const handleSubmit = () => {
    setModalType('submit');
    onOpen();
  };
  const handleModalYes = () => {
    if (modalType === 'submit') {
      // Javobni tekshirish
      let isCorrect = false;
      if (choice) isCorrect = choice === question.correct;
      else if (answer) isCorrect = answer.trim().toLowerCase() === question.correctInput.toLowerCase();
      setResult({
        correct: isCorrect,
        message: isCorrect ? 'Congratulations! Your answer is correct.' : 'Sorry, your answer is incorrect.',
        color: isCorrect ? 'green.400' : 'red.400',
      });
    } else if (modalType === 'close') {
      router.back();
    }
    onClose();
  };
  const handleModalNo = () => {
    onClose();
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}> 
      <TestNavbar timerValue="00:59" />
      <Box
        bg={cardBg}
        borderRadius="lg"
        boxShadow="md"
        p={8}
        mt={0}
        style={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 60px - 72px)', // 60px navbar, 72px footer
          paddingTop: 24,
        }}
      >
        <Heading size="md" mb={4} color={textColor}>Test Panel</Heading>
        <Text fontWeight="semibold" mb={2} color={textColor}>Question:</Text>
        <Text mb={6} color={textColor}>{question.text}</Text>
        {/* Input type */}
        <InputQuestion value={answer} onChange={setAnswer} color={textColor} />
        <ChoiceQuestion value={choice} onChange={setChoice} color={textColor} choices={question.choices} />
        {result && (
          <Box mt={8} p={6} borderRadius="lg" bgGradient="linear(to-r, blue.200, cyan.100, green.100)" boxShadow="lg" textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color={result.color}>{result.message}</Text>
            <Text mt={2} color="blue.700">Correct answer: {question.correct}</Text>
          </Box>
        )}
      </Box>
      {/* Sticky footer submit */}
      <Box position="fixed" left={0} right={0} bottom={0} bg={cardBg} borderTop="2px solid" borderColor={useColorModeValue('blue.200','blue.700')} py={4} px={8} display="flex" justifyContent="center" zIndex={10}>
        <Button colorScheme="blue" size="lg" fontWeight="bold" onClick={handleSubmit}>Submit Test</Button>
      </Box>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you finished?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you want to submit your answers?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalYes}>Yes</Button>
            <Button colorScheme="red" variant="outline" onClick={handleModalNo}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
} 