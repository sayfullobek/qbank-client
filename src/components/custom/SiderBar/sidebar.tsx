import { Box, Flex, Text, useColorModeValue, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon },
  { href: "/admin/users", label: "Users", icon: UsersIcon },
  { href: "/admin/tests", label: "Tests", icon: TestsIcon },
  { href: "/admin/billings", label: "Billings", icon: BillingIcon },
  { href: "/admin/flashcards", label: "Flashcards", icon: FlashcardsIcon },
];

export default function AdminSideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.900", "white");
  const border = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("gray.200", "gray.900");
  const icon = useColorModeValue("gray.500", "gray.400");

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Mobile toggle button */}
      <IconButton
        aria-label="Toggle Sidebar"
        icon={
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        }
        onClick={() => setIsOpen(!isOpen)}
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="50"
        bg={bg}
        border="1px solid"
        borderColor={border}
        shadow="md"
        display={{ base: "block", lg: "none" }}
      />

      {/* Sidebar */}
      <Box
        bg={bg}
        color={text}
        borderRight="1px solid"
        borderColor={border}
        w="64"
        h="100vh"
        className="lg:!fixed static !top-[64px]"
        pos={{ base: "fixed", lg: "static" }}
        top={{ base: "64px", lg: "0" }} 
        left="0"
        zIndex="40"
        transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", lg: "none" }}
        transition="transform 0.3s ease-in-out"
      >
        <Flex direction="column" p="5" gap={2}>
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={href} passHref>
              <Flex
                align="center"
                px="3"
                py="2"
                borderRadius="md"
                bg={isActive(href) ? activeBg : "transparent"}
                _hover={{ bg: hoverBg }}
                transition="0.2s"
                cursor="pointer"
                onClick={() => setIsOpen(false)}
              >
                <Box mr="3" color={icon} transition="color 0.2s">
                  <Icon />
                </Box>
                <Text fontSize="md" fontWeight="medium">{label}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Box>

      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.400"
          zIndex="30"
          onClick={() => setIsOpen(false)}
          display={{ lg: "none" }}
        />
      )}
    </>
  );
}

// Ikonkalar komponenti
function DashboardIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}

function TestsIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zM8 12a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
  );
}

function FlashcardsIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <rect x="3" y="5" width="14" height="10" rx="2" />
      <rect x="7" y="7" width="6" height="2" rx="1" />
      <rect x="7" y="11" width="4" height="2" rx="1" />
    </svg>
  );
}
