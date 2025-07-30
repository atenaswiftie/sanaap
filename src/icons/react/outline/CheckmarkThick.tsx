import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgCheckmarkThick = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.207 7.793a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.293-6.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCheckmarkThick;
