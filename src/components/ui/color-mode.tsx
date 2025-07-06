"use client";

import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export function ColorModeSwitcher(props: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      borderRadius={'100%'}
      onClick={toggleColorMode}
      icon={<SwitchIcon className="w-5 h-5" />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
}
