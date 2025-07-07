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
import { Fira_Sans, Signika } from 'next/font/google'
import Providers from './provider';
import { ToastContainer } from 'react-toastify';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira-sans'
})

const signika = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika'
})

function RootLayout({ children }: childProps): JSX.Element {

  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi
      once: false, // faqat bir marta trigger bo'lishi uchun
    });
  }, []);

  return (
    <html className={`${firaSans.variable} ${signika.variable}`}>
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <main>
            <Providers>
              {children}
              <ToastContainer position="top-right" autoClose={3000} />
            </Providers>
            
          </main>
        </ChakraProvider>
      </body>
    </html>
  )
}

export default RootLayout