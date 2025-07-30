import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgInfomarkCircleFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10Zm.75-6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5Zm-1.67-8.38c.05-.13.12-.23.21-.33.1-.09.21-.16.33-.21.12-.05.25-.08.38-.08s.26.03.38.08.23.12.33.21c.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38-.12.23-.21.33c-.1.09-.21.16-.33.21a1 1 0 0 1-.76 0c-.12-.05-.23-.12-.33-.21-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 11 8c0-.13.03-.26.08-.38Z"
      />
    </svg>
  );
};
export default SvgInfomarkCircleFill;
