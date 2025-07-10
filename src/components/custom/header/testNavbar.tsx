"use client";
import { Box, Text, useColorModeValue, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function TestNavbar({ timerValue = "01:00" }) {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  // Timer logic
  const [seconds, setSeconds] = useState(() => {
    const [min, sec] = timerValue.split(":").map(Number);
    return min * 60 + sec;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <>
      <Box w="100%" h="60px" borderBottom={'1px solid'} borderColor={useColorModeValue('blue.200','blue.700')} bg={bgColor} boxShadow="md" display="flex" alignItems="center" justifyContent="space-between" px={8}>
        <Box display="flex" alignItems="center" gap={3}>
          <IconButton aria-label="Close test" icon={<CloseIcon />} size="sm" variant="ghost" color={textColor} onClick={onOpen} />
          <Text fontWeight="bold" fontSize="lg" color={textColor}>Test Panel</Text>
        </Box>
        <Text fontWeight="semibold" fontSize="md" color={textColor}>⏰ {formatTime(seconds)}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you really want to leave the test?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => { onClose(); router.back(); }}>Yes</Button>
            <Button variant="ghost" onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
