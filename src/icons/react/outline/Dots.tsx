import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgDots = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="dot" cx={2} cy={2} r={2} fill="#095655" />
      <circle className="dot" cx={10} cy={2} r={2} fill="#095655" />
      <circle className="dot" cx={18} cy={2} r={2} fill="#095655" />
    </svg>
  );
};
export default SvgDots;
