import React from 'react'
import { UserSidebar } from '../../components/custom/SiderBar/userSidebar'
import { UserNavbar } from '../../components/custom/header/userNavbar'

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body style={{ margin: 0, padding: 0 }}>
        <UserNavbar />
        <UserSidebar />
        <main style={{ marginLeft: 256, minHeight: '100vh', paddingTop: 20 }}>{children}</main>
      </body>
    </html>
  )
}

export default UserLayout