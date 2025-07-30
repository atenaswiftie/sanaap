import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgChevronUp = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5.734 14.767c0-.19.07-.38.22-.53l5.53-5.53c.29-.29.77-.29 1.06 0l5.53 5.53c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-5-5-5 5c-.29.29-.77.29-1.06 0a.71.71 0 0 1-.22-.53Z"
      />
    </svg>
  );
};
export default SvgChevronUp;
