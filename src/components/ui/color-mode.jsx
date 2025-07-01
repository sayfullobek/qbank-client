"use client";

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeButton() {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(LuSun, LuMoon);

  return (  
    <IconButton
      aria-label="Toggle color mode"
      icon={<Icon />}
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
    />
  );
}
