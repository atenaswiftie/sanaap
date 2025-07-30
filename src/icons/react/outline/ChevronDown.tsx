import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgChevronDown = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18.291 9.237c0 .19-.07.38-.22.53l-5.53 5.53c-.29.29-.77.29-1.06 0l-5.53-5.53a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5 5 5-5c.29-.29.77-.29 1.06 0 .15.14.22.33.22.53Z"
      />
    </svg>
  );
};
export default SvgChevronDown;
