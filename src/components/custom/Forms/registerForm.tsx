'use client'

import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Checkbox,
  FormControl,
  FormLabel,
  useToast,
  Image as ChakraImage,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import PasswordInput from '../../ui/password-input'
import { useRegister } from '../../../../hooks/api/useAuth'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FaCamera, FaUserMd } from 'react-icons/fa'
import { ArrowBackIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

export default function MultiStepRegisterForm() {
  const [step, setStep] = useState(1)
  const [agreed, setAgreed] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const toast = useToast()
  const router = useRouter()
  const registerMutation = useRegister()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleNext = () => {
    if (!formData.email.includes('@gmail.com') || !formData.password || !agreed) {
      toast({
        title: 'Invalid data',
        description: 'Please fill all fields correctly and agree to terms.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    setStep(2)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    registerMutation.mutate(formData)
  }

  // Colors synced with LoginForm
  const bgColor = useColorModeValue('gray.100', '#1E2A30')
  const boxColor = useColorModeValue('white', '#2B3E46')
  const textColor = useColorModeValue('gray.700', 'white')
  const labelColor = useColorModeValue('gray.600', 'gray.400')
  const inputBorder = '#00FFF7'
  const buttonText = '#00FFF7'

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
      bg={bgColor}
      position="relative"
    >

      <Box
        bg={boxColor}
        borderRadius="md"
        boxShadow="dark-lg"
        p={10}
        w="full"
        maxW={{ base: '90%', md: '500px', lg: '600px' }}
        position="relative"
        textAlign="center"
      >
      {/* Back to Home */}
      <IconButton
        aria-label="Back to Home"
        icon={<ArrowBackIcon />}
        size="sm"
        position="absolute"
        top="15px"
        left="15px"
        onClick={() => router.push('/')}
        bg="transparent"
        color={textColor}
        _hover={{ color: buttonText }}
      />
        {/* Doctor icon */}
        <Box mb={4} display="flex" justifyContent="center">
          <FaUserMd
            style={{
              fontSize: '60px',
              background: 'linear-gradient(to bottom, #00F0A8, #00C6FB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </Box>

        {/* Title */}
        <Heading mb={6} fontSize="2xl" color={textColor} letterSpacing="1px">
          Register Doctor
        </Heading>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <MotionBox
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <VStack spacing={5} as="form">
                <FormControl isRequired>
                  <FormLabel color={labelColor}>Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    borderBottom={`2px solid ${inputBorder}`}
                    variant="flushed"
                    color={textColor}
                    focusBorderColor={inputBorder}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={labelColor}>Password</FormLabel>
                  <PasswordInput
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    borderBottom={`2px solid ${inputBorder}`}
                    focusBorderColor={inputBorder}
                    color={textColor}
                    variant="flushed"
                  />
                </FormControl>

                <FormControl>
                  <Checkbox isChecked={agreed} onChange={(e) => setAgreed(e.target.checked)} color={labelColor}>
                    I agree to the{' '}
                    <Button variant="link" color={buttonText} onClick={() => window.open('/terms')}>
                      Terms & Privacy
                    </Button>
                  </Checkbox>
                </FormControl>

                <Button
                  color={buttonText}
                  border={`1px solid ${buttonText}`}
                  bg="transparent"
                  _hover={{ bg: buttonText, color: bgColor }}
                  w="full"
                  onClick={handleNext}
                >
                  Next
                </Button>

                <Text fontSize="sm" color={labelColor}>
                  Already have an account?{' '}
                  <Button variant="link" color={buttonText} onClick={() => router.push('/login')}>
                    Login
                  </Button>
                </Text>
              </VStack>
            </MotionBox>
          )}

          {step === 2 && (
            <MotionBox
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <VStack spacing={5} as="form" onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>Username</FormLabel>
                  <Input
                    id="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    borderBottom={`2px solid ${inputBorder}`}
                    variant="flushed"
                    color={textColor}
                    focusBorderColor={inputBorder}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={labelColor}>Profile Picture</FormLabel>
                  <Box
                    onClick={() => fileInputRef.current?.click()}
                    cursor="pointer"
                    border="2px dashed #ccc"
                    borderRadius="md"
                    p={4}
                    textAlign="center"
                  >
                    {previewUrl ? (
                      <ChakraImage
                        src={previewUrl}
                        alt="Preview"
                        boxSize="120px"
                        borderRadius="full"
                        objectFit="cover"
                        mx="auto"
                      />
                    ) : (
                      <Box color="gray.500" display="flex" flexDirection="column" alignItems="center">
                        <FaCamera size={30} />
                        <Text mt={2}>Click to upload image</Text>
                      </Box>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </Box>
                </FormControl>

                <Button
                  type="submit"
                  color={buttonText}
                  border={`1px solid ${buttonText}`}
                  bg="transparent"
                  _hover={{ bg: buttonText, color: bgColor }}
                  w="full"
                  isLoading={registerMutation.isPending}
                  loadingText="Registering..."
                >
                  Register
                </Button>

                <Text fontSize="sm" color={labelColor}>
                  Already have an account?{' '}
                  <Button variant="link" color={buttonText} onClick={() => router.push('/login')}>
                    Login
                  </Button>
                </Text>
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  )
}
