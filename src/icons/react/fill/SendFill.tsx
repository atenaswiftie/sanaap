import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgSendFill = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/bold/send-2">
        <g id="send-2">
          <path
            id="Vector"
            d="M16.2595 2.96004L7.2295 5.96004C1.1595 7.99004 1.1595 11.3 7.2295 13.32L9.9095 14.21L10.7995 16.89C12.8195 22.96 16.1395 22.96 18.1595 16.89L21.1695 7.87004C22.5095 3.82004 20.3095 1.61004 16.2595 2.96004ZM16.5795 8.34004L12.7795 12.16C12.6295 12.31 12.4395 12.38 12.2495 12.38C12.0595 12.38 11.8695 12.31 11.7195 12.16C11.4295 11.87 11.4295 11.39 11.7195 11.1L15.5195 7.28004C15.8095 6.99004 16.2895 6.99004 16.5795 7.28004C16.8695 7.57004 16.8695 8.05004 16.5795 8.34004Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgSendFill;
