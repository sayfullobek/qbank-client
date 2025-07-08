"use client"

import { Box, Button, FormControl, FormLabel, Heading, Input, Text, useToast, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const bg = useColorModeValue('gray.50', 'gray.900');
  const boxBg = useColorModeValue('white', 'gray.800');

  // 1. Kod yuborilganini ko'rsatish va kod kiritish
  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Kodni tekshirish uchun backendga so'rov yuborish
    setTimeout(() => {
      setLoading(false);
      if (code === '123456') { // Demo uchun
        setStep(2);
      } else {
        toast({ status: 'error', description: 'Noto‘g‘ri kod!' });
      }
    }, 1000);
  };

  // 2. Parolni o'zgartirish
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Parolni o'zgartirish uchun backendga so'rov yuborish
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg={bg}>
      <Box w="100%" maxW="400px" p={8} borderRadius="lg" boxShadow="lg" bg={boxBg}>
        <Heading mb={6} size="lg" textAlign="center">Reset Password</Heading>
        {step === 1 && (
          <form onSubmit={handleCodeSubmit}>
            <Text mb={4} color="gray.600">Emailingizga kod yuborildi. Kodni kiriting:</Text>
            <FormControl mb={4}>
              <FormLabel>Kod</FormLabel>
              <Input value={code} onChange={e => setCode(e.target.value)} required placeholder="6 xonali kod" maxLength={6} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="100%" isLoading={loading}>Confirm</Button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handlePasswordSubmit}>
            <FormControl mb={4}>
              <FormLabel>Current password</FormLabel>
              <Input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required placeholder="Current password" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>New password</FormLabel>
              <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required placeholder="New password" />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="100%" isLoading={loading}>Save new password</Button>
          </form>
        )}
        {step === 3 && (
          <Box textAlign="center">
            <Text color="green.500" fontWeight="bold" mb={4}>Parolingiz muvaffaqiyatli o‘zgartirildi!</Text>
            <Button colorScheme="blue" onClick={() => router.push('/login')} width="100%">Login page</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
} 