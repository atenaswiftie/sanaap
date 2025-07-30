import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgCalendar2 = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33398 1.33325V3.33325"
        stroke="#2D333A"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.666 1.33325V3.33325"
        stroke="#2D333A"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33398 6.06006H13.6673"
        stroke="#2D333A"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.66659V11.3333C14 13.3333 13 14.6666 10.6667 14.6666H5.33333C3 14.6666 2 13.3333 2 11.3333V5.66659C2 3.66659 3 2.33325 5.33333 2.33325H10.6667C13 2.33325 14 3.66659 14 5.66659Z"
        stroke="#2D333A"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99764 9.13338H8.00363"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52889 9.13338H5.53488"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52889 11.1334H5.53488"
        stroke="#2D333A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgCalendar2;
