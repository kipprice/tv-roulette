import { cva } from "../styled-system/css";
import { styled } from "../styled-system/jsx";

const buttonStyle = cva({
  base: {
    color: "white",
    px: { base: 2, lg: 8 },
    py: 2,
    borderRadius: { base: "lg", lg: "full" },
    fontWeight: "bold",
    fontSize: "lg",
    cursor: "pointer",
    opacity: 0.9,
    _hover: {
      opacity: 1,
      boxShadow: "lg",
    },
    _focusVisible: {
      opacity: 1,
      boxShadow: "lg",
    },
    _disabled: {
      opacity: "0.5 !important",
      boxShadow: "none !important",
    },
  },
});

export const Button = styled("button", buttonStyle);
