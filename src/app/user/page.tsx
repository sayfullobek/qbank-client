import React from 'react'
import { Box, Heading, Text, SimpleGrid, Stack, Divider, Badge } from '@chakra-ui/react'

const stats = [
  { label: 'Total tests', value: 42 },
  { label: 'Solved tests', value: 27 },
  { label: 'Correct answers', value: 120 },
  { label: 'Incorrect answers', value: 18 },
  { label: 'Best result', value: '95%' },
]

const solvedTests = [
  { id: 1, name: 'Biology Test 1', date: '2024-05-01', correct: 18, total: 20, status: 'Good' },
  { id: 2, name: 'Chemistry Test 2', date: '2024-04-28', correct: 15, total: 20, status: 'Average' },
  { id: 3, name: 'Physics Test 3', date: '2024-04-20', correct: 20, total: 20, status: 'Excellent' },
]

export default function UserPage() {
  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Heading mb={6} fontSize="2xl">Statistics</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} mb={10}>
        {stats.map((stat) => (
          <Box key={stat.label} p={5} borderWidth={1} borderRadius="lg" bg="white" _dark={{ bg: 'gray.900' }} boxShadow="sm" textAlign="center">
            <Text fontSize="lg" fontWeight="bold">{stat.value}</Text>
            <Text color="gray.500" fontSize="sm">{stat.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Heading mb={4} fontSize="xl">Solved Test Results</Heading>
      <Box borderWidth={1} borderRadius="lg" bg="white" _dark={{ bg: 'gray.900' }} boxShadow="sm" p={4}>
        <Stack spacing={4}>
          {solvedTests.map((test) => (
            <Box key={test.id}>
              <Stack direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center">
                <Box>
                  <Text fontWeight="semibold">{test.name}</Text>
                  <Text fontSize="sm" color="gray.500">{test.date}</Text>
                </Box>
                <Text>{test.correct} / {test.total} correct</Text>
                <Badge colorScheme={test.status === 'Excellent' ? 'green' : test.status === 'Good' ? 'blue' : 'yellow'}>{test.status}</Badge>
              </Stack>
              <Divider my={2} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}