import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgPercentageSquare = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.00065 1.33325H10.0007C13.334 1.33325 14.6673 2.66659 14.6673 5.99992V9.99992C14.6673 13.3333 13.334 14.6666 10.0007 14.6666H6.00065C2.66732 14.6666 1.33398 13.3333 1.33398 9.99992V5.99992C1.33398 2.66659 2.66732 1.33325 6.00065 1.33325Z"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71289 10.1801L10.0729 5.82007"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.98602 6.91343C6.4389 6.91343 6.80601 6.54632 6.80601 6.09344C6.80601 5.64057 6.4389 5.27344 5.98602 5.27344C5.53315 5.27344 5.16602 5.64057 5.16602 6.09344C5.16602 6.54632 5.53315 6.91343 5.98602 6.91343Z"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3473 10.7267C10.8002 10.7267 11.1673 10.3595 11.1673 9.90666C11.1673 9.45378 10.8002 9.08667 10.3473 9.08667C9.89446 9.08667 9.52734 9.45378 9.52734 9.90666C9.52734 10.3595 9.89446 10.7267 10.3473 10.7267Z"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgPercentageSquare;
