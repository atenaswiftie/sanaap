import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowLeft = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.32146 3.54674L7.18146 5.68674L5.86813 6.99341C5.31479 7.54674 5.31479 8.44674 5.86813 9.00008L9.32146 12.4534C9.77479 12.9067 10.5481 12.5801 10.5481 11.9467V8.20674V4.05341C10.5481 3.41341 9.77479 3.09341 9.32146 3.54674Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowLeft;
