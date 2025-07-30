import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgTickCircleFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/bold/tick-circle">
        <g id="tick-circle">
          <path
            id="Vector"
            d="M12 2.00012C6.49 2.00012 2 6.49012 2 12.0001C2 17.5101 6.49 22.0001 12 22.0001C17.51 22.0001 22 17.5101 22 12.0001C22 6.49012 17.51 2.00012 12 2.00012ZM16.78 9.70012L11.11 15.3701C10.97 15.5101 10.78 15.5901 10.58 15.5901C10.38 15.5901 10.19 15.5101 10.05 15.3701L7.22 12.5401C6.93 12.2501 6.93 11.7701 7.22 11.4801C7.51 11.1901 7.99 11.1901 8.28 11.4801L10.58 13.7801L15.72 8.64012C16.01 8.35012 16.49 8.35012 16.78 8.64012C17.07 8.93012 17.07 9.40012 16.78 9.70012Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgTickCircleFill;
