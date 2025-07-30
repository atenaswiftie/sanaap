import type { ComponentProps } from "react";
import { createElement } from "react";
import { SvgIcon } from "@mui/material";
const SvgEdit2 = (props: ComponentProps<typeof SvgIcon>) => {
  return createElement(
    SvgIcon,
    props,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.103 2.836A3.52 3.52 0 0 1 15.76 1.81a5.183 5.183 0 0 1 4.93 4.931 3.52 3.52 0 0 1-1.027 2.657l-8.705 8.705a2.75 2.75 0 0 1-1.405.752l-3.645.73a2.25 2.25 0 0 1-2.677-2.456l.446-4.014c.069-.62.347-1.199.789-1.64l8.637-8.638Zm2.585.471a2.02 2.02 0 0 0-1.524.59l-.889.888a5.032 5.032 0 0 0 4.439 4.44l.889-.889a2.02 2.02 0 0 0 .59-1.525 3.683 3.683 0 0 0-3.505-3.504Zm.756 7.189a6.54 6.54 0 0 1-4.44-4.44l-6.478 6.478c-.2.201-.327.464-.358.746l-.446 4.014a.75.75 0 0 0 .892.818l3.645-.729a1.25 1.25 0 0 0 .639-.341l6.546-6.546Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 22a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
};
export default SvgEdit2;
