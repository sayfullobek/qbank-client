"use client"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../../../theme/theme" // Chakra UI theme (pastda ko‘rsataman)

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {props.children}
    </ChakraProvider>
  )
}
