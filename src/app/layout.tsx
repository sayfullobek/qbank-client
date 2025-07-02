'use client'

import React, { JSX } from 'react'
import './globals.css'
import '../styles/style.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from '../components/custom/header/navbar'
import theme from '../../theme/theme'
import childProps from '../../types/childTypes'

function RootLayout({children}: childProps): JSX.Element {
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