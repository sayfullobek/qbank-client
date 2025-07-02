"use client"

import { useToast, Button } from "@chakra-ui/react"

export function ExampleToastButton() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Toast title",
          description: "Toast description",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
