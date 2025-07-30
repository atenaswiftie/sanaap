import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgStepperCheckboxFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={0.75}
        y={0.75}
        width={14.5}
        height={14.5}
        rx={3.25}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x={2.66797}
        y={2.66675}
        width={10.6667}
        height={10.6667}
        rx={2}
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgStepperCheckboxFill;
