import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgChevronRight = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.91156 20.6656C8.72156 20.6656 8.53156 20.5956 8.38156 20.4456C8.09156 20.1556 8.09156 19.6756 8.38156 19.3856L14.9016 12.8656C15.3816 12.3856 15.3816 11.6056 14.9016 11.1256L8.38156 4.60563C8.09156 4.31563 8.09156 3.83562 8.38156 3.54563C8.67156 3.25563 9.15156 3.25563 9.44156 3.54563L15.9616 10.0656C16.4716 10.5756 16.7616 11.2656 16.7616 11.9956C16.7616 12.7256 16.4816 13.4156 15.9616 13.9256L9.44156 20.4456C9.29156 20.5856 9.10156 20.6656 8.91156 20.6656Z"
        fill="white"
      />
    </svg>
  );
};
export default SvgChevronRight;
