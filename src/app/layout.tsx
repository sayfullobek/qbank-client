'use client'

import React, { JSX, useEffect } from 'react'
import './globals.css'
import '../styles/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from '../components/custom/header/navbar'
import theme from '../../theme/theme'
import childProps from '../../types/childTypes'
import Footer from '../components/custom/footer/footer';

function RootLayout({ children }: childProps): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi
      once: false, // faqat bir marta trigger bo'lishi uchun
    });
  }, []);

  return (
    <html>
      <head>

        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          <main className="pt-[25px]">
            {children}
          </main>
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}

export default RootLayout