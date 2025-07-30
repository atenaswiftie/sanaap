import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgCheckmark = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20.78 6.7a.75.75 0 0 0-1.06-1.06L8.58 16.77l-4.3-4.3a.75.75 0 1 0-1.06 1.06l4.83 4.83a.75.75 0 0 0 1.06 0L20.78 6.7Z"
      />
    </svg>
  );
};
export default SvgCheckmark;
