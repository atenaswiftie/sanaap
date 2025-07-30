import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgRadioFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={9.99999} fill="currentColor" />
      <rect x={7} y={7} width={6} height={6} rx={3} fill="white" />
    </svg>
  );
};
export default SvgRadioFill;
