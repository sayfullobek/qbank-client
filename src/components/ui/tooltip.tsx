import { PlacementWithLogical, Tooltip as ChakraTooltip } from "@chakra-ui/react"
import * as React from "react"

interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
  isDisabled?: boolean;
  hasArrow?: boolean;
  placement?: PlacementWithLogical;
  // ...rest uchun boshqa propslar kerak bo‘lsa, ularni ham qo‘shing
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip({ label, children, isDisabled, hasArrow, placement, ...rest }, ref) {
    return (
      <ChakraTooltip
        label={label}
        isDisabled={isDisabled}
        hasArrow={hasArrow}
        placement={placement}
        {...rest}
      >
        <span ref={ref}>{children}</span>
      </ChakraTooltip>
    )
  },
)
