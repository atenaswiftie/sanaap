import type { ForwardRefRenderFunction } from "react";
import type { ButtonProps } from "./types";

import { LoadingButton } from "@mui/lab";
import { CircularProgress, buttonClasses } from "@mui/material";
import { forwardRef } from "react";

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  return (
    <LoadingButton
      ref={ref}
      {...props}
      loadingIndicator={<CircularProgress color="primary" size={16} />}
    >
      <span className={buttonClasses.text}>
        {props.children ?? props.title}
      </span>
    </LoadingButton>
  );
};

export const Button = forwardRef(ButtonComponent);
