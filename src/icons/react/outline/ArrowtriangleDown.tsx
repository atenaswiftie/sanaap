import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgArrowtriangleDown = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16.227 9H7.771c-.686 0-1.029.91-.543 1.445l3.7 4.066a1.427 1.427 0 0 0 2.15 0l3.7-4.066c.478-.534.135-1.445-.55-1.445Z"
      />
    </svg>
  );
};
export default SvgArrowtriangleDown;
