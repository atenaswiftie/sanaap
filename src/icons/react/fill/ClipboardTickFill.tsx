import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgClipboardTickFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/bulk/clipboard-tick">
        <g id="clipboard-tick">
          <path
            id="Vector"
            opacity={0.4}
            d="M16.2391 3.65002H7.75906C5.28906 3.65002 3.28906 5.66002 3.28906 8.12002V17.53C3.28906 19.99 5.29906 22 7.75906 22H16.2291C18.6991 22 20.6991 19.99 20.6991 17.53V8.12002C20.7091 5.65002 18.6991 3.65002 16.2391 3.65002Z"
            fill="#03817A"
          />
          <path
            id="Vector_2"
            d="M14.3517 2H9.65172C8.61172 2 7.76172 2.84 7.76172 3.88V4.82C7.76172 5.86 8.60172 6.7 9.64172 6.7H14.3517C15.3917 6.7 16.2317 5.86 16.2317 4.82V3.88C16.2417 2.84 15.3917 2 14.3517 2Z"
            fill="#03817A"
          />
          <path
            id="Vector_3"
            d="M10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78 15.23C8.49 14.94 8.49 14.46 8.78 14.17C9.07 13.88 9.55 13.88 9.84 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73L11.34 16.73C11.2 16.88 11 16.95 10.81 16.95Z"
            fill="#03817A"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgClipboardTickFill;
