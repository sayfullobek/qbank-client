'use client'
import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBack } from "react-icons/io5";

function BackButton() {
    const router = useRouter()
    return (
    <Box>
        <Button variant={'link'} display={'flex'} gap={'5px'} onClick={() => router.push('/')}>
            <span><IoArrowBack /></span>
            <span>Back to home</span>
        </Button>
    </Box>
  )
}

export default BackButton