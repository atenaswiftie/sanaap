/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ForwardRefRenderFunction } from "react";
import type { CheckboxComponentProps } from "./types";

import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import { forwardRef } from "react";

const CheckboxComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  CheckboxComponentProps
> = (props, ref) => {
  return (
    <FormControlLabel
      // @ts-ignore
      size={props.size}
      control={<MuiCheckbox ref={ref} {...props} />}
      label={props.label}
    />
  );
};

export const Checkbox = forwardRef(CheckboxComponent);
