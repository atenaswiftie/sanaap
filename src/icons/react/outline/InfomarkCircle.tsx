import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgInfomarkCircle = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 10.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM11.995 7a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2h-.01Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12ZM12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgInfomarkCircle;
