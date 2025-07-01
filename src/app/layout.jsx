'use client'

import React from 'react'
import './globals.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from '../components/custom/header/navbar'
import theme from '../../theme/theme'

function RootLayout({ children }) {
  return (
    <html>
      <head>

        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}

export default RootLayout