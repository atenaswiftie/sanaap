import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgXmark = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18.36 5.64a.75.75 0 0 1 0 1.06l-5.3 5.3 5.3 5.3a.75.75 0 0 1-1.06 1.06l-5.3-5.3-5.3 5.3a.75.75 0 0 1-1.06-1.06l5.3-5.3-5.3-5.3A.75.75 0 0 1 6.7 5.64l5.3 5.3 5.3-5.3a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
};
export default SvgXmark;
