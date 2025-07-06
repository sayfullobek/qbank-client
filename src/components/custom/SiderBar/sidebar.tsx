import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useColorModeValue } from "@chakra-ui/react";

export default function AdminSideBar() {
  const pathname = usePathname();
  const [isTestDropdownOpen, setIsTestDropdownOpen] = useState(false);

  // Dark mode colors
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.500", "gray.400");
  const activeBgColor = useColorModeValue("gray.100", "gray.700");

  useEffect(() => {
    // Close dropdown on route change
    setIsTestDropdownOpen(false);
  }, [pathname]);

  return (
    <aside
      id="sidebar"
      className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
      style={{ backgroundColor: bgColor, borderRight: `1px solid ${borderColor}` }}
    >
      <div className="relative flex-1 flex flex-col min-h-0 pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 divide-y space-y-1" style={{ backgroundColor: bgColor }}>
            <ul className="space-y-2 pb-2">
              {/* Dashboard */}
              <li>
                <Link
                  href="/admin"
                  className={`text-base font-normal rounded-lg flex items-center p-2 group transition`}
                  style={{ 
                    color: textColor,
                    backgroundColor: pathname === '/admin' ? activeBgColor : 'transparent'
                  }}
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
                  className={`text-base font-normal rounded-lg flex items-center p-2 group transition`}
                  style={{ 
                    color: textColor,
                    backgroundColor: pathname.startsWith('/admin/users') ? activeBgColor : 'transparent'
                  }}
                >
                  <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: iconColor }}>
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                </Link>
              </li>

              {/* Tests (dropdown) */}
              <li className="w-[200px] rounded-xl">
                <div className={`text-base font-normal rounded-lg flex flex-col w-full`} style={{ color: textColor }}>
                  <button
                    onClick={() => setIsTestDropdownOpen(!isTestDropdownOpen)}
                    className={`w-full flex items-center p-2 rounded-lg transition group`}
                    style={{ 
                      backgroundColor: isTestDropdownOpen ? activeBgColor : 'transparent'
                    }}
                  >
                    <svg className="w-6 h-6 flex-shrink-0 transition duration-75" fill="currentColor" viewBox="0 0 20 20" style={{ color: iconColor }}>
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 flex-1 text-left whitespace-nowrap">Tests</span>
                    <svg className={`w-4 h-4 ml-auto transition-transform duration-300`} fill="currentColor" viewBox="0 0 20 20" style={{ color: iconColor, transform: isTestDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTestDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                    <ul className="space-y-1 mt-1">
                      <li>
                        <Link
                          href="/admin/tests"
                          className="text-base font-normal rounded-lg flex items-center p-2 pl-11 group transition"
                          style={{ color: textColor }}
                        >
                          <span className="flex-1 whitespace-nowrap">All Tests</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/admin/tests/test"
                          className="text-base font-normal rounded-lg flex items-center p-2 pl-11 group transition"
                          style={{ color: textColor }}
                        >
                          <span className="flex-1 whitespace-nowrap">Create Test</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Billings */}
              <li>
                <Link
                  href="/admin/billings"
                  className={`text-base font-normal rounded-lg flex items-center p-2 group transition`}
                  style={{ 
                    color: textColor,
                    backgroundColor: pathname.startsWith('/admin/billings') ? activeBgColor : 'transparent'
                  }}
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
      </div>
    </aside>
  );
}
