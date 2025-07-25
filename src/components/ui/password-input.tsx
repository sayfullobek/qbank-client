import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface PasswordInputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderBottom?: string;
  focusBorderColor?: string;
  color?: string;
  variant?: string;
}

function PasswordInput({
  id,
  placeholder = "Enter password",
  value,
  onChange,
  borderBottom = "2px solid #00FFF7",
  focusBorderColor = "#00FFF7",
  color = "white",
  variant = "flushed",
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <InputGroup size="md">
      <Input
        id={id}
        pr="3rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        variant={variant}
        borderBottom={borderBottom}
        _placeholder={{ color: "gray.500" }}
        focusBorderColor={focusBorderColor}
        color={color}
      />
      <InputRightElement width="3rem">
        <IconButton
          aria-label="Toggle password visibility"
          size="sm"
          variant="ghost"
          onClick={toggleShow}
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
          color={focusBorderColor}
          _hover={{ bg: "transparent", color: "#00FFF7" }}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
