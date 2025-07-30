import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgCheckmarkCircle = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16.78 9.7a.75.75 0 0 0-1.06-1.06l-5.14 5.13-2.3-2.3a.75.75 0 0 0-1.06 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l5.67-5.66Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.086 1.25 1.25 6.086 1.25 12S6.086 22.75 12 22.75 22.75 17.914 22.75 12 17.914 1.25 12 1.25ZM2.75 12c0-5.086 4.164-9.25 9.25-9.25s9.25 4.164 9.25 9.25-4.164 9.25-9.25 9.25S2.75 17.086 2.75 12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCheckmarkCircle;
