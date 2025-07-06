import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

interface PasswordInputProps {
  id?: string;
  placeholder?: string;
}

function PasswordInput({ id, placeholder = "Enter password" }: PasswordInputProps) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        id={id}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput