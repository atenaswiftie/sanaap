import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgChartPie = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.49 2.24c-1.667-.488-3.052-.56-4.018.136-.98.706-1.222 1.974-1.222 3.304v2.88c0 1.3.263 2.382.943 3.137.695.772 1.69 1.053 2.807 1.053h3.32c1.33 0 2.598-.242 3.303-1.222.696-.966.625-2.351.137-4.019-.722-2.454-2.815-4.547-5.27-5.269Zm-3.74 3.44c0-1.27.258-1.842.598-2.086.354-.255 1.109-.386 2.72.086 1.966.578 3.674 2.286 4.252 4.251.472 1.612.34 2.367.086 2.72-.244.34-.816.599-2.086.599H15c-.884 0-1.389-.22-1.693-.557-.32-.355-.557-.994-.557-2.133V5.68Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.41 4.745a.75.75 0 0 0-.3-1.47 9.85 9.85 0 0 0-7.73 11.264v.002c.671 4.107 3.97 7.407 8.08 8.07a9.841 9.841 0 0 0 11.275-7.763.75.75 0 1 0-1.47-.296A8.341 8.341 0 0 1 9.7 21.13h-.001c-3.47-.56-6.27-3.358-6.839-6.83a8.35 8.35 0 0 1 6.55-9.555Z"
      />
    </svg>
  );
};
export default SvgChartPie;
