import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgEye = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 5.25C5 5.25 2 12 2 12C2 12 5 18.75 12.5 18.75C20 18.75 23 12 23 12C23 12 20 5.25 12.5 5.25Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.75C14.5711 15.75 16.25 14.0711 16.25 12C16.25 9.92893 14.5711 8.25 12.5 8.25C10.4289 8.25 8.75 9.92893 8.75 12C8.75 14.0711 10.4289 15.75 12.5 15.75Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgEye;
