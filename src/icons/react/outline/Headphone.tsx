import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgHeadphone = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.49982 12.2H2.4999L2.49973 12.1908C2.45218 9.61345 3.41173 7.18343 5.19663 5.36031C6.98154 3.54717 9.37251 2.55005 11.9498 2.55005C17.2137 2.55005 21.4998 6.83619 21.4998 12.1V17.8C21.4998 17.9339 21.3837 18.05 21.2498 18.05C21.116 18.05 20.9998 17.9339 20.9998 17.8V12.1C20.9998 7.11429 16.9463 3.05005 11.9498 3.05005C9.50809 3.05005 7.23876 3.99223 5.553 5.70979C3.85775 7.43683 2.95871 9.73543 2.99982 12.1843V17.89C2.99982 18.0426 2.88506 18.15 2.74982 18.15C2.61596 18.15 2.49982 18.0339 2.49982 17.9V12.2Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M5.81 12.95H5.94C7.76386 12.95 9.25 14.4361 9.25 16.26V18.14C9.25 19.9638 7.76386 21.45 5.94 21.45H5.81C3.98614 21.45 2.5 19.9638 2.5 18.14V16.26C2.5 14.4361 3.98614 12.95 5.81 12.95Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgHeadphone;
