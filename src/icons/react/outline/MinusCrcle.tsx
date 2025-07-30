import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgMinusCrcle = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
      <g clipPath="url(#clip0_4592_220200)">
        <path
          d="M8.25 12.5H15.75"
          stroke="black"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z"
          stroke="black"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <clipPath id="clip0_4592_220200">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgMinusCrcle;
