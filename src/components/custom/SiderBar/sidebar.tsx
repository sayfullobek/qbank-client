import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function AdminSideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode colors
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.500", "gray.400");
  const activeBgColor = useColorModeValue("gray.200", "gray.900");

  // Helper for hover style
  const getLinkStyle = (isActive: boolean) => ({
    color: textColor,
    backgroundColor: isActive ? activeBgColor : bgColor,
    transition: 'background 0.2s',
  });

  // Sidebar content
  const sidebarContent = (
    <Box
      className={`fixed z-40 h-full top-0 left-0 flex flex-col w-64 transition-transform duration-300
        bg-white dark:bg-gray-900 !border-r !border-gray-200 dark:border-gray-700
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:static lg:top-auto lg:left-auto lg:h-auto lg:flex lg:z-auto`}
       _dark={{bg:'gray.800'}} _light={{bg:' white'}}
    >
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 divide-y space-y-1" style={{ backgroundColor: bgColor }}>
          <ul className="space-y-2 pb-2">
            {/* Dashboard */}
            <li>
              <Link
                href="/admin"
                style={getLinkStyle(pathname === '/admin')}
                className="text-base font-normal rounded-lg flex items-center p-2 group transition"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: iconColor }}>
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            {/* Users */}
            <li>
              <Link
                href="/admin/users"
                style={getLinkStyle(pathname.startsWith('/admin/users'))}
                className="text-base font-normal rounded-lg flex items-center p-2 group transition"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: iconColor }}>
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </Link>
            </li>
            {/* Tests */}
            <li>
              <Link
                href="/admin/tests"
                style={getLinkStyle(pathname === '/admin/tests')}
                className="text-base font-normal rounded-lg flex items-center !p-2 group transition"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: iconColor }}>
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                </svg>
                <span className="ml-3 flex-1 text-left whitespace-nowrap">Tests</span>
              </Link>
            </li>
            {/* Billings */}
            <li>
              <Link
                href="/admin/billings"
                style={getLinkStyle(pathname.startsWith('/admin/billings'))}
                className="text-base font-normal rounded-lg flex items-center p-2 group transition"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: iconColor }}>
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Billings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      {/* Menu bar button (always visible on mobile/tablet, hidden on lg+) */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg lg:hidden"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle sidebar"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Sidebar (responsive) */}
      {/* On desktop (lg+), always open. On mobile/tablet, togglable. */}
      {sidebarContent}
      {/* Overlay for mobile/tablet when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
