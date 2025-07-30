import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowtriangleRight = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m14.511 10.923-4.066-3.7C9.91 6.744 9 7.087 9 7.773v8.457c0 .685.91 1.028 1.445.542l4.066-3.7c.652-.585.652-1.557 0-2.15Z"
      />
    </svg>
  );
};
export default SvgArrowtriangleRight;
