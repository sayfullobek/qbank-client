'use client'

// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // yoki "system", "dark"
  useSystemColorMode: false,
};

// Bu yerda config albatta extendTheme ichiga qo‘shilishi kerak
const theme = extendTheme({ config });

export default theme;
