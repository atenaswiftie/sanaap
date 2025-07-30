import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgEllipsisVertical = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9.25 5c0-1.52 1.23-2.75 2.75-2.75S14.75 3.48 14.75 5 13.52 7.75 12 7.75 9.25 6.52 9.25 5Zm4 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm-4 14c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75S9.25 20.52 9.25 19Zm4 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm-4-7c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75S9.25 13.52 9.25 12Zm4 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"
      />
    </svg>
  );
};
export default SvgEllipsisVertical;
