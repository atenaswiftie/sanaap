import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgTimer = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2391 2H8.75906C4.99906 2 4.70906 5.38 6.73906 7.22L17.2591 16.78C19.2891 18.62 18.9991 22 15.2391 22H8.75906C4.99906 22 4.70906 18.62 6.73906 16.78L17.2591 7.22C19.2891 5.38 18.9991 2 15.2391 2Z"
        stroke="#78828A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgTimer;
