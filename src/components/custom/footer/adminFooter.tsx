"use client";

import Link from "next/link";
import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export default function AdminFooter() {
  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.500", "gray.400");
  const linkHover = useColorModeValue("gray.800", "white");

  return (
    <>
      <Box
        bg={bg}
        mt={10}
        ml={{base: '0', lg: '256px'}}
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 8 }}
        borderTopWidth={1}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <HStack
          justify="space-between"
          flexWrap="wrap"
          spacing={4}
          align={{ base: "start", md: "center" }}
          mb={{ base: 6, md: 0 }}
        >
          <HStack flexWrap="wrap" spacing={4} mb={{ base: 4, md: 0 }}>
            {[
              "Terms and conditions",
              "Privacy Policy",
              "Licensing",
              "Cookie Policy",
              "Contact"
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                style={{ color: text }}
                className="text-sm font-normal hover:underline"
              >
                {item}
              </Link>
            ))}
          </HStack>
          <HStack spacing={4}>
            {["facebook", "instagram", "twitter", "github", "dribbble"].map((platform, idx) => (
              <Link key={idx} href="#" aria-label={platform}>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: text }}
                >
                  <use href={`#icon-${platform}`} />
                </svg>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Text textAlign="center" fontSize="sm" color={text} mt={8}>
          &copy; 2019–{new Date().getFullYear()} {" "}
          <Link
            href="https://themesberg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: linkHover }}
          >
            Themesberg
          </Link>. All rights reserved.
        </Text>
      </Box>
    </>
  );
}
