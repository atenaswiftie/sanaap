import type { ForwardRefRenderFunction } from "react";
import type { StepLabelProps } from "./types";

import { StepLabel as MuiStepLabel } from "@mui/material";
import { forwardRef } from "react";

import { StepLabelIcon } from "../StepLabelIcon";

const StepLabelComponent: ForwardRefRenderFunction<
  HTMLSpanElement,
  StepLabelProps
> = (props, ref) => {
  return (
    <MuiStepLabel
      ref={ref}
      {...props}
      StepIconComponent={StepLabelIcon}
      StepIconProps={{
        ...props.StepIconProps,
        ...props,
      }}
    >
      {props.children}
    </MuiStepLabel>
  );
};

export const StepLabel = forwardRef(StepLabelComponent);
