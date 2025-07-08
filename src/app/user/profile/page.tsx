'use client';
import React, { useState } from 'react';
import { Box, Heading, Text, Button, Stack, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Input, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Avatar, IconButton, VisuallyHidden, Input as ChakraInput } from '@chakra-ui/react';
import { useRef } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { CameraIcon } from '@heroicons/react/24/outline';
import { FiUpload } from 'react-icons/fi';

const initialUser = {
  name: 'Ulug‘bek Raxmatillayev',
  username: 'ulugbekr12',
  email: 'ulugbekraxmatillayev615@gmail.com',
};

export default function UserProfilePage() {
  const [user, setUser] = useState(initialUser);
  const [editField, setEditField] = useState<'name' | 'username' | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [avatar, setAvatar] = useState('https://ui-avatars.com/api/?name=Ulug\'bek+Raxmatillayev&background=random');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const { isOpen: isCameraOpen, onOpen: openCamera, onClose: closeCamera } = useDisclosure();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleEdit = (field: 'name' | 'username') => {
    setEditField(field);
    setEditValue(user[field]);
    onOpen();
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, [editField!]: editValue }));
    toast({ title: `${editField === 'name' ? 'Name' : 'Username'} updated!`, status: 'success', duration: 2000, isClosable: true });
    onClose();
  };

  const handlePasswordEdit = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordReset = () => {
    setShowPasswordModal(false);
    router.push('/user/reset-password');
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      alert('Camera access denied!');
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach(track => track.stop());
    setStream(null);
  };

  const handleOpenCamera = () => {
    openCamera();
    setTimeout(startCamera, 200); // wait for modal to open
  };

  const handleCloseCamera = () => {
    closeCamera();
    stopCamera();
  };

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, 200, 200);
        const dataUrl = canvasRef.current.toDataURL('image/png');
        setAvatar(dataUrl);
        handleCloseCamera();
      }
    }
  };

  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Box bg="white" _dark={{ bg: 'gray.900' }} borderRadius="lg" boxShadow="sm" p={8}>
        <Flex align="center" mb={8} gap={4}>
          <Box position="relative">
            <Avatar size="xl" name={user.name} src={avatar} />
            <Flex position="absolute" bottom={0} right={0} gap={1}>
              <IconButton
                aria-label="Take photo"
                icon={<CameraIcon className="w-4 h-4" />}
                size="sm"
                borderRadius="full"
                onClick={handleOpenCamera}
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600' }}
              />
              <ChakraInput
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleAvatarChange}
                display="none"
              />
              <IconButton
                aria-label="Upload photo"
                icon={<FiUpload />}
                size="sm"
                borderRadius="full"
                onClick={() => fileInputRef.current?.click()}
                bg="gray.500"
                color="white"
                _hover={{ bg: 'gray.600' }}
              />
              <ChakraInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                display="none"
              />
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="xl">{user.name}</Text>
            <Text color="gray.500">{user.email}</Text>
          </Box>
        </Flex>
        <Heading mb={6} fontSize="2xl">Profile Settings</Heading>
        <Stack spacing={6}>
          <Flex align="center" justify="space-between" bg="white" _dark={{ bg: 'gray.800' }} borderRadius="md" boxShadow="xs" p={4}>
            <Box>
              <Text fontSize="sm" color="gray.500">Full Name</Text>
              <Text fontWeight="semibold" fontSize="lg">{user.name}</Text>
            </Box>
            <Button onClick={() => handleEdit('name')} colorScheme="blue" variant="outline" size="sm">Edit</Button>
          </Flex>
          <Flex align="center" justify="space-between" bg="white" _dark={{ bg: 'gray.800' }} borderRadius="md" boxShadow="xs" p={4}>
            <Box>
              <Text fontSize="sm" color="gray.500">Username</Text>
              <Text fontWeight="semibold" fontSize="lg">{user.username}</Text>
            </Box>
            <Button onClick={() => handleEdit('username')} colorScheme="blue" variant="outline" size="sm">Edit</Button>
          </Flex>
          <Flex align="center" justify="space-between" bg="white" _dark={{ bg: 'gray.800' }} borderRadius="md" boxShadow="xs" p={4}>
            <Box>
              <Text fontSize="sm" color="gray.500">Email</Text>
              <Text fontWeight="semibold" fontSize="lg">{user.email}</Text>
            </Box>
          </Flex>
          <Flex align="center" justify="space-between" bg="white" _dark={{ bg: 'gray.800' }} borderRadius="md" boxShadow="xs" p={4}>
            <Box>
              <Text fontSize="sm" color="gray.500">Password</Text>
              <Text fontWeight="semibold" fontSize="lg">********</Text>
            </Box>
            <Button onClick={handlePasswordEdit} colorScheme="blue" variant="outline" size="sm">Edit</Button>
          </Flex>
        </Stack>
      </Box>

      {/* Edit Modal for name/username */}
      <Modal isOpen={isOpen && !!editField} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {editField === 'name' ? 'Full Name' : 'Username'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={editValue} onChange={e => setEditValue(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>Save</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Password Reset Modal */}
      <Modal isOpen={showPasswordModal} onClose={() => setShowPasswordModal(false)} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to reset your password?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handlePasswordReset}>Yes, reset</Button>
            <Button variant="ghost" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Camera Modal */}
      <Modal isOpen={isCameraOpen} onClose={handleCloseCamera} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take a Selfie</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <video ref={videoRef} width={200} height={200} autoPlay style={{ borderRadius: '50%', background: '#000' }} />
            <canvas ref={canvasRef} width={200} height={200} style={{ display: 'none' }} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCapture}>Capture</Button>
            <Button variant="ghost" onClick={handleCloseCamera}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}