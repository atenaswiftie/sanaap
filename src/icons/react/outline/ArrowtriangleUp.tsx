import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowtriangleUp = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m16.772 13.555-2.293-2.52-1.4-1.546a1.427 1.427 0 0 0-2.152 0l-3.7 4.066C6.74 14.09 7.09 15 7.768 15h8.46c.686 0 1.03-.91.543-1.445Z"
      />
    </svg>
  );
};
export default SvgArrowtriangleUp;
