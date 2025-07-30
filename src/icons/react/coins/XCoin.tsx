import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgXCoin = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          fill="#7A7A7A"
          fillRule="evenodd"
          d="M1.5 12c0 5.799 4.701 10.5 10.5 10.5S22.5 17.799 22.5 12 17.799 1.5 12 1.5 1.5 6.201 1.5 12ZM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z"
          clipRule="evenodd"
        />
        <path
          fill="#7A7A7A"
          fillRule="evenodd"
          d="M5.85 18.373a.75.75 0 0 0 .65.377h4a.75.75 0 0 0 .648-.372L12 16.917l.852 1.46a.75.75 0 0 0 .648.373h4a.75.75 0 0 0 .648-1.128L14.868 12l3.28-5.622A.75.75 0 0 0 17.5 5.25h-4a.75.75 0 0 0-.648.372L12 7.083l-.852-1.46a.75.75 0 0 0-.648-.373h-4a.75.75 0 0 0-.648 1.128L9.132 12l-3.28 5.622a.75.75 0 0 0-.002.752Zm7.018-9.802 1.063-1.821h2.263L14 10.511l-1.132-1.94ZM14 13.49l2.194 3.761h-2.263l-1.063-1.821L14 13.489ZM13.132 12l-3.063-5.25H7.806l2.842 4.872a.75.75 0 0 1 0 .756L7.806 17.25h2.263L13.132 12Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgXCoin;
