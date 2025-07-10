'use client'
import React from 'react'
import { UserSidebar } from '../../components/custom/SiderBar/userSidebar'
import { UserNavbar } from '../../components/custom/header/userNavbar'
import { usePathname } from 'next/navigation';

function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // takeTest sahifasida sidebar va navbarni yashirish
  const isTakeTest = pathname?.startsWith('/user/tests/') && pathname.includes('/takeTest');
  if (isTakeTest) {
    return <main style={{ minHeight: '100vh' }}>{children}</main>;
  }
  return (
    <>
        <UserNavbar />
        <UserSidebar />
        <main style={{ marginLeft: 256, minHeight: '100vh', paddingTop: 20 }}>{children}</main>
    </>
  )
}

export default UserLayout