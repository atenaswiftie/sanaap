import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowDropDown = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_3874_4296"
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
      <g mask="url(#mask0_3874_4296)">
        <path
          d="M11.2362 14.6967L6.22226 10.122C6.15332 10.0589 6.09895 9.98832 6.05918 9.91041C6.0194 9.83274 5.99951 9.74938 5.99951 9.66033C5.99951 9.48249 6.06541 9.32787 6.1972 9.19648C6.329 9.06533 6.50269 8.99976 6.71829 8.99976H17.2807C17.4963 8.99976 17.67 9.06605 17.8018 9.19865C17.9336 9.33101 17.9995 9.48551 17.9995 9.66215C17.9995 9.70643 17.9251 9.85972 17.7764 10.122L12.7628 14.6967C12.6477 14.8019 12.5287 14.8788 12.4056 14.9272C12.2826 14.9756 12.1472 14.9998 11.9995 14.9998C11.8518 14.9998 11.7164 14.9756 11.5934 14.9272C11.4703 14.8788 11.3513 14.8019 11.2362 14.6967Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default SvgArrowDropDown;
