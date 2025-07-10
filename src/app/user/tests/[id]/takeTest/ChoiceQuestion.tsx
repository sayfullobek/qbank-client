"use client";
import { Box, Text, Stack, Radio, RadioGroup, useColorModeValue, Badge } from "@chakra-ui/react";

const letters = ["A", "B", "C", "D", "E", "F"];

export default function ChoiceQuestion({ value, onChange, color, choices }: { value: string, onChange: (v: string) => void, color: string, choices: string[] }) {
  const cardBg = useColorModeValue("blue.50", "gray.700");
  const activeBg = useColorModeValue("blue.100", "blue.900");
  const borderColor = useColorModeValue("blue.300", "blue.600");
  return (
    <Box mb={6}>
      <Text fontWeight="medium" mb={2} color={color}>Select one answer:</Text>
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="column" spacing={4}>
          {choices.map((c, idx) => (
            <Box key={c} bg={value === c ? activeBg : cardBg} borderRadius="md" borderWidth={2} borderColor={value === c ? borderColor : 'transparent'} px={4} py={3} display="flex" alignItems="center" gap={3} transition="all 0.2s">
              <Badge colorScheme="blue" borderRadius="full" px={3} py={1} fontSize="md">{letters[idx]}</Badge>
              <Radio value={c} colorScheme="blue">{c.replace(/^\w\. /, "")}</Radio>
            </Box>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
} 