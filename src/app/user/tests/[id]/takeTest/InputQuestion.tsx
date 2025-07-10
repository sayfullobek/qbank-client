"use client";
import { Box, Text, Input, useColorModeValue } from "@chakra-ui/react";

export default function InputQuestion({ value, onChange, color }: { value: string, onChange: (v: string) => void, color: string }) {
  const inputBg = useColorModeValue("cyan.50", "gray.700");
  const borderColor = useColorModeValue("cyan.300", "cyan.600");
  return (
    <Box mb={6}>
      <Text fontWeight="medium" mb={2} color={color}>Type your answer:</Text>
      <Input value={value} onChange={e => onChange(e.target.value)} placeholder="Your answer..." bg={inputBg} borderColor={borderColor} size="lg" fontWeight="semibold" _placeholder={{ color: 'gray.400' }} />
    </Box>
  );
} 