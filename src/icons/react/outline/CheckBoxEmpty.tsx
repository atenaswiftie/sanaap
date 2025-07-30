import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgCheckBoxEmpty = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={0.75}
        y={0.75}
        width={18.5}
        height={18.5}
        rx={5.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default SvgCheckBoxEmpty;
