import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowtriangleLeft = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m13.555 7.228-2.52 2.293-1.546 1.4a1.427 1.427 0 0 0 0 2.152l4.066 3.7c.534.487 1.445.137 1.445-.542V7.77c0-.686-.91-1.03-1.445-.543Z"
      />
    </svg>
  );
};
export default SvgArrowtriangleLeft;
