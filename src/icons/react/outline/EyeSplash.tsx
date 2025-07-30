import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgEyeSplash = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
      <path
        d="M4.97852 3.75L19.9785 20.25"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0012 14.7751C14.2652 15.4442 13.2936 15.7935 12.3001 15.7462C11.3065 15.6989 10.3725 15.2589 9.70339 14.5229C9.0343 13.7869 8.68498 12.8153 8.73227 11.8218C8.77957 10.8282 9.2196 9.89419 9.95558 9.2251"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1846 8.31665C13.9818 8.46932 14.708 8.87657 15.254 9.4772C15.8001 10.0778 16.1365 10.8394 16.2127 11.6476"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.036 15.8531C22.0797 14.0231 22.9788 12 22.9788 12C22.9788 12 19.9788 5.25001 12.4788 5.25001C11.8293 5.24912 11.1809 5.3018 10.54 5.40751"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.41602 6.43115C3.59383 8.36615 1.97852 11.9999 1.97852 11.9999C1.97852 11.9999 4.97852 18.7499 12.4785 18.7499C14.2359 18.7637 15.9712 18.3588 17.541 17.5687"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgEyeSplash;
