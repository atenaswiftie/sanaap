import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgNumberWithUnderline = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11.456 16.59v-.873c.004-.101.008-.195.013-.28v.007c.004-.204.006-.414.006-.63a56.8 56.8 0 0 0-.013-2.144 19.964 19.964 0 0 0-.324-3.24 15.214 15.214 0 0 0-.452-1.807l1.482-.484c.217.692.384 1.356.503 1.992a18.9 18.9 0 0 1 .268 1.82c.059.577.095 1.13.108 1.66.012.531.019 1.04.019 1.528 0 .242-.002.475-.007.7 0 .22-.002.433-.006.636l-.013.28v.834h-1.584Z"
      />
      <rect
        width={19.5}
        height={1.5}
        x={2.25}
        y={20.25}
        fill="currentColor"
        rx={0.75}
      />
    </svg>
  );
};
export default SvgNumberWithUnderline;
