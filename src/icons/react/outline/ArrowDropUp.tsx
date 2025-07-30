import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowDropUp = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_3874_4293"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <rect width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3874_4293)">
        <path
          d="M6.71829 14.9999C6.50269 14.9999 6.329 14.9336 6.1972 14.801C6.06541 14.6686 5.99951 14.5141 5.99951 14.3375C5.99951 14.2932 6.07389 14.1399 6.22266 13.8776L11.2362 9.30294C11.3513 9.19769 11.4703 9.12086 11.5934 9.07247C11.7164 9.02407 11.8518 8.99988 11.9995 8.99988C12.1472 8.99988 12.2826 9.02407 12.4056 9.07247C12.5287 9.12086 12.6477 9.19769 12.7628 9.30294L17.7768 13.8776C17.8457 13.9408 17.9001 14.0113 17.9398 14.0892C17.9796 14.1669 17.9995 14.2503 17.9995 14.3393C17.9995 14.5171 17.9336 14.6718 17.8018 14.8032C17.67 14.9343 17.4963 14.9999 17.2807 14.9999H6.71829Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default SvgArrowDropUp;
