'use client'

// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // yoki "system", "dark"
  useSystemColorMode: false,
};

const colors = {
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
  Input: {
    baseStyle: {
      field: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};

const theme = extendTheme({ 
  config,
  colors,
  components,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
      },
    }),
  },
});

export default theme;
